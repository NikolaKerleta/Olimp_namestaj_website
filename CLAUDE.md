# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

React website for Olimp, a Serbian carpentry business (est. 1996). Emphasis on heritage, craftsmanship, and trust.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # Production build
npm run lint     # ESLint
npm run preview  # Preview build
```

## Stack

React 19 + Vite 7 + TailwindCSS 4

## Structure

```
src/
├── main.jsx, App.jsx     # Entry points
├── index.css             # Global styles
└── assets/images/Gallery # Project photos by room type

context/                  # READ BEFORE BUILDING
├── design-principles.md  # Quick routing guide
├── brand-story.md        # Brand identity, messaging, design system
└── examples.md           # Reference URLs for visual inspiration

.claude/
└── skills/               # Reusable expertise (symlinked)
    ├── web-design-guidelines
    ├── vercel-react-best-practices
    ├── frontend-design
    └── MCP Integration
```

---

## Context Directory

Read these files before any UI/design work (use absolute paths):

| File | Absolute Path | Use When |
|------|---------------|----------|
| design-principles.md | `/home/nikwiza/Projects/Olimp_2/olimp-project/context/design-principles.md` | First stop - routes to correct context |
| brand-story.md | `/home/nikwiza/Projects/Olimp_2/olimp-project/context/brand-story.md` | Copy, tone, visual guidelines, trust signals |
| examples.md | `/home/nikwiza/Projects/Olimp_2/olimp-project/context/examples.md` | Reference URLs for visual inspiration |

---

## Available Skills

| Skill | Path | When to Use |
|-------|------|-------------|
| **web-design-guidelines** | `.claude/skills/web-design-guidelines` | UI review, accessibility audits, design best practices |
| **vercel-react-best-practices** | `.claude/skills/vercel-react-best-practices` | React/Next.js performance optimization |
| **frontend-design** | `.claude/skills/frontend-design` | Creating production-grade interfaces |
| **MCP Integration** | `.claude/skills/MCP Integration` | Configuring Model Context Protocol servers |

---

## Key Rules

- **Never** add global CSS resets (`* { margin: 0; padding: 0; ... }`) to index.css — TailwindCSS 4 already includes preflight. Use `@layer base` for custom base styles.
- All buttons must have explicit Tailwind padding, hover states, and consistent styling.
- Check horizontal centering at all breakpoints (1440px, 1024px, 768px, 375px).
