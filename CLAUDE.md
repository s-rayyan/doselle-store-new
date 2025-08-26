# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js e-commerce store template using the Pages Router pattern. The project is built with TypeScript, HeroUI component library, and Tailwind CSS v4.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting with auto-fix
npm run lint
```

## Architecture & Structure

### Framework Stack
- **Next.js 15.3.1** with Pages Router (not App Router)
- **HeroUI v2** for UI components
- **Tailwind CSS v4** for styling
- **TypeScript** for type safety
- **Framer Motion** for animations

### Key Directories
- `pages/` - Next.js routes using Pages Router pattern
  - `_app.tsx` - App wrapper with providers (theme, HeroUI)
  - `api/` - API routes
- `components/` - Reusable React components
- `layouts/` - Layout components wrapping pages
- `config/` - Site configuration and fonts
- `public/images/` - Static assets including product images

### Important Configuration Files
- `tsconfig.json` - Path alias `@/*` maps to root directory
- `eslint.config.mjs` - ESLint 9 flat config with React/TypeScript rules
- `tailwind.config.js` - Tailwind CSS configuration with HeroUI theme integration
- `next.config.js` - Next.js configuration with strict mode enabled

### Styling Approach
- Tailwind CSS utilities with HeroUI theme
- Global styles in `styles/globals.css` (minimal)
- Component styling uses `tailwind-variants` for conditional classes
- Dark/light theme support via `next-themes`

### Current Features
- Product showcase pages
- Theme switching (dark/light mode)
- Responsive navigation
- HeroUI component integration
- TypeScript throughout

### Notes for Development
- Always use the `@/` path alias for imports from project root
- Follow existing component patterns when creating new components
- Use HeroUI components where possible for consistency
- Ensure dark mode compatibility when adding new UI elements
- No test framework is currently configured