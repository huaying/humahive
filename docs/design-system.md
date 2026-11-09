# HumAhive design system

The site keeps its warm orange palette, original logo, Merriweather headings,
and Source Sans 3 body text. Shared visual rules live in
`src/app/globals.css`; page CSS modules primarily arrange content.

## Color roles

Use semantic roles for UI instead of selecting an orange shade per section.
The existing orange scale remains available for decorative palette work.

| Role | Token | Value / purpose |
| --- | --- | --- |
| Primary action | `--color-primary` | `#BA4A24` |
| Primary hover | `--color-primary-hover` | `#A13D1D` |
| Primary pressed | `--color-primary-active` | `#873117` |
| Text on primary | `--color-on-primary` | `#FFFFFF` |
| Accent text / links | `--color-primary-text` | `#923A1E` |
| Body text | `--color-text-secondary` | `#525252` |
| Supporting text | `--color-text-muted` | `#646464` |
| Page background | `--color-background` | `#FFF8F0` |
| Soft section | `--color-background-soft` | `#FFF3E0` |
| Accent surface | `--color-background-accent` | `#FFE0B2` |
| Emphasis surface | `--color-background-emphasis` | `#FFCC9C` |

White text on the primary action has a calculated contrast ratio of 5.13:1.
Accent text uses its own darker role so it also works on orange-tinted surfaces.
Use primary or secondary text on the emphasis surface; muted text is intended
for page, soft, and accent surfaces.

## Actions and interaction

- Primary action: `btn btn-primary`.
- Compact primary action: `btn btn-primary btn-sm` (navigation).
- Large primary action: `btn btn-primary btn-lg`.
- Secondary action: `btn btn-secondary`; orange text and outline, with a soft
  orange hover surface.
- Low-emphasis action: `btn btn-ghost`.
- Text action: `text-link`; always underlined, with a 44px minimum target height.
- Icon action: `icon-button`; 44px square, with an accessible name.
- Footer links: `footer-link`.

Sizes change padding and type size, never the color scheme. Every primary
action shares the same default, hover, pressed, and keyboard-focus states.
Page modules may adjust placement and margins, but must not override a shared
button's foreground, background, border, hover, or focus colors.

Use native disabled buttons for unavailable actions. The `aria-disabled` styling
does not itself prevent a link from navigating; callers must handle that behavior
if a disabled link is ever introduced.

Focus outlines use `--color-focus-ring`, `--focus-width`, and `--focus-offset`.
Reduced-motion preferences disable smooth scrolling and shorten transitions.
Third-party YouTube and lightbox UI retain their own internal styling.

## Typography and spacing

- One `h1` per page; use `h2` for sections and `h3` for their subsections.
- `display-1`, `display-2`, and `heading-1` through `heading-4` share fluid sizes
  in the global stylesheet. Do not redefine their sizes per page.
- Body sizes: `body-xl`, `body-lg`, `body-base`, `body-sm`, and `body-xs`.
  `body-md` is not part of the system.
- All spacing uses the existing `--spacing-*` scale.
- Actions use `--radius-md` (8px), media uses `--radius-lg` (12px), quote cards
  use `--radius-2xl` (24px), and pills use `--radius-full`.
- Use `media-rounded`, `quote-card`, `badge`, and `mission-card` where applicable.

Shared styles are in Tailwind's `components` cascade layer. Tailwind utilities
can therefore intentionally adjust layout and font weight. Keep component CSS
module overrides limited to their intended scope.

## Navigation and layout

- The main navigation switches to the compact menu below 1024px to avoid
  squeezing long labels into tablet widths.
- The menu exposes its expanded state, closes on Escape, restores focus to the
  toggle on Escape, and scrolls within short viewports.
- A keyboard-visible skip link targets the main content.
- `--nav-height` and `--anchor-offset` define sticky navigation and anchor spacing.
- Desktop and mobile use the same donation URL from `src/data/links.ts`.
- Gallery topics and image buttons use the shared focus treatment; the existing
  photo lightbox and video embeds are preserved.

## Review before shipping

1. Compare the navigation and Get Involved donation buttons in default, hover,
   pressed, and keyboard-focus states. Their color values must match.
2. Check homepage, Gallery, and 404 at 320, 390, 768, 1024, and 1440px.
3. Check menu open/close, Escape, skip link, Gallery lightbox, anchor navigation,
   and reduced-motion behavior.
4. Run lint, TypeScript, browser accessibility checks, and Lighthouse
   accessibility checks. Automated results do not replace manual review or
   establish accessibility of YouTube's cross-origin player UI.

The November 2026 audit found inconsistent donation-button overrides, 13
homepage text-contrast failures, undefined typography names, an unnamed
LinkedIn link, and fragmented focus/interaction styling. These are the
regressions the shared rules above are intended to prevent.

Verified locally after the cleanup:

- Homepage and Gallery: Lighthouse accessibility 100/100.
- Homepage, Gallery, and 404: no axe WCAG A/AA or best-practice violations at
  390px and 1440px, including the open mobile menu. The audit excluded YouTube
  iframe contents and the Next.js development toolbar.
- No horizontal overflow at 320, 390, 768, 1024, and 1440px after layout settles.
- Matching primary-button colors and outlines across navigation and Get Involved
  in default, hover, pressed, and keyboard-focus states.
- Skip link, menu Escape/focus restoration, short-viewport menu scrolling,
  Gallery lightbox, anchor clearance, and reduced-motion scrolling checked.
- ESLint, TypeScript, and Git whitespace checks passed.
