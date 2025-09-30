import { useEffect, useState } from 'react';

/**
 * Custom hook to detect if the user prefers reduced motion
 * This is important for accessibility and respecting user preferences
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return;
    }

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add event listener
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
};

/**
 * Get animation props based on reduced motion preference
 */
export const getAnimationProps = (prefersReducedMotion: boolean) => {
  if (prefersReducedMotion) {
    return {
      initial: false,
      animate: false,
      transition: { duration: 0 }
    };
  }
  
  return {};
};