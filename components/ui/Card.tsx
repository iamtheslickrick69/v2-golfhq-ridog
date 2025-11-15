import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardHover } from "@/lib/animations";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hoverable = false, onClick }: CardProps) {
  if (hoverable || onClick) {
    return (
      <motion.div
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        className={cn("card cursor-pointer", className)}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cn("card", className)}>
      {children}
    </div>
  );
}
