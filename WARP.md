# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## 🚀 Essential Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack (port 3000) |
| `npm run build` | Build optimized production bundle |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

*Alternative package managers: `yarn`, `pnpm`, or `bun` can be used instead of `npm`*

## 🏗️ Architecture Overview

This is a **Next.js 15** application using the **App Router** pattern with these key architectural patterns:

### Page Structure
- **Single-page application** with scroll-snap sections (each takes full viewport height)
- Main page composition in `src/app/page.tsx` with client-side components
- Layout and metadata defined in `src/app/layout.tsx`

### Component Organization
- **Section-based layout**: Each content area is wrapped in `<Section>` component with scroll-snap behavior
- **Presentation components**: `HeroSection`, `CircleSection`, `WorkflowSection`, `GrowthSection`, etc.
- **Navigation**: Fixed navigation with contact modal integration
- **Animation utilities**: Separate from presentation logic in `/utils` directory

### Key Dependencies
- **React 19** with TypeScript
- **GSAP 3.13** for advanced animations with ScrollTrigger
- **Tailwind CSS 4** via PostCSS with inline theming
- **Space Grotesk** font loaded via `next/font/google`

## 🎞️ Animation System

The project uses a **dual animation approach**:

### 1. GSAP-based Animations (`utils/animations.ts`)
- Rich text reveal animations with stagger effects
- Circle animations (concentric, row, cluster configurations)
- Counter animations with scroll triggers
- Automatic ScrollTrigger refresh on window resize

### 2. Intersection Observer Fallback (`utils/simpleAnimations.ts`)
- Lightweight alternative using native browser APIs
- CSS-driven transitions with `.animate` class toggle
- Currently active system (initialized in `page.tsx` useEffect)

### Animation CSS Classes
- `.reveal-text` - Text reveal on scroll with opacity and translateY transitions
- `.circle-animation`, `.circle-outer`, `.circle-inner` - Circle scale animations
- `.educate-circle`, `.develop-circle` - Specialized circle types with staggered delays via `--delay` CSS custom property

## 🎨 Styling Approach

### Tailwind CSS 4 Integration
- Imported via `@import "tailwindcss"` in `globals.css`
- **Inline theming** with `@theme inline` directive for custom color tokens
- No separate `tailwind.config.js` (configuration is inline)

### Design System
- **CSS Custom Properties** for consistent theming:
  - `--bg-primary` (#1a1f1a) - Dark green/black background
  - `--text-primary` (#ffffff) - White text
  - `--accent-green` (#4ade80) - Green accents
- **Space Grotesk** font enforced globally via CSS font-family declarations

### Responsive Design
- Mobile-first approach with responsive breakpoints
- Scroll-snap optimization for mobile with `-webkit-overflow-scrolling: touch`
- Adjusted animation timing and sizing for mobile devices

## 📁 Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata and font setup
│   │   ├── page.tsx         # Main page with section composition
│   │   └── globals.css      # Global styles, animations, and theme
│   ├── components/
│   │   ├── Navigation.tsx    # Fixed header with contact trigger
│   │   ├── Section.tsx      # Base scroll-snap section wrapper
│   │   ├── HeroSection.tsx  # Landing section with morphing text
│   │   ├── CircleSection.tsx # Reusable animated circle sections
│   │   ├── ContactModal.tsx # Contact form modal
│   │   └── [Other sections] # Specialized content sections
│   ├── utils/
│   │   ├── animations.ts    # GSAP-based animation functions
│   │   └── simpleAnimations.ts # Intersection Observer animations
│   └── lib/
│       └── utils.ts         # Utility functions (cn for className merging)
├── public/               # Static assets (logos, icons)
├── package.json         # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration with path aliases
├── next.config.ts      # Next.js configuration
└── postcss.config.mjs  # PostCSS with Tailwind plugin
```

### Key File Roles
- **`src/app/page.tsx`**: Main application orchestration and animation initialization
- **`src/components/`**: Reusable UI components with clear separation of concerns
- **`src/utils/`**: Animation logic separated from presentation components
- **`src/lib/utils.ts`**: Shared utilities (currently just `cn()` for className merging)

## ℹ️ Additional Information

### Development Notes
- **Turbopack** enabled in dev script for faster rebuilds
- TypeScript with strict mode enabled
- Path aliases configured: `@/*` → `./src/*`
- No test suite currently configured

### Deployment
- Optimized for **Vercel Platform** (recommended in README)
- Standard Next.js production build process
- See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying)

### References
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js Tutorial](https://nextjs.org/learn)
- [GSAP Documentation](https://greensock.com/docs/)
