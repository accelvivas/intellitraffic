import { motion } from "motion/react";
import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FloatingCard({ children, delay = 0, className = "" }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
