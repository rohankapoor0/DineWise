---
name: Culinary Intelligence
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#5d3f3e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#916e6d'
  outline-variant: '#e6bdbb'
  surface-tint: '#bf0029'
  primary: '#b90027'
  on-primary: '#ffffff'
  primary-container: '#e31837'
  on-primary-container: '#fffaf9'
  inverse-primary: '#ffb3b1'
  secondary: '#835500'
  on-secondary: '#ffffff'
  secondary-container: '#feae2c'
  on-secondary-container: '#6b4500'
  tertiary: '#386631'
  on-tertiary: '#ffffff'
  tertiary-container: '#507f47'
  on-tertiary-container: '#f3ffea'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001d'
  secondary-fixed: '#ffddb4'
  secondary-fixed-dim: '#ffb955'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#633f00'
  tertiary-fixed: '#bcf0ae'
  tertiary-fixed-dim: '#a1d494'
  on-tertiary-fixed: '#002201'
  on-tertiary-fixed-variant: '#23501e'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

This design system is built upon a "Culinary Intelligence" aesthetic—a sophisticated blend of high-end editorial food photography and cutting-edge technological utility. The brand personality is that of a trusted insider: someone who knows the best local fermentation processes but also understands the efficiency of a well-tuned algorithm.

The visual style leans into **Modernism with Tactile Accents**. It utilizes expansive white space and high-quality imagery to evoke an appetizing response, while maintaining a rigorous grid and refined typography to signal the technical reliability of the AI-driven insights (LangChain/Ollama). The UI should feel airy and fresh, avoiding the cluttered "discount" feel often found in food apps, instead positioning itself as a premium utility for the pizza aficionado.

## Colors

The palette is rooted in the natural ingredients of a classic Neapolitan pizza, elevated for a modern digital interface.

*   **Tomato Red (Primary):** A vibrant, high-energy red used for primary actions, critical highlights, and brand presence. It stimulates appetite and commands attention.
*   **Crust Gold (Secondary):** A warm, toasted amber used for rating systems, rewards, and secondary highlights. It adds warmth and depth to the interface.
*   **Basil Green (Tertiary):** A deep, organic green used sparingly for "insider" tips, fresh indicators, and success states. 
*   **Neutrals:** The background system relies on a "Clean White" (#FFFFFF) for cards and "Soft Gray" (#F9FAFB) for page backgrounds to create a subtle layered effect without high-contrast jarring. Text uses a near-black charcoal to ensure professional readability.

## Typography

This design system employs a dual-font strategy to balance friendliness with professional precision.

**Plus Jakarta Sans** is used for all headings and display titles. Its soft, slightly rounded terminals feel approachable and modern, mirroring the "friendly insider" persona. 

**Inter** is the workhorse for all functional UI elements, body text, and labels. It provides the necessary technical weight and clarity required for data-heavy review metrics and AI-generated summaries. 

Maintain high contrast between headlines and body text to ensure a clear information hierarchy. Use the `-0.02em` letter spacing on large displays to keep the typography feeling tight and "designed."

## Layout & Spacing

The layout follows a **8px soft-grid system**, ensuring mathematical harmony across all components.

*   **Grid Model:** A 12-column fluid grid is used for desktop environments, transitioning to a single-column stack for mobile.
*   **Mobile:** 16px side margins with 16px vertical gutters between cards.
*   **Desktop:** 40px side margins with a maximum container width of 1280px to prevent line lengths from becoming unreadable.
*   **Content Spacing:** Use generous padding within cards (24px) to emphasize the "clean and airy" brand style. AI-generated insight blocks should have a distinct internal padding and margin to separate human reviews from machine analysis.

## Elevation & Depth

Hierarchy is established through **Tonal Layering and Ambient Shadows**.

This design system avoids heavy, dark shadows in favor of "Atmospheric Depth." Surfaces are layered using a primary background of Soft Gray (#F9FAFB) and foreground cards in pure White (#FFFFFF).

*   **Low Elevation:** Used for standard cards. A very soft, diffused shadow (0px 4px 20px, 4% opacity black) creates a subtle lift.
*   **High Elevation:** Used for active states, modals, or floating action buttons. A more pronounced shadow (0px 8px 30px, 8% opacity black) with a slight Tomato Red tint in the shadow color (2% opacity) for primary buttons.
*   **Interactive Depth:** On hover, cards should subtly lift (reduce shadow blur, increase Y-offset) to provide tactile feedback to the user.

## Shapes

The shape language is defined by **Soft Geometric Geometry**. 

In alignment with the "Rounded" setting, the design system utilizes a 0.5rem (8px) base radius for standard elements like input fields and small cards. Larger containers and primary featured cards use `rounded-lg` (1rem / 16px) to evoke a friendlier, more accessible feel. 

Pill-shaped containers are reserved exclusively for "Tags" (e.g., pizza styles like "Neapolitan" or "Deep Dish") and "AI Status" indicators to differentiate them from actionable buttons.

## Components

*   **Buttons:** Primary buttons are solid Tomato Red with white text, utilizing a `rounded-lg` corner. Secondary buttons use a transparent background with a thin Gray-200 border and Tomato Red text.
*   **AI Insight Cards:** These feature a subtle Basil Green left-border accent (4px) to signify the information was synthesized by the AI engine. Use a light green tint (#F0F7F0) for the card background to distinguish it from user reviews.
*   **Review Inputs:** Text fields use a "Soft Gray" background with a 1px border that shifts to Tomato Red on focus. Use "Plus Jakarta Sans" for placeholders to maintain the friendly vibe.
*   **Rating Chips:** Small, gold-tinted pills that display the "Crust Score." They feature a Crust Gold icon and bolded text for immediate legibility.
*   **Imagery:** All restaurant and pizza images should utilize the `rounded-xl` (1.5rem) setting to create a modern, framed look that feels integrated into the UI.
*   **Navigation:** A clean, bottom-docked navigation bar for mobile with haptic-ready icons, and a top-aligned, minimalist bar for desktop.