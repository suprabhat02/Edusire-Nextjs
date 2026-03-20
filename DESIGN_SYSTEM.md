# EDUSIRES Professional Design System

## Overview

Your website now implements a comprehensive, professional design system based on your brand colors (Blue #1F64AD and Green #3AAF61) with full dark/light mode support and an accent color picker.

---

## 🎨 Color Palette

### Primary Brand Colors

**Blue (Logo Primary)**

- Used for CTAs, primary actions, and education-related sections
- Hex: #1F64AD
- Shades: 50-900 for full tonal range

**Green (Logo Secondary)**

- Used for wellness/success states and ayurvedic sections
- Hex: #3AAF61
- Shades: 50-900 for full tonal range

### Color Token System

All colors are defined as CSS custom properties in `app/globals.css`:

```css
/* Light Mode */
--color-blue-50 to --color-blue-900   (Full tonal range)
--color-green-50 to --color-green-900 (Full tonal range)

/* Dark Mode */
(Automatically inverted for accessibility)

/* Accent System */
--color-accent: Blue by default, switches to Green when selected
--color-accent-light: Light variant for backgrounds
--color-accent-foreground: High contrast text color on accent
```

### Semantic Colors

- `--color-success`: Green-600 (for success states)
- `--color-error`: Red (#d32f2f for error states)
- `--color-warning`: Orange (#f57c00 for warnings)
- `--color-info`: Blue-600 (for information)

### Background & Text Colors

**Light Mode:**

- `--color-bg-primary`: #fbf9f7 (warm off-white)
- `--color-bg-secondary`: #ffffff (pure white)
- `--color-bg-tertiary`: #f3f0ed (soft beige)
- `--color-text-primary`: #2b2420 (near-black)
- `--color-text-secondary`: #5c4f46 (medium gray)
- `--color-text-muted`: #8b7d72 (light gray)

**Dark Mode:**

- `--color-bg-primary`: #1a1814 (warm dark)
- `--color-bg-secondary`: #242220 (slightly lighter dark)
- `--color-bg-tertiary`: #2e2c2a (medium dark)
- `--color-text-primary`: #f5f1ed (near-white)
- `--color-text-secondary`: #d8c4b2 (medium light)
- `--color-text-muted`: #8b7d72 (muted mid-tone)

---

## 🎯 Using Design Tokens

### In Tailwind Classes

The CSS variables are automatically mapped to Tailwind utilities:

```tsx
// Colors
className = "bg-primary text-foreground"; // Primary brand color
className = "bg-secondary text-secondary-foreground";
className = "bg-accent text-accent-foreground"; // Dynamically switches blue/green
className = "text-muted-foreground";

// Borders
className = "border-border"; // Uses --color-border-strong/soft
className = "border-2 border-border/70"; // With opacity

// Backgrounds
className = "bg-background"; // Main background
className = "bg-card"; // Card backgrounds
```

### Direct CSS Variable Access

```css
/* In your CSS */
background-color: rgb(var(--color-blue-600));
border: 2px solid var(--color-border-soft);
color: var(--color-text-primary);
```

### Spacing Scale

```css
--space-1: 0.25rem (4px) --space-2: 0.5rem (8px) --space-3: 0.75rem (12px)
  --space-4: 1rem (16px) --space-5: 1.5rem (24px) --space-6: 2rem (32px)
  --space-7: 3rem (48px) --space-8: 4rem (64px) --space-9: 6rem (96px)
  --space-10: 8rem (128px);
```

### Border Radius Scale

```css
--radius-sm: 0.375rem (6px) --radius-md: 0.5rem (8px) --radius-lg: 0.75rem
  (12px) --radius-xl: 1rem (16px) --radius-2xl: 1.5rem (24px);
```

### Shadows

```css
--shadow-xs: 0 1px 2px rgba(43, 36, 32, 0.05) --shadow-sm: 0 2px 4px
  rgba(43, 36, 32, 0.08) --shadow-md: 0 4px 12px rgba(43, 36, 32, 0.12)
  --shadow-lg: 0 12px 24px rgba(43, 36, 32, 0.15) --shadow-xl: 0 20px 40px
  rgba(43, 36, 32, 0.2);
```

---

## 🌓 Dark/Light Mode

### Automatic Detection

The system respects the user's system preferences:

- Defaults to system theme (light or dark)
- Can be toggled via the Sun/Moon icon in Navigation
- Automatically inverts color tokens for optimal contrast

### Implementation

Handled by `next-themes` and Tailwind's `.dark` class selector. No manual dark mode code needed in components.

---

## 🎨 Accent Color Picker

### Location

Footer component now includes an "Accent" color switcher with Blue/Green options.

### Functionality

- **Default**: Blue accent (logo primary)
- **Options**: Blue or Green
- **Persistence**: Stored in localStorage under `edusires-accent`
- **Scope**: Affects `--color-accent`, `--primary`, and `--ring` CSS variables
- **Auto-Restoration**: Accent preference loads automatically on page reload

### Component

Located in: `components/accent-switcher.tsx`

```tsx
import { AccentSwitcher } from "@/components/accent-switcher";

// Used in Footer
<AccentSwitcher />;
```

---

## 📐 Design Principles

### 1. **Consistency**

- All UI elements use tokens, no hardcoded colors
- Maintains visual harmony across all pages
- Accent color changes cascade throughout the site

### 2. **Accessibility**

- Color contrasts meet WCAG AA standards
- Dark mode properly inverts for readability
- No color used alone for information (accompanied by icons/text)

### 3. **Professional Elegance**

- Warm color palette inspired by your portfolio
- Removed all "flawed" gradients in favor of solid, intentional colors
- Sharp 2-pixel borders instead of soft shadows (premium feel)

### 4. **Responsive**

- Sticky navigation that doesn't overlap content
- Mobile-first layouts with breakpoint-aware spacing
- Touch-friendly button and interactive element sizing

---

## 🔧 Customization Guide

### Changing the Default Accent Color

Edit `app/layout.tsx` script initialization:

```javascript
const accent = localStorage.getItem("edusires-accent") || "blue"; // Change to 'green'
```

### Adding New Colors

Add to `:root` and `.dark` in `app/globals.css`:

```css
--color-new-50: #f0f0f0;
--color-new-600: #606060;
--color-new-900: #0a0a0a;
```

Then reference in Tailwind config or CSS.

### Adjusting Spacing

Modify the `--space-*` variables in `app/globals.css` to change the spacing scale globally.

---

## 📋 Implementation Checklist

✅ CSS custom properties system implemented
✅ Light & dark mode with system detection
✅ Blue & Green accent color toggle
✅ Professional color palette applied
✅ All gradients removed (replaced with solid colors)
✅ Sticky navigation (non-fixed positioning)
✅ Premium border styling (no soft shadows)
✅ Responsive spacing and typography
✅ AccentSwitcher in Footer
✅ TypeScript validation passes
✅ Design tokens documented

---

## 🚀 Next Steps

### Optional Enhancements

1. **Generate Tints & Shades**: Use a tool like Tailwind Gradient Generator to create intermediate shades
2. **Add Animations**: Define transition timing in CSS variables
3. **Create Utility Classes**: Add custom Tailwind utilities for common patterns
4. **Add Component Library**: Build branded component variants (Buttons, Cards, etc.)
5. **Implement Analytics**: Track accent color preferences by user

### Performance Tips

- CSS variables are cached by the browser
- Theme system avoids runtime color calculation
- Component-level optimization using React.memo for ThemeProvider children

---

## 📚 Files Modified

- `app/globals.css` - Comprehensive CSS token system
- `app/layout.tsx` - Added accent initialization script
- `app/components/Navigation.tsx` - Changed from fixed to sticky positioning
- `app/components/Footer.tsx` - Added AccentSwitcher component
- `components/accent-switcher.tsx` - New accent color picker component
- `app/page.tsx` - Removed hero gradients
- `app/contact/page.tsx` - Replaced gradient with solid blue
- `app/gallery/page.tsx` - Replaced gradient with solid blue
- `app/ayurvedic/page.tsx` - Replaced gradient with solid green
- `app/about/page.tsx` - Replaced gradient with solid blue

---

## 🎭 Color Reference

### Quick Reference Card

| Purpose        | Light Mode      | Dark Mode             | CSS Variable            |
| -------------- | --------------- | --------------------- | ----------------------- |
| Primary Action | #1F64AD (Blue)  | #a2c6f0 (Light Blue)  | `--color-accent`        |
| Secondary      | #3AAF61 (Green) | #7cd2a5 (Light Green) | `--color-green-600`     |
| Success        | #3AAF61         | #7cd2a5               | `--color-success`       |
| Error          | #d32f2f         | #ef5350               | `--color-error`         |
| Warning        | #f57c00         | #ffb74d               | `--color-warning`       |
| Background     | #fbf9f7         | #1a1814               | `--color-bg-primary`    |
| Text           | #2b2420         | #f5f1ed               | `--color-text-primary`  |
| Border         | #d8c4b2         | #3a3430               | `--color-border-strong` |

---

**Design System Version**: 1.0  
**Last Updated**: March 2026  
**Compatibility**: Next.js 15.2+, React 19+, Tailwind CSS 3.4+
