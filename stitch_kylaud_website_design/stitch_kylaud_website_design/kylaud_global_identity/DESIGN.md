---
name: Kylaud Global Identity
colors:
  surface: '#f8faf7'
  surface-dim: '#d8dbd8'
  surface-bright: '#f8faf7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f1'
  surface-container: '#eceeeb'
  surface-container-high: '#e7e9e6'
  surface-container-highest: '#e1e3e0'
  on-surface: '#191c1b'
  on-surface-variant: '#44474c'
  inverse-surface: '#2e312f'
  inverse-on-surface: '#eff1ee'
  outline: '#74777d'
  outline-variant: '#c4c6cc'
  surface-tint: '#525f71'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0f1c2c'
  on-primary-container: '#778598'
  inverse-primary: '#bac8dc'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#111c2d'
  on-tertiary-container: '#7a849a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e4f9'
  primary-fixed-dim: '#bac8dc'
  on-primary-fixed: '#0f1c2c'
  on-primary-fixed-variant: '#3a4859'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#d9e3fb'
  tertiary-fixed-dim: '#bdc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3d475a'
  background: '#f8faf7'
  on-background: '#191c1b'
  surface-variant: '#e1e3e0'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-padding: 120px
---

## Brand & Style

The brand personality is authoritative, visionary, and established. This design system communicates institutional strength and global scale through a **Corporate Modern** aesthetic infused with **High-Contrast** elements. It is designed to resonate with institutional investors, government entities, and high-level corporate partners.

The visual narrative relies on "Architectural Precision"—using sharp geometric lines and structured layouts to imply stability. We employ a mix of heavy whitespace and high-fidelity photography (portraying skylines, renewable energy infrastructure, and advanced technology) to create an aspirational atmosphere. Subtle gold accents are used sparingly to signal premium quality without appearing ostentatious.

## Colors

The palette is anchored by **Deep Navy Blue**, providing a foundation of trust and intellectual depth. **Sophisticated Gold** is utilized as a high-value signal for key calls-to-action, borders, and iconography. 

The background is a curated **Off-white**, chosen to reduce eye strain while maintaining a crisp, paper-like quality that feels more premium than pure white. **Professional Gray** is reserved for secondary text and structural borders to maintain a clear hierarchy. For digital surfaces requiring extra dimension, a subtle gold gradient may be applied to small-scale elements like buttons or active indicators.

## Typography

This design system exclusively uses **Montserrat** to ensure brand cohesion across all touchpoints. 

- **Headlines:** Set in Bold (700) or Semi-Bold (600) to project authority. Large display sizes use tight letter spacing for a modern, "impactful" look.
- **Body Text:** Set in Regular (400) with generous line heights to ensure readability in data-heavy reports or long-form business profiles.
- **Labels:** Small caps and increased letter spacing (tracking) should be used for sub-headers and metadata to create a sophisticated, architectural feel.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain the "contained" and "structured" feel of a financial prospectus. A 12-column grid is standard, with generous margins to frame the content.

- **Desktop:** 12 columns, 24px gutters, 64px minimum side margins.
- **Tablet:** 8 columns, 20px gutters, 32px side margins.
- **Mobile:** 4 columns, 16px gutters, 16px side margins.

Spacing is governed by an 8px linear scale. Section vertical padding is intentionally large (120px+) to create a sense of "prestige" through negative space, allowing the high-fidelity imagery and bold typography to breathe.

## Elevation & Depth

To maintain a "sharp" corporate look, we avoid soft, organic shadows. Instead, depth is achieved through:

1.  **Tonal Layering:** Using the Off-white background (#F4F6F3) for the primary surface and pure White (#FFFFFF) for elevated cards or containers.
2.  **Low-Contrast Outlines:** Elements are defined by thin 1px borders in Professional Gray (#667085) at 20% opacity.
3.  **Gold Accents:** A 2px bottom border in Sophisticated Gold is used to indicate "active" or "hover" states on primary navigation and cards, creating a tactile sense of interaction without using shadows.
4.  **Hard Depth:** When shadows are necessary for utility (e.g., dropdowns), use a sharp, low-blur shadow: `0px 4px 0px rgba(13, 27, 42, 0.05)`.

## Shapes

The shape language is primarily **Geometric and Sharp**. We use the **Soft (1)** setting (4px radius) for standard UI components like buttons and input fields to prevent the interface from feeling "hostile," while maintaining a professional rigor. 

Images and large layout containers should remain perfectly square (0px radius) to evoke the feeling of corporate architecture and structured reports.

## Components

### Buttons
- **Primary:** Solid Deep Navy background, White text, Bold Montserrat. 4px corner radius.
- **Secondary:** Transparent background, 2px Gold border, Gold text.
- **Ghost:** Professional Gray text, no border, Gold underline on hover.

### Cards
- White background, 1px Professional Gray border (20% opacity). No shadows.
- Include a 4px "accent strip" in Gold at the very top of the card for premium service offerings.

### Input Fields
- Off-white background, 1px Gray border. On focus: border changes to Deep Navy with a 1px Gold bottom-glow.

### Lists & Tables
- Data-heavy tables should use "Zebra Striping" with the Off-white and White colors. 
- Header rows must be Deep Navy with White text in Label-MD style (Uppercase).

### Chips/Tags
- Used for industry sectors (e.g., "Technology", "Sustainability"). 
- Small caps, Deep Navy text on a 10% opacity Gray background, sharp corners.