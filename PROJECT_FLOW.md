# AT Portfolio — Context & Flow

This document is the living source of truth for goals, architecture, and our stage-by-stage plan. We will update it as we go so the context and flow remain clear.

## Project Goal
- Build a clean, fast, and maintainable personal portfolio with a clear, consistent design and readable code.

## Principles
- Clean architecture with clear boundaries and minimal coupling.
- Simple, readable code; small components with single responsibility.
- Incremental delivery, stage-by-stage, with continuous refinement.
- Accessibility and performance first; sensible defaults over complexity.

## Tech Stack (current)
- React + Vite (JavaScript).
- Styling: plain CSS (can evolve to CSS Modules or Tailwind based on preference).
- Assets: SVG for icons/graphics.

## Architectural Outline
We’ll keep layers simple and pragmatic:
- Presentation (UI): pages, components, layouts.
- Domain (core): models and use-cases (data structures, business rules for portfolio content).
- Infrastructure (data): services/adapters (fetchers, local content sources, integrations).

Directory plan (adopt gradually as features grow):
```
src/
  app/         # app root, providers, routing
  pages/       # page-level views
  components/  # reusable UI building blocks
  features/    # feature-specific components/logic
  models/      # data models (types/interfaces or JSDoc)
  services/    # content loaders, adapters, integrations
  hooks/       # shared hooks
  styles/      # global styles, tokens
```

## Stage Plan
0. Bootstrap: Vite React app scaffolded. Status: done.
1. Foundations: brand, palette, typography, spacing scale, tokens. Status: pending.
2. Layout: header/nav, hero, section scaffolding, footer, routing. Status: pending.
3. Content: About, Skills, Projects, Experience, Contact. Status: pending.
4. Interactions: animations, hover states, accessibility keyboard flows. Status: pending.
5. Data: content model, JSON or local data source. Status: pending.
6. Polish: SEO, social meta, performance budgets, Lighthouse. Status: pending.
7. Deploy: build, deploy target (Netlify/Vercel/GitHub Pages). Status: pending.

## Decision Log
- 2025-11-23: Project initialized with Vite React; commit to clean architecture and staged delivery. Created this context & flow doc.

## Open Questions (to confirm)
- Styling approach: stay with plain CSS, move to CSS Modules, or Tailwind?
- Routing: client-side with `react-router` vs single page with anchored sections?
- Animations: lightweight CSS transitions vs a library (e.g., Framer Motion)?

## Next Up
Please share your design preferences for Stage 1 (branding, typography, color palette). I will translate them into tokens and a theme, then scaffold global styles and base layout.