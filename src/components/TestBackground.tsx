'use client';

import React from 'react';

export function TestBackground() {
  return (
    <div 
      className="fixed inset-0 z-0"
      style={{
        backgroundColor: '#1a1f1a',
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(0, 240, 255, 0.8), transparent 30%),
          radial-gradient(circle at 75% 75%, rgba(255, 0, 120, 0.6), transparent 30%),
          radial-gradient(circle at 50% 50%, rgba(120, 255, 0, 0.4), transparent 30%)
        `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%',
        animation: 'gradientMove 10s ease-in-out infinite'
      }}
    />
  );
}
