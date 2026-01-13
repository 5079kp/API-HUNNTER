---
description: Repository Information Overview
alwaysApply: true
---

# library_file Information

## Summary
A modern **React** web application built with **Vite**, featuring **3D graphics** (Three.js), **GSAP** animations, and **Firebase** integration. The project appears to be a library or book management system, including features like user authentication and a 3D hero section.

## Structure
- **src/**: Main source code directory.
  - **components/**: Reusable UI components like `Navbar`, `Loader`, and `BookCard`.
  - **pages/**: Application views including `Login`, `Register`, `Dashboard`, and `AddBook`.
  - **three/**: 3D-related components, specifically `Hero3D`.
  - **assets/**: Static assets like SVGs.
- **public/**: Publicly accessible static files.

## Language & Runtime
**Language**: JavaScript (ESM)  
**Version**: React 19+, Node.js (implied by Vite 7 usage)  
**Build System**: Vite  
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- `react`: ^19.2.0
- `three`: ^0.182.0 (3D engine)
- `@react-three/fiber`: ^9.5.0 (React bridge for Three.js)
- `@react-three/drei`: ^10.7.7 (Useful helpers for React Three Fiber)
- `firebase`: ^12.7.0 (Backend services)
- `gsap`: ^3.14.2 (Animations)
- `react-router-dom`: ^7.12.0 (Routing)

**Development Dependencies**:
- `vite`: ^7.2.4
- `tailwindcss`: ^3.4.17
- `eslint`: ^9.39.1
- `postcss`: ^8.5.6
- `autoprefixer`: ^10.4.23

## Build & Installation

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## Main Files & Resources
- **Entry Point**: `src/main.jsx`
- **Main App Component**: `src/App.jsx`
- **Firebase Configuration**: `src/firebase.js`
- **Vite Configuration**: `vite.config.js`
- **Tailwind Configuration**: `tailwind.config.js`
- **Main Layout**: `index.html`

## Testing & Validation
**Linting**: ESLint (Flat Config)
```bash
npm run lint
```
**Styling**: Tailwind CSS with PostCSS.
