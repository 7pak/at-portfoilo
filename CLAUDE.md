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

### Internationalization (i18n)
Custom i18n system in `src/i18n/index.jsx` — no external library. Supports English and Arabic (RTL). Uses React Context (`I18nProvider` / `useI18n` hook). Translations are a nested object; access via dot-notation keys like `t('nav.about')`. Language defaults to English, persisted in `localStorage`, and sets `document.dir` to `rtl` for Arabic.

### Styling
- **CSS Modules** (`*.module.css`) for component-scoped styles
- **Design tokens** in `src/styles/tokens.css` — colors, spacing, radii, breakpoints as CSS custom properties
- Dark navy theme (`--color-bg: #0A192F`, accent `--color-accent: #64FFDA`)
- Global styles in `src/App.css` and `src/index.css`

### Custom Hooks (`src/hooks/`)
- `useInView` — IntersectionObserver-based visibility detection (fires once)
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
