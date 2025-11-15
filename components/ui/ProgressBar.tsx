import { motion } from "framer-motion";
import { progressFill } from "@/lib/animations/presets";

interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  showLabel?: boolean;
  className?: string;
  barColor?: string;
}

export function ProgressBar({
  value,
  max = 100,
  showLabel = false,
  className = "",
  barColor = "bg-golf-green",
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={`absolute top-0 left-0 h-full ${barColor} rounded-full`}
          variants={progressFill}
          initial="initial"
          animate="animate"
          custom={percentage}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-sm text-gray-600 text-right">
          {value} / {max}
        </div>
      )}
    </div>
  );
}
