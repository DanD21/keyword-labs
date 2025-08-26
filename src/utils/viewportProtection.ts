/**
 * Viewport Protection Utility
 * Detects zoom-out issues and provides reset functionality
 */

export class ViewportProtection {
  private static instance: ViewportProtection;
  private isZoomDetected = false;
  private originalViewportWidth = 0;
  private debounceTimer: NodeJS.Timeout | null = null;
  private consecutiveIssues = 0;
  private lastCheckTime = 0;
  private detectionEnabled = false; // Disabled by default to prevent false positives
  
  private constructor() {
    this.init();
  }
  
  public static getInstance(): ViewportProtection {
    if (!ViewportProtection.instance) {
      ViewportProtection.instance = new ViewportProtection();
    }
    return ViewportProtection.instance;
  }
  
  private init(): void {
    if (typeof window === 'undefined') return;
    
    // Store original viewport width
    this.originalViewportWidth = window.innerWidth;
    
    // Only set up detection if enabled (disabled by default)
    if (this.detectionEnabled) {
      // Set up zoom detection
      this.setupZoomDetection();
      
      // Set up orientation change handling
      this.setupOrientationChangeHandler();
      
      // Set up touch handling
      this.setupTouchHandling();
    }
    
    // Always make reset function available
    this.makeResetAvailable();
  }
  
