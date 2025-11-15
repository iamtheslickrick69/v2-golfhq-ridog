# Claude Code Build Instructions - v2:GolfHQ-Ridog

## 🚀 META BUILD DOCUMENT
This document tells Claude Code exactly how to build the entire GolfHQ.ai application step by step, including when to generate additional documentation.

## Phase 1: Project Setup & Foundation

### Step 1: Initialize Project
```bash
# Create Next.js 14 app with TypeScript and Tailwind
npx create-next-app@latest golfhq-ridog --typescript --tailwind --app

# Install core dependencies
npm install framer-motion zustand react-query @radix-ui/react-*
npm install lucide-react date-fns recharts react-hook-form
npm install @vercel/analytics
```

### Step 2: Create Folder Structure
```
/app
  /(auth)
    /login
    /signup
  /(dashboard)
    /layout.tsx     # Main app layout with nav
    /page.tsx       # Dashboard home
  /my-caddy
    /page.tsx       # Riley AI hub
    /lessons
    /courses
    /bootcamps
  /journal
    /page.tsx       # Journal list
    /new
    /[id]
  /courses
    /page.tsx       # Course list
    /[id]/page.tsx  # Individual course
    /[id]/reviews
  /community
    /page.tsx       # Stymie League
    /competitions
    /forums
    /events
  /tour-card
    /page.tsx       # Gamification
    /achievements
    /challenges
  /pro-shop
    /page.tsx       # Marketplace
    /my-bag
    /instructors
    /caddies
/components
  /ui              # Base components
  /dashboard       # Dashboard specific
  /riley           # Riley AI components
  /journal         # Journal components
  /courses         # Course components
  /community       # Community components
  /tour-card       # Gamification components
  /pro-shop        # Marketplace components
/lib
  /mock-data       # All mock data
  /animations      # Framer motion presets
  /utils           # Helper functions
  /hooks           # Custom hooks
  /stores          # Zustand stores
/public
  /avatars
  /courses
  /equipment
  /achievements
/styles
  /globals.css     # Tailwind + custom CSS
  /themes.css      # Design tokens
```

### Step 3: After Foundation Complete
**GENERATE**: `COMPONENT_LIBRARY.md` - Document all base UI components

---

## Phase 2: Core Features Build Order

### Build Order & Dependencies
1. **Design System & UI Components** → Generate `UI_COMPONENTS.md`
2. **Dashboard** → Generate `DASHBOARD_PATTERNS.md`
3. **Riley AI Chat** → Generate `RILEY_CONVERSATIONS.md` (100+ examples)
4. **Golf Journal** → Generate `JOURNAL_FEATURES.md`
5. **Course Reviews** → Generate `COURSES_DATABASE.md`
6. **Tour Card** → Generate `GAMIFICATION_RULES.md`
7. **Stymie League** → Generate `COMMUNITY_FEATURES.md`
8. **Pro Shop** → Generate `MARKETPLACE_SPECS.md`

---

## Phase 3: Component Development Instructions

### For Each Major Feature, Build:

#### Dashboard Components
```typescript
// Priority 1: Build these first
- DashboardLayout.tsx      // Main container
- WelcomeHero.tsx          // Personalized greeting
- TourCardWidget.tsx       // XP and level display
- RileyTipCard.tsx         // Daily AI tip
- QuickActions.tsx         // 4-button grid
- RecentRounds.tsx         // Round history cards
- WeatherWidget.tsx        // Local course conditions
- TrophyProgress.tsx       // Achievement tracker

// After building: Generate DASHBOARD_ANALYTICS.md
```

#### Riley AI Components
```typescript
// Core chat interface
- RileyChatContainer.tsx   // Main chat wrapper
- RileyMessage.tsx         // Message bubble component
- RileyTypingIndicator.tsx // "Riley is thinking..."
- RileyQuickReplies.tsx    // Suggested responses
- RileyContentTabs.tsx     // Lessons/Courses/etc tabs

// Content components
- LessonCard.tsx           // Individual lesson display
- CourseCard.tsx           // Course overview card
- DrillTimer.tsx           // Practice drill timer
- QuizComponent.tsx        // Interactive quiz

// After building: Generate RILEY_PERSONALITY.md with 200+ responses
```

