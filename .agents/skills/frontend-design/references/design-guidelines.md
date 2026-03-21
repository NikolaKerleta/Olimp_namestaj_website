# Frontend Design Guidelines

## Table of Contents
1. [Research Before You Build](#1-research-before-you-build)
2. [Typography](#2-typography)
3. [Color & Palette](#3-color--palette)
4. [Spacing & Layout](#4-spacing--layout)
5. [Visual Hierarchy](#5-visual-hierarchy)
6. [Motion & Animation](#6-motion--animation)
7. [Imagery & Visual Elements](#7-imagery--visual-elements)
8. [Component Patterns](#8-component-patterns)
9. [Quality Checklist](#9-quality-checklist)

---

## 1. Research Before You Build

**This is mandatory.** Never start coding without first analyzing 3–5 great websites in the same industry/type.

### How to Research
1. Identify the project type (e.g., carpentry studio, SaaS dashboard, portfolio, e-commerce, restaurant, law firm)
2. Use Playwright to screenshot 3–5 best-in-class sites of that exact type
3. For each site, extract and note:
   - **Color palette**: Primary, secondary, accent colors
   - **Typography**: Font families, weights, size ratios, line heights
   - **Layout rhythm**: How sections are divided, hero structure, grid usage
   - **Signature moments**: What makes it memorable — one unexpected detail per site
   - **Emotional tone**: Words that describe the feeling (e.g., "warm authority", "playful precision")

### What to Capture in Your Notes
After screenshotting, write 3–5 bullet points per site. Example:
```
Site A (craftsmen studio):
- Warm cream background (#F5F0E8) with charcoal text — feels aged but authoritative
- Single typeface (Freight Display) used at dramatically different weights
- Generous whitespace between sections — breathing room signals luxury
- One full-bleed black-and-white photo of hands working — instant credibility
- Subtle grain texture overlay on hero — depth without complexity
```

### Extracting a Direction
After researching, synthesize your findings:
- What patterns do ALL great sites in this category share? (These are baseline requirements)
- What does NONE of them do that you could pioneer? (This is your differentiation)
- What single emotion should the user feel 5 seconds after landing?

---

## 2. Typography

### Core Principles
- **Type does most of the work.** 80% of interface is text. Great typography alone can make a design feel premium.
- **Pair deliberately**: One display face + one body face maximum. They should create contrast, not conflict.
- **Size creates hierarchy**: Use dramatic scale differences (e.g., 72px hero, 48px section titles, 18px body). Timid sizing is the #1 amateur mistake.
- **Line height matters**: 1.1–1.2 for headlines, 1.5–1.7 for body text. Never use browser default for body.

### Font Selection
**Avoid these overused choices:**
- Inter, Roboto, Arial, Helvetica, System UI, Space Grotesk, DM Sans, Outfit

**Seek these qualities instead:**
- Personality that matches the brand (editorial, artisan, technical, playful)
- Optical correctness at the intended sizes (display fonts need optical sizing)
- Sufficient weight range for hierarchy (at least Light, Regular, Bold, Black)

**Great sources:** Google Fonts (serif section), Adobe Fonts, Fontshare, Fontsource

**Examples of characterful pairings:**
- Heritage/craft: Playfair Display (display) + Lora (body)
- Technical/precision: Barlow Condensed (display) + Source Serif (body)
- Editorial/magazine: Cormorant Garamond (display) + Libre Baskerville (body)
- Modern luxury: Neue Montreal (display) + GT America (body)
- Artisan/handcraft: Freight Display (display) + Freight Text (body)

### Typographic Scale
Use a consistent modular scale (1.25× or 1.333× ratio):
```
xs:   12px
sm:   14px
base: 16px
lg:   20px
xl:   25px
2xl:  31px
3xl:  39px
4xl:  49px
5xl:  61px
```

### Rules
- Max line length: 65–75 characters for body text (use `max-w-prose` or `max-w-2xl`)
- Letter spacing: Tighten headlines (-0.02em to -0.04em), normal for body
- Never center-align body text (only headlines and short UI labels)
- Use `font-feature-settings: "kern", "liga"` for professional typography rendering

---

## 3. Color & Palette

### Core Principles
- **One dominant, one secondary, one accent.** More is noise.
- **Dominant color sets the emotional tone** — it should cover 60–70% of the interface
- **Accent color does the heavy lifting** — used for CTAs, highlights, hover states only
- **Contrast is hierarchy** — light/dark contrast between elements creates visual path

### Palette Construction
Start with a base mood, then build:
1. Choose a base (warm neutrals, cool grays, rich darks, etc.)
2. Derive tints/shades (5–6 steps from lightest to darkest)
3. Add one accent that "pops" — it should feel slightly surprising but right

**Example: Heritage/Warm craft brand**
```
Background:    #F7F4EE  (warm cream)
Surface:       #EDE8DC  (slightly darker cream)
Text primary:  #1A1410  (near-black, warm-tinted)
Text secondary:#5C4F3A  (warm brown)
Accent:        #8B5E3C  (copper/sienna)
Border:        #D4CAB8  (soft warm gray)
```

### Color Psychology by Industry
- **Craft/artisan**: Warm neutrals, earthen tones, muted greens
- **Luxury/premium**: Deep navy, charcoal, gold accents, cream whites
- **Technology/SaaS**: Cool grays, blues, high contrast, minimal palette
- **Health/wellness**: Sage greens, soft terracotta, clean whites
- **Finance/law**: Navy, forest green, white, single gold accent
- **Food/restaurant**: Deep burgundy, warm cream, forest green, terracotta

### Rules
- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text (WCAG AA)
- Never use pure `#000000` or `#FFFFFF` — use near-blacks and near-whites with hue
- Test your palette in grayscale to verify contrast holds without color
- Use CSS custom properties: `--color-brand`, `--color-surface`, `--color-text-primary`, etc.

---

## 4. Spacing & Layout

### Core Principles
- **Whitespace is not wasted space.** It creates breathing room, signals quality, and improves readability.
- **Consistent rhythm** beats arbitrary values. Stick to your spacing scale.
- **Section spacing** should be generous: 80–160px vertical padding between major sections.

### Spacing Scale (Base 4px)
```
1:   4px   (micro gaps within components)
2:   8px   (tight groupings)
3:   12px  (component internal padding)
4:   16px  (standard padding)
6:   24px  (component separation)
8:   32px  (loose groupings)
12:  48px  (section sub-divisions)
16:  64px  (section padding)
24:  96px  (large section padding)
32:  128px (hero spacing)
```

### Layout Patterns
- **Max content width**: 1200–1400px for full layouts, 720–800px for text-heavy
- **Grid**: 12-column grid for complex layouts, 4-column for mobile
- **Gutters**: 24px minimum, 32–40px preferred
- **Hero sections**: Full viewport height (`min-h-screen`) or 85vh for visual impact

### Grid Techniques That Elevate Design
- **Overlapping elements**: Cards or images that cross section boundaries
- **Asymmetric grids**: 7/5 splits instead of 6/6 — more dynamic
- **Full-bleed images** with text overlay — dramatic and editorial
- **Staggered grids**: Alternate image/text positions every row
- **Sticky elements**: Sidebar navigation or floating CTAs

---

## 5. Visual Hierarchy

### The 3-Second Rule
A visitor should understand the page's primary message in 3 seconds. Test this by squinting at your design — the most important element should be readable even blurred.

### Hierarchy Tools (in order of impact)
1. **Size** — Biggest = most important. Use dramatic scale differences.
2. **Weight** — Bold anchors the eye.
3. **Color** — Accent color draws attention. Use sparingly.
4. **Spacing** — Proximity groups related items. Distance separates.
5. **Position** — Top-left is primary (LTR reading), center commands focus.
6. **Contrast** — Light on dark or dark on light creates immediate pop.

### Common Hierarchy Mistakes
- Too many elements at the same visual weight (everything "important" = nothing important)
- Weak headlines that don't differentiate from body text
- Buttons that don't stand out from surrounding elements
- Overcrowded sections with no clear focal point

### CTA Design
Every primary CTA must have:
- Distinct background color (your accent)
- Visible padding (min 12px vertical, 24px horizontal)
- Clear hover state (darken, scale, or shadow transition)
- Single line of text (never wrap a CTA)

---

## 6. Motion & Animation

### Principles
- **Purpose over decoration**: Every animation should communicate something (loading, transition, feedback, emphasis)
- **Restraint**: One hero animation > ten scattered animations
- **Performance**: CSS transitions/animations always > JavaScript when possible

### High-Impact Animation Patterns
1. **Staggered page entrance**: Elements fade/slide in sequentially (150ms delay between each)
2. **Scroll-triggered reveals**: Sections fade in as user scrolls — adds depth to long pages
3. **Hover states**: Subtle scale (1.02–1.05) or shadow changes on cards
4. **Hero parallax**: Background moves at 0.5× scroll speed — creates depth
5. **Text reveals**: Clippath or opacity reveal on major headings

### Implementation (CSS-first)
```css
/* Staggered entrance */
.animate-in {
  animation: fadeSlideUp 0.6s ease both;
}
.stagger-1 { animation-delay: 0ms; }
.stagger-2 { animation-delay: 150ms; }
.stagger-3 { animation-delay: 300ms; }

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### Rules
- Duration: 150–300ms for micro-interactions, 400–700ms for page-level transitions
- Easing: Use `ease` or `cubic-bezier(0.4, 0, 0.2, 1)` — never `linear` for UI
- Respect `prefers-reduced-motion` media query — always provide a no-motion fallback
- Never animate more than `transform` and `opacity` (avoid layout-triggering properties)

---

## 7. Imagery & Visual Elements

### Photography
- **Use real, contextual photography** over generic stock photos
- **Show craft/process**: Hands working, details, textures — builds trust and authenticity
- **Black & white** can signal quality and timelessness
- **Consistent treatment**: All photos should share a color grade or filter
- **Object-fit: cover** with thoughtful focal points — never distorted images

### Textures & Backgrounds
Instead of flat solid colors, add depth:
- **Grain overlay**: `background-image: url("noise.svg")` — 3–5% opacity
- **Gradient mesh**: Multiple radial gradients layered
- **CSS patterns**: Subtle geometric patterns via CSS (dots, lines, crosses)
- **Linen/paper texture**: SVG filter or image overlay for artisan brands

### Decorative Elements
- **Horizontal rules**: Custom SVG lines instead of `<hr>` — can be ornamental
- **Quotation marks**: Large, styled pull quotes create visual anchors
- **Section numbers**: "01 / 02 / 03" adds editorial structure
- **Icon system**: Consistent stroke weight and style throughout — never mix styles

---

## 8. Component Patterns

### What to Avoid (Generic AI Slop)
- Purple gradients on white backgrounds
- Cards with identical padding/shadow on everything
- "Features grid" with icon-title-description repeated 6×
- Hero with centered headline + subtext + two buttons on solid color
- Testimonials with stock headshots and 5 gold stars
- Rounded everything (border-radius: 9999px on every element)

### What Elevates Designs
- **Editorial layouts**: Text flows around images, magazine-style
- **Full-bleed sections**: Alternate between full-width backgrounds and contained content
- **Progressive disclosure**: Show less, reveal more on interaction
- **Numbered storytelling**: Guide users through a narrative with numbered steps
- **Social proof done well**: Real project photos > generic testimonials
- **Process/behind-the-scenes**: "How we work" sections build trust in craft businesses

### Navigation
- **Desktop**: Inline or sticky header — transparent over hero, solid on scroll
- **Mobile**: Hamburger opens full-screen overlay or slide-in drawer — never default browser behavior
- Active link states must be visually distinct
- Logo should be contextual (wordmark vs. icon mark depending on space)

---

## 9. Quality Checklist

Before declaring work complete, verify:

**Typography**
- [ ] Body text is 16–18px minimum, line-height 1.5+
- [ ] Headlines have clear scale progression (not all the same size)
- [ ] No orphaned words (single word on last line of a paragraph)
- [ ] Max line length respected on body text

**Color**
- [ ] Accessible contrast ratios (4.5:1 for body)
- [ ] Accent color used sparingly (not everywhere)
- [ ] Hover states visible on all interactive elements

**Spacing**
- [ ] Sections have generous vertical padding (64px+)
- [ ] Related elements are clearly grouped
- [ ] Touch targets are 44×44px minimum on mobile

**Layout**
- [ ] Content is horizontally centered at all breakpoints
- [ ] No horizontal overflow at 375px viewport
- [ ] Images don't distort at any breakpoint

**Motion**
- [ ] All transitions have `prefers-reduced-motion` fallback
- [ ] No janky or layout-shifting animations

**Components**
- [ ] All buttons have visible padding and hover state
- [ ] All interactive elements have focus rings
- [ ] Forms have visible labels (not just placeholder text)

**Brand Alignment**
- [ ] Typography choice reflects the brand personality
- [ ] Color palette matches the emotional tone
- [ ] Design is distinctive from competitors (not interchangeable)
