import { Variants } from "framer-motion";

// ====================
// PAGE TRANSITION
// ====================
export const transitionVariantsPage: Variants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "100%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

// ====================
// COMPONENT FADE IN
// ====================
export const fadeIn = (position: "right" | "bottom"): Variants => ({
  hidden: {
    y: position === "bottom" ? -80 : 0,
    x: position === "right" ? 80 : 0,
    opacity: 0,
  },
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.44,
      delay: 0.5,
      ease: "easeOut", // ✅ string válido para TypeScript
    },
  },
});