  private setupZoomDetection(): void {
    let resizeTimer: NodeJS.Timeout;
    
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.debouncedZoomCheck();
      }, 250); // Increased debounce time
    };
    
    window.addEventListener('resize', handleResize);
    
    // Don't listen to orientationchange as it causes false positives
    // window.addEventListener('orientationchange', handleResize);
    
    // Visual viewport API for modern browsers - with more conservative timing
    if ('visualViewport' in window) {
      window.visualViewport?.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          this.debouncedZoomCheck();
        }, 500); // Even longer delay for visual viewport changes
      });
    }
  }
  
  private setupOrientationChangeHandler(): void {
    const handleOrientationChange = () => {
      // Clear any existing zoom detection during orientation change
      this.consecutiveIssues = 0;
      this.clearZoomWarning();
      
      setTimeout(() => {
        // Don't auto-reset on orientation change, just clear warnings
        this.consecutiveIssues = 0;
      }, 1000); // Allow time for orientation change to settle
    };
    
    window.addEventListener('orientationchange', handleOrientationChange);
  }
  
  private setupTouchHandling(): void {
    let startDistance = 0;
    let startTime = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        startDistance = this.getTouchDistance(e.touches[0], e.touches[1]);
        startTime = Date.now();
      }
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches.length === 2) {
        const endDistance = this.getTouchDistance(e.changedTouches[0], e.changedTouches[1]);
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        // If significant pinch gesture detected
        if (duration < 1000 && Math.abs(startDistance - endDistance) > 100) {
          setTimeout(() => {
            this.debouncedZoomCheck();
          }, 500); // Longer delay after pinch
        }
      }
    };
    
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
  }
  
  private getTouchDistance(touch1: Touch, touch2: Touch): number {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
  
  private debouncedZoomCheck(): void {
    // Clear existing debounce timer
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    
    // Debounce rapid checks
    this.debounceTimer = setTimeout(() => {
      this.checkForZoomIssues();
    }, 300);
  }
  
  private checkForZoomIssues(): void {
    // Skip if detection is disabled
    if (!this.detectionEnabled) return;
    
    const now = Date.now();
    
    // Prevent rapid consecutive checks
    if (now - this.lastCheckTime < 500) {
      return;
    }
    this.lastCheckTime = now;
    
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    
    // More conservative detection - only trigger on severe issues
    const isExtremelyZoomedOut = (
      currentWidth < 280 || // Very small width
      currentHeight < 300 || // Very small height
      (currentWidth > screenWidth * 1.5) // Massively zoomed out
    );
    
    const hasLayoutIssues = this.detectLayoutIssues();
    
    // Require consecutive detections to reduce false positives
    if (isExtremelyZoomedOut || hasLayoutIssues) {
      this.consecutiveIssues++;
      
      // Only trigger after 2 consecutive detections
      if (this.consecutiveIssues >= 2) {
        this.handleZoomIssue();
      }
    } else {
      // Reset counter on normal detection
      this.consecutiveIssues = 0;
      
      if (this.isZoomDetected) {
        this.clearZoomWarning();
      }
    }
  }
  
  private detectLayoutIssues(): boolean {
    // Check for common layout breaking indicators
    const body = document.body;
    if (!body) return false;
    
    // More conservative overflow detection
    const hasSignificantOverflow = body.scrollWidth > window.innerWidth + 50;
    
    // Only flag as unreadable at very small widths
    const hasUnreadableText = window.innerWidth < 240;
    
    return hasSignificantOverflow || hasUnreadableText;
  }
  
  private handleZoomIssue(): void {
    if (this.isZoomDetected) return; // Already handled
    
    this.isZoomDetected = true;
    this.showZoomWarning();
    
    // Don't auto-reset - let user decide
    // setTimeout(() => {
    //   this.attemptAutoReset();
    // }, 3000);
  }
  
  private showZoomWarning(): void {
    // Remove existing warning
    this.removeZoomWarning();
    
    const warning = document.createElement('div');
    warning.id = 'zoom-warning';
    warning.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10000;
      background: linear-gradient(135deg, #ff6b6b, #ee5a52);
      color: white;
      padding: 12px 16px;
      text-align: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      line-height: 1.4;
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
      transform: translateY(-100%);
      transition: transform 0.3s ease;
    `;
    
    warning.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 600px; margin: 0 auto;">
        <span>⚠️ Layout Issue Detected - Tap to reset viewport</span>
        <button onclick="window.viewportProtection?.resetViewport()" style="
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 12px;
          cursor: pointer;
          margin-left: 12px;
        ">Reset</button>
      </div>
    `;
    
    document.body.appendChild(warning);
    
    // Animate in
    setTimeout(() => {
      warning.style.transform = 'translateY(0)';
    }, 100);
    
    // Make reset function globally available via the makeResetAvailable method
  }
  
  private removeZoomWarning(): void {
    const existing = document.getElementById('zoom-warning');
    if (existing) {
      existing.style.transform = 'translateY(-100%)';
      setTimeout(() => {
        existing.remove();
      }, 300);
    }
  }
  
  private clearZoomWarning(): void {
    this.isZoomDetected = false;
    this.consecutiveIssues = 0; // Reset consecutive issues counter
    this.removeZoomWarning();
  }
  
  private attemptAutoReset(): void {
    // Try to reset viewport programmatically
    this.resetViewport();
  }
  
  private makeResetAvailable(): void {
    // Make reset function globally available
    (window as unknown as { viewportProtection: ViewportProtection }).viewportProtection = this;
  }
  
  public enableDetection(): void {
    this.detectionEnabled = true;
    this.setupZoomDetection();
    this.setupOrientationChangeHandler();
    this.setupTouchHandling();
  }
  
  public disableDetection(): void {
    this.detectionEnabled = false;
    this.clearZoomWarning();
  }
  
  public resetViewport(): void {
    // Method 1: Reset viewport meta tag
    this.resetViewportMetaTag();
    
    // Method 2: Force layout reflow
    this.forceLayoutReflow();
    
    // Method 3: Reset zoom programmatically (limited support)
    this.attemptZoomReset();
    
    // Clear warning
    setTimeout(() => {
      this.clearZoomWarning();
      // Don't immediately re-check after reset to avoid false positives
    }, 1000);
  }
  
  private resetViewportMetaTag(): void {
    const viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    
    if (viewport) {
      // Temporarily change viewport to force reset
      viewport.content = 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no';
      
      setTimeout(() => {
        viewport.content = 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=false, viewport-fit=cover';
      }, 100);
    }
  }
  
  private forceLayoutReflow(): void {
    document.body.style.display = 'none';
    // Trigger reflow
    const _ = document.body.offsetHeight;
    document.body.style.display = '';
  }
  
  private attemptZoomReset(): void {
    // Limited support - some browsers might respect this
    try {
      (document.body.style as unknown as { zoom: string }).zoom = '1';
      (document.documentElement.style as unknown as { zoom: string }).zoom = '1';
      
      // Reset transform scale as alternative
      document.body.style.transform = 'scale(1)';
      document.documentElement.style.transform = 'scale(1)';
      
      setTimeout(() => {
        document.body.style.transform = '';
        document.documentElement.style.transform = '';
      }, 500);
    } catch {
      console.log('Zoom reset not supported');
    }
  }
  
  public destroy(): void {
    this.clearZoomWarning();
    
    // Clear any pending timers
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    
    // Reset state
    this.consecutiveIssues = 0;
    this.isZoomDetected = false;
    
    // Remove event listeners would go here if we stored references
  }
}

// Auto-initialize on client side
if (typeof window !== 'undefined') {
  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      ViewportProtection.getInstance();
    });
  } else {
    ViewportProtection.getInstance();
  }
  
  // Viewport protection is now active with manual reset available
}
