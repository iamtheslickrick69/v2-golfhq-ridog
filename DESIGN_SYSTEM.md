# GolfHQ Design System

## Core Design Principles
1. **Minimalist Luxury** - Every pixel has purpose
2. **Subtle Motion** - Everything breathes, nothing distracts
3. **Information Hierarchy** - Most important info always visible
4. **Touch-Friendly** - 44px minimum touch targets
5. **Accessibility First** - WCAG AA compliant

## Color Palette
```css
/* Primary Colors */
--golf-green: #22C55E;
--golf-green-dark: #16A34A;
--golf-green-light: #86EFAC;
--golf-green-pale: #DCFCE7;

/* Backgrounds */
--bg-primary: #FFFFFF;
--bg-secondary: #F8F7F4;
--bg-tertiary: #F3F2EF;
--gradient-soft: linear-gradient(135deg, #FFFFFF 0%, #F8F7F4 100%);

/* Text */
--text-primary: #1A1A1A;
--text-secondary: #6B7280;
--text-tertiary: #9CA3AF;

/* Status Colors */
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;

/* Card Styles */
--card-bg: rgba(255, 255, 255, 0.7);
--card-border: rgba(229, 231, 235, 0.5);
--card-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
--card-hover-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
```

## Typography
```css
/* Font Stack */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-display: 'SF Pro Display', 'Inter', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
```

## Component Patterns

### Cards
```jsx
// Base Card Component
<div className="bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
  {children}
</div>
```

### Buttons
```jsx
// Primary Button
<button className="bg-golf-green text-white px-6 py-3 rounded-xl font-medium hover:bg-golf-green-dark transition-colors duration-200">

// Secondary Button
<button className="bg-white border-2 border-golf-green text-golf-green px-6 py-3 rounded-xl font-medium hover:bg-golf-green-pale transition-colors duration-200">

// Ghost Button
<button className="text-golf-green px-6 py-3 rounded-xl font-medium hover:bg-golf-green-pale transition-colors duration-200">
```

## Animations

### Framer Motion Presets
```javascript
// Page Transitions
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: "easeInOut" }
}

// Card Hover
export const cardHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}

// Trophy Ball Earned
export const trophyEarned = {
  initial: { scale: 0, rotate: -180 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  }
}

// Floating Background Elements
export const floatingBall = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}
```

## Layout Grid
```css
/* 8px Grid System */
--space-1: 0.5rem;   /* 8px */
--space-2: 1rem;     /* 16px */
--space-3: 1.5rem;   /* 24px */
--space-4: 2rem;     /* 32px */
--space-5: 2.5rem;   /* 40px */
--space-6: 3rem;     /* 48px */
--space-8: 4rem;     /* 64px */
--space-10: 5rem;    /* 80px */
--space-12: 6rem;    /* 96px */

/* Container Widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

## Interactive States
```css
/* Focus States */
:focus-visible {
  outline: 2px solid var(--golf-green);
  outline-offset: 2px;
}

/* Loading States */
.skeleton {
  background: linear-gradient(
    90deg,
    #f3f2ef 25%,
    #e5e5e5 50%,
    #f3f2ef 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## Responsive Breakpoints
```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```
