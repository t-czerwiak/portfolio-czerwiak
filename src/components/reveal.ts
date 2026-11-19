import type { MotionProps } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Props de Motion para que un elemento aparezca al entrar en pantalla.
 * `step` escalona la entrada: cada paso suma 80 ms de demora.
 */
export function reveal(step = 0): MotionProps {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12, margin: "0px 0px -40px 0px" },
    transition: {
      duration: 0.9,
      ease: EASE,
      delay: step * 0.08,
      opacity: { duration: 0.8, ease: "easeOut", delay: step * 0.08 },
    },
  };
}
