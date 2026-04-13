# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Abdalla Tawfig (AT Software). Built with React 19 + Vite 7, no TypeScript. Single-page app with section-based navigation (Hero, About, Experience, Projects, Skills, Contact).

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Preview production build:** `npm run preview`

No test framework is configured.

## Architecture

### App Structure
`main.jsx` renders `<I18nProvider>` wrapping `<App>`. App composes all sections in order and manages a loading state (`Loader` component). There is no routing — all sections render on a single page with anchor-based smooth scrolling.

### Internationalization (i18n)
Custom i18n system in `src/i18n/index.jsx` — no external library. Both English and Arabic translations live as a single nested object in that file. Uses React Context (`I18nProvider` / `useI18n` hook). Access translations via dot-notation keys: `t('nav.about')`. Some translation values are functions for interpolation (e.g., `experience.aria.openCompany`). Language defaults to English, persisted in `localStorage`, and sets `document.dir` to `rtl` for Arabic.

### Styling
- **CSS Modules** (`*.module.css`) for component-scoped styles
- **Global utility classes** in `src/index.css`: `.container`, `.section`, `.btn`, `.btn-cta`, `.btn-outline`, `.visually-hidden` — used directly in JSX alongside module styles
- **Design tokens** in `src/styles/tokens.css` — colors, spacing, radii, breakpoints, fonts as CSS custom properties
- Dark navy theme (`--color-bg: #0A192F`, accent `--color-accent: #64FFDA`)
- RTL support uses `[dir="rtl"]` selectors and CSS logical properties (`text-align: start`)

### Data
Experience entries and timeline milestones are hardcoded arrays in the component files themselves (e.g., `experiences` array in `Experience.jsx`), not in separate data files.

### Custom Hooks (`src/hooks/`)
Hooks are `.js` files (not `.jsx`).
- `useInView` — IntersectionObserver-based visibility detection; fires once then unobserves
- `useTypedText` — typewriter animation cycling through an array of strings
- `useScrollSpy` — tracks which section is currently in the viewport for nav highlighting

### Component Conventions
- Functional components, JSX files (`.jsx`)
- Each component has a co-located `.module.css` file
- Icons from `lucide-react` and `react-icons`
- No routing library — smooth-scroll navigation between anchor sections

### ESLint
- Flat config in `eslint.config.js`
- `no-unused-vars` ignores variables starting with uppercase or underscore (`^[A-Z_]`)
- React Hooks and React Refresh plugins enabled
