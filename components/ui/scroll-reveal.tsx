"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  distance?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  distance = 50,
  className = "",
}: ScrollRevealProps) => {
  const initial = {
    opacity: 0,
    ...(direction === "up" ? { y: distance } : {}),
    ...(direction === "down" ? { y: -distance } : {}),
    ...(direction === "left" ? { x: distance } : {}),
    ...(direction === "right" ? { x: -distance } : {}),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
