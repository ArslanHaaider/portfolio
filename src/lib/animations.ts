import { Variants } from 'framer-motion';

// Animation durations
export const DURATIONS = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  verySlow: 1.2,
} as const;

// Easing functions
export const EASINGS = {
  easeOut: [0.0, 0.0, 0.2, 1],
  easeIn: [0.4, 0.0, 1, 1],
  easeInOut: [0.4, 0.0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  spring: { type: "spring", damping: 20, stiffness: 300 },
  softSpring: { type: "spring", damping: 25, stiffness: 200 },
} as const;

// Fade animations
export const fadeVariants: Variants = {
  hidden: { 
    opacity: 0,
    transition: { duration: DURATIONS.fast }
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: DURATIONS.normal,
      ease: EASINGS.easeOut
    }
  },
  exit: { 
    opacity: 0,
    transition: { duration: DURATIONS.fast }
  }
};

// Slide animations
export const slideVariants: Variants = {
  hiddenLeft: { 
    x: -100, 
    opacity: 0,
    transition: { duration: DURATIONS.fast }
  },
  hiddenRight: { 
    x: 100, 
    opacity: 0,
    transition: { duration: DURATIONS.fast }
  },
  hiddenUp: { 
    y: -50, 
    opacity: 0,
    transition: { duration: DURATIONS.fast }
  },
  hiddenDown: { 
    y: 50, 
    opacity: 0,
    transition: { duration: DURATIONS.fast }
  },
  visible: { 
    x: 0, 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: DURATIONS.normal,
      ease: EASINGS.easeOut
    }
  },
  exit: { 
    y: -50, 
    opacity: 0,
    transition: { duration: DURATIONS.fast }
  }
};

// Scale animations
export const scaleVariants: Variants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0,
    transition: { duration: DURATIONS.fast }
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: DURATIONS.normal,
      ease: EASINGS.bounce
    }
  },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: DURATIONS.fast,
      ease: EASINGS.easeOut
    }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

// Stagger container animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: DURATIONS.fast
    }
  }
};

// Stagger items
export const staggerItem: Variants = {
  hidden: { 
    y: 30, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: DURATIONS.normal,
      ease: EASINGS.easeOut
    }
  }
};

// Navigation animations
export const navVariants: Variants = {
  hidden: { 
    y: -100, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: DURATIONS.normal,
      type: "spring",
      damping: 20,
      stiffness: 300
    }
  }
};

// Hero section animations
export const heroVariants: Variants = {
  hidden: { 
    scale: 0.9, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: DURATIONS.slow,
      ease: EASINGS.easeOut,
      staggerChildren: 0.2
    }
  }
};

// Card animations
export const cardVariants: Variants = {
  hidden: { 
    y: 50, 
    opacity: 0,
    rotateX: -15
  },
  visible: { 
    y: 0, 
    opacity: 1,
    rotateX: 0,
    transition: { 
      duration: DURATIONS.normal,
      ease: EASINGS.easeOut
    }
  },
  hover: { 
    y: -10,
    scale: 1.02,
    rotateX: 5,
    transition: { 
      duration: DURATIONS.fast,
      ease: EASINGS.easeOut
    }
  }
};

// Page transition animations
export const pageVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  in: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: DURATIONS.normal,
      ease: EASINGS.easeOut
    }
  },
  out: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: DURATIONS.fast,
      ease: EASINGS.easeIn
    }
  }
};

// Responsive animation variants
export const responsiveVariants = {
  mobile: {
    scale: 0.9,
    duration: DURATIONS.fast
  },
  tablet: {
    scale: 0.95,
    duration: DURATIONS.normal
  },
  desktop: {
    scale: 1,
    duration: DURATIONS.normal
  }
};

// Scroll-triggered animations
export const scrollVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
    scale: 0.9
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: DURATIONS.slow
    }
  }
};

// Loading animations
export const loadingVariants: Variants = {
  start: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  end: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      fill: { duration: 1, delay: 1, ease: "easeInOut" }
    }
  }
};

// Utility functions for responsive animations
export const getResponsiveVariant = (breakpoint: 'mobile' | 'tablet' | 'desktop') => {
  return responsiveVariants[breakpoint];
};

// Animation presets for common use cases
export const animationPresets = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: DURATIONS.normal, ease: EASINGS.easeOut }
  },
  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: DURATIONS.normal, ease: EASINGS.easeOut }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: DURATIONS.normal, ease: EASINGS.easeOut }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: DURATIONS.normal, ease: EASINGS.easeOut }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: DURATIONS.normal, ease: EASINGS.bounce }
  }
};