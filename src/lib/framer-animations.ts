
export const fadeIn = (delay: number = 0) => ({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
});

export const slideIn = (direction: "left" | "right" | "up" | "down", delay: number = 0) => {
  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: -100 },
    down: { x: 0, y: 100 },
  };

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

// New animations
export const textReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const, // Fixed: TypeScript needs specific literal type
      ease: "easeInOut",
    },
  },
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const rotateAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const shimmerAnimation = {
  animate: {
    background: [
      "linear-gradient(to right, #112240 0%, #233554 20%, #112240 40%, #112240 100%)",
      "linear-gradient(to right, #112240 0%, #112240 20%, #233554 40%, #112240 60%, #112240 100%)",
      "linear-gradient(to right, #112240 0%, #112240 40%, #233554 60%, #112240 80%, #112240 100%)",
      "linear-gradient(to right, #112240 0%, #112240 60%, #233554 80%, #112240 100%)",
      "linear-gradient(to right, #112240 0%, #112240 100%)",
    ],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const, // Fixed: TypeScript needs specific literal type
    },
  },
};