#### Journal Components
```typescript
- JournalEntry.tsx         // Single round display
- ScorecardUpload.tsx      // Drag & drop upload
- ScorecardParser.tsx      // Mock OCR display
- CourseSelector.tsx       // Dropdown with search
- RoundStats.tsx           // Stats visualization
- TrophyBallAnimation.tsx  // Achievement animation
- JournalCalendar.tsx      // Calendar view

// After building: Generate SCORECARD_PATTERNS.md
```

---

## Phase 4: Data Layer Instructions

### Create Mock Data Services
```typescript
// /lib/mock-data/index.ts
export * from './user-data'
export * from './courses-data'
export * from './rounds-data'
export * from './riley-responses'
export * from './competitions-data'
export * from './equipment-data'
export * from './instructors-data'

// Each file should export:
- Typed interfaces
- Mock data arrays
- Getter functions with realistic delays
- Mutation functions that update local state

// After creating: Generate API_SCHEMA.md for future backend
```

### State Management with Zustand
```typescript
// /lib/stores/userStore.ts
interface UserStore {
  user: User
  tourCard: TourCard
  updateXP: (amount: number) => void
  addTrophyBall: (ballId: string) => void
  // etc...
}

// After all stores: Generate STATE_ARCHITECTURE.md
```

---

## Phase 5: Animations & Polish

### Add Framer Motion to Everything
```typescript
// Every component should have subtle animation
- Page transitions: fadeIn with slight Y movement
- Card hovers: scale(1.02) with shadow increase
- Button clicks: scale(0.95) then back
- Trophy earned: spin + confetti
- XP gained: number count up + glow
- Loading states: skeleton shimmer

// After animations: Generate ANIMATION_GUIDE.md
```

### Background Elements
```typescript
// Create floating golf ball component
<FloatingGolfBall />
- Subtle parallax on scroll
- Gentle floating animation
- Very low opacity (0.05)
- Behind all content

// Generate VISUAL_EFFECTS.md after completion
```

---

## Phase 6: Testing & Documentation

### After MVP Complete, Generate:
1. **TESTING_CHECKLIST.md** - All user flows to test
2. **DEPLOYMENT_GUIDE.md** - Vercel deployment steps
3. **INVESTOR_DEMO_SCRIPT.md** - 5-minute pitch walkthrough
4. **FUTURE_FEATURES.md** - Phase 2 roadmap
5. **MONETIZATION_STRATEGY.md** - Pricing and revenue model
6. **PARTNERSHIP_INTEGRATION.md** - Back9 connection plan

---

## Phase 7: Performance & Optimization

### Final Optimizations
```typescript
// Implement these after features work:
- Image optimization with next/image
- Lazy loading for below-fold content
- Code splitting for routes
- Memoization for expensive computations
- Virtual scrolling for long lists
- PWA manifest for mobile install

// Generate PERFORMANCE_METRICS.md when complete
```

---

## Critical Success Factors

### Every Component MUST Have:
✅ Framer Motion animation
✅ Loading state
✅ Error state
✅ Empty state
✅ Mobile responsive design
✅ Accessibility (ARIA labels)
✅ TypeScript types
✅ Mock data integration

### Design Requirements:
✅ Light theme with green accents
✅ Glassmorphism cards
✅ Smooth transitions
✅ 4K crisp text
✅ Perfect spacing (8px grid)
✅ Premium feel

### Riley's Voice:
✅ Friendly and encouraging
✅ Never condescending
✅ Uses "dude", "man", "let's get it"
✅ Celebrates wins enthusiastically
✅ Supportive during struggles

---

## Build Verification Checklist

Before considering any feature complete:
- [ ] All mock data loads correctly
- [ ] Animations are smooth (60fps)
- [ ] Mobile responsive (test at 375px, 768px, 1024px+)
- [ ] Riley feels like a real person
- [ ] Tour Card progression works
- [ ] Utah courses display correctly
- [ ] Jason Adams data throughout
- [ ] No placeholder text remains
- [ ] Loading states for all async operations
- [ ] Error boundaries implemented

---

## Final Instruction

**Build this like you're shipping to 10,000 users tomorrow.**

Every pixel matters. Every animation should delight. Every Riley response should feel genuine.

This isn't a demo - it's a preview of the future of golf.

Make it legendary. 🏌️⚡
