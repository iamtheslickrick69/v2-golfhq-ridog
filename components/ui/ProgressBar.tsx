import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  current: number;
  max: number;
  className?: string;
  showLabel?: boolean;
}

export function ProgressBar({ current, max, className, showLabel = true }: ProgressBarProps) {
  const percentage = Math.min(Math.round((current / max) * 100), 100);

  return (
    <div className={cn("space-y-2", className)}>
      {showLabel && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">{current.toLocaleString()} XP</span>
          <span className="text-gray-600">{max.toLocaleString()} XP</span>
        </div>
      )}
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-golf-green to-golf-green-light"
        />
      </div>
    </div>
  );
}
