import { Variants } from "framer-motion";

// Page transition animations
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const pageTransitionConfig = {
  duration: 0.3,
  ease: "easeInOut",
};

// Card animations
export const cardHover: Variants = {
  rest: { scale: 1, boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)" },
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

// Trophy ball animation
export const trophyEarned: Variants = {
  initial: { scale: 0, rotate: -180, opacity: 0 },
  animate: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

// Floating background element
export const floatingBall: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// Slide in from side
export const slideInFromLeft: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const slideInFromRight: Variants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Fade in
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

// Scale in
export const scaleIn: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Button press
export const buttonPress = {
  whileTap: { scale: 0.95 },
  transition: { duration: 0.1 },
};

// XP gain animation
export const xpGain: Variants = {
  initial: { scale: 1, opacity: 0 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0, 1, 1, 0],
    y: [0, -30],
    transition: {
      duration: 1.5,
      times: [0, 0.3, 0.7, 1],
    },
  },
};

// Progress bar fill
export const progressFill: Variants = {
  initial: { width: "0%" },
  animate: (width: number) => ({
    width: `${width}%`,
    transition: { duration: 1, ease: "easeInOut" },
  }),
};

// Leaderboard rank change
export const rankChange: Variants = {
  initial: { x: -50, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

// Modal/Dialog animations
export const modalBackdrop: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const modalContent: Variants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", duration: 0.3 },
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

// Typing indicator
export const typingDot: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Confetti-style celebration
export const celebration = {
  initial: { scale: 0, rotate: 0 },
  animate: {
    scale: [0, 1.2, 1],
    rotate: [0, 360],
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
