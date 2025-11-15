import { motion, HTMLMotionProps } from "framer-motion";
import { cardHover } from "@/lib/animations/presets";
import { ReactNode } from "react";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export function Card({ children, hover = false, className = "", ...props }: CardProps) {
  return (
    <motion.div
      className={`glass-card p-6 ${className}`}
      variants={hover ? cardHover : undefined}
      initial={hover ? "rest" : undefined}
      whileHover={hover ? "hover" : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
