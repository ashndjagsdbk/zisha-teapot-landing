---
name: qini-motion-director
description: Use this skill when improving motion design, scroll interactions, transitions, hover states, mobile swipe behavior, and premium interaction quality for the Qini zisha teapot website. This skill should prevent the page from feeling like static PPT while preserving a restrained luxury ceramic brand aesthetic.
---

# Qini Motion Director

You are optimizing motion and interaction for the Qini zisha teapot brand website.

The goal is not to add flashy animation. The goal is to make the page feel like a restrained premium brand experience rather than a static PPT deck.

## Brand motion principles

- Motion must serve understanding of the teapot, clay, craft, product lines, and consultation path.
- Preserve the existing dark, narrow-light, ceramic, zisha clay, premium object-focused aesthetic.
- Avoid flashy, colorful, bouncing, rotating, gamified, SaaS-style, or e-commerce-style animations.
- Motion should feel slow, intentional, tactile, and cinematic.
- Prefer subtle movement, opacity, scale, masking, light sweep, parallax, stagger, and progressive disclosure.
- Keep the user’s focus on the object and the decision path.
- Do not over-animate text-heavy areas.

## Preferred motion vocabulary

Use restrained combinations of:

- opacity: 0 → 1
- y: 24px → 0
- scale: 0.98 → 1
- image scale: 1 → 1.04
- slow parallax: translateY within ±32px
- staggered card entrance: 0.08s–0.16s delay
- hover border brighten
- hover gold label emphasis
- CTA arrow translateX 4px
- active state glow at low opacity
- image fade + slight scale when switching content
- sticky sections for important narrative moments
- horizontal scroll or swipe for process/product-line modules

## Avoid

- springy bounce
- fast zoom
- rotating elements
- neon glow
- large blur transitions
- excessive text animation
- carousel autoplay without user control
- scroll-jacking that prevents natural scrolling
- heavy 3D effects
- animations that make mobile pages lag

## Module-specific guidance

### Hero

The hero should feel like the opening shot of a commercial film.

Recommended:
- Title, eyebrow, subtitle, CTA stagger in.
- Product image or logo image slowly reveals.
- On scroll, background image can scale slightly to 1.04–1.06.
- Text can drift upward and fade slightly.
- Keep mobile motion lighter.

Do not:
- Move the teapot too much.
- Make the title unreadable.
- Add decorative particles.

### Clay module

The clay texture should feel tactile.

Recommended:
- Slow parallax on clay background.
- Narrow light sweep or gradient movement.
- Text emerges from darkness.
- Keep contrast controlled.

### Product line module

The product line cards should feel like a path, not a PPT grid.

Recommended:
- Cards enter one by one.
- 01 / 02 / 03 / 04 should have subtle gold emphasis.
- Hover should brighten border and move CTA arrow.
- Mobile can use horizontal swipe with snap.
- If possible, show a subtle progress line or path cue from 初器 → 饰器 → 守器 → 新器.

### Structure explorer

This is the most important interaction area.

Recommended:
- Active hotspot gold highlight.
- Inactive hotspots reduced opacity.
- On hotspot hover, show a short tooltip.
- On click, detail image fades and slightly scales in.
- Detail tags stagger in.
- Mobile: detail card switches smoothly, not abruptly.

### Craft / process section

The craft section should not feel like static cards.

Recommended:
- Use horizontal scroll, swipe, or focus-card behavior.
- Current step should be visually dominant.
- Other steps dim slightly.
- Each step should keep image + number + short sentence.
- Do not make it a generic card grid.

### Patina section

The patina interaction must show time.

Recommended:
- Active stage has clear selected state.
- Image changes with fade and slight scale.
- If reusing one image, apply controlled CSS filter differences:
  - new: brightness(0.86) saturate(0.8)
  - 30 days: brightness(0.9) saturate(0.9)
  - 180 days: brightness(0.96) saturate(1)
  - long-term: brightness(1.02) saturate(1.08)
- Avoid fake overdone color changes.

### Trust section

The trust section should feel inspectable.

Recommended:
- Row hover: label gold, row border brightens, content shifts 4px.
- Mobile rows can tap-expand one extra detail line.
- Keep text calm and credible.

### CTA

CTA motion should guide, not sell.

Recommended:
- CTA button hover arrow moves 4px.
- Final CTA background can slowly scale.
- If using the logo background, keep it dark and integrated with clay texture.
- Avoid e-commerce urgency.

## Technical requirements

- Use CSS transitions or Framer Motion if already installed.
- Do not add heavy libraries unless necessary.
- Respect prefers-reduced-motion.
- Keep animation performant:
  - animate transform and opacity where possible
  - avoid layout-thrashing animations
  - avoid animating box-shadow heavily
- Do not break lazy loading.
- Do not break Netlify build.
- Run npm run build after changes.

## Output requirements

After changes, report:

1. Files changed
2. Modules improved
3. Desktop interactions added
4. Mobile interactions added
5. Performance considerations
6. Build result
