---
name: frontend-design
description: "Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Emphasizes original design inspired by best-in-class sites in the same industry. Generates creative, polished code that avoids generic AI aesthetics. Triggers on: build, create, implement, design a component/page/UI/feature."
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Before writing a single line of code, you MUST research great websites in the same category.

Read `references/design-guidelines.md` for comprehensive typography, color, spacing, hierarchy, motion, and component guidelines.

---

## Phase 1: Research (MANDATORY — Do Not Skip)

Before any implementation, identify the project type and screenshot 3–5 best-in-class websites of the same industry/type using Playwright.

**Steps:**
1. Identify the project type (e.g., carpentry studio, SaaS, restaurant, law firm, portfolio)
2. Find 3–5 outstanding websites in that exact category — search if needed
3. Screenshot each with Playwright at 1440px desktop width
4. For each site, extract:
   - Color palette (dominant, secondary, accent)
   - Typography (font choices, size relationships, weight usage)
   - Layout structure (hero pattern, section rhythm, grid approach)
   - One signature moment — the single most memorable design detail
   - Emotional tone (2–3 words: "warm authority", "playful precision", etc.)
5. Synthesize: What do ALL great sites in this category share? What do NONE of them do?

**Output of Phase 1:** A written direction statement:
> "Inspired by [sites], but differentiated by [distinctive choice]. Emotional target: [X]. Signature element: [Y]."

---

## Phase 2: Design Direction

Commit to a bold aesthetic direction BEFORE coding. Define:

- **Tone**: Pick a specific end of a spectrum — brutally minimal, maximalist, editorial, artisan, utilitarian, luxury, etc.
- **Typography pair**: Display font + body font that both match the tone. See `references/design-guidelines.md#2-typography` for selection guidance. Avoid: Inter, Roboto, Arial, Space Grotesk.
- **Color palette**: 3–4 colors maximum. See `references/design-guidelines.md#3-color--palette` for construction method.
- **Signature element**: One unexpected detail that makes this design memorable (a texture, an unusual layout, a motion effect, a typographic treatment).

**CRITICAL**: The aesthetic must be specific to this brand/industry. Two carpentry sites and two tech sites should look nothing alike in your hands.

---

## Phase 3: Implementation

Implement production-grade code using the chosen stack (HTML/CSS/JS, React, Vue, etc.).

### Implementation Checklist

**Before starting any component:**
- [ ] Typography variables defined (font families, size scale, line heights)
- [ ] Color palette as CSS custom properties
- [ ] Spacing scale established

**For each section/component:**
- [ ] Typography hierarchy creates clear visual path (not all elements same weight/size)
- [ ] Generous spacing (sections: 80–160px vertical padding)
- [ ] Accent color used sparingly — only for primary CTAs and key highlights
- [ ] Every interactive element has a distinct hover state
- [ ] All buttons have visible padding and are never plain text
- [ ] Transitions use `ease` or custom cubic-bezier, not `linear`
- [ ] Images use `object-fit: cover` with thoughtful focal points

**Before finishing:**
- [ ] Test at 375px — no horizontal scroll, readable text, functional interactions
- [ ] All buttons and links have visible focus rings
- [ ] Forms use visible labels (not just placeholders)
- [ ] `prefers-reduced-motion` respected for all animations
- [ ] No global CSS resets that override TailwindCSS preflight (NEVER add `* { margin: 0; padding: 0; }`)

### What to Avoid
- Generic AI patterns: purple gradients, feature grids with icons+title+text repeated 6×, plain hero with centered text + two buttons on a solid background
- Overused fonts: Inter, Roboto, Arial, Helvetica, Space Grotesk, Outfit, DM Sans
- Timid sizing: if a heading doesn't feel almost too big, it's probably too small
- Flat designs: add depth via shadows, textures, gradients, or overlapping elements
- Identical component padding: vary density intentionally

### What Elevates Designs
- Full-bleed images that break the grid
- Staggered entrance animations (CSS `animation-delay`) on page load
- Asymmetric layouts (7/5 splits vs. 6/6)
- Atmospheric backgrounds: grain, gradient mesh, subtle geometric patterns
- Editorial typography: large pull quotes, numbered sections, dramatic scale contrast
- Contextual photography: hands working, material textures, process shots

---

## Reference
See `references/design-guidelines.md` for:
- Section 2: Typography system and font pairing guide
- Section 3: Color palette construction by industry
- Section 4: Spacing scale and layout patterns
- Section 5: Visual hierarchy tools and CTA design
- Section 6: Animation patterns and CSS implementation
- Section 7: Photography, textures, and decorative elements
- Section 8: Component anti-patterns and elevated alternatives
- Section 9: Full quality checklist before delivery
