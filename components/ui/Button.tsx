import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { scaleOnTap } from "@/lib/animations";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost'
  };

  return (
    <motion.button
      {...scaleOnTap}
      className={cn(variantClasses[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
