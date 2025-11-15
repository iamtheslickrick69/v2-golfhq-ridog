"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/animations/presets";
import { Avatar } from "@/components/ui";

interface RileyMessageProps {
  role: "user" | "riley";
  content: string;
  timestamp?: Date;
}

export function RileyMessage({ role, content, timestamp }: RileyMessageProps) {
  const isRiley = role === "riley";

  return (
    <motion.div
      className={`flex gap-3 mb-4 ${isRiley ? "justify-start" : "justify-end"}`}
      variants={isRiley ? slideInFromLeft : slideInFromRight}
      initial="initial"
      animate="animate"
    >
      {isRiley && <Avatar alt="Riley B" fallback="RB" />}
      <div className={`max-w-[70%] ${isRiley ? "" : "order-first"}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isRiley
              ? "bg-white border border-gray-200"
              : "bg-golf-green text-white"
          }`}
        >
          <p className="text-sm md:text-base">{content}</p>
        </div>
        {timestamp && (
          <p className="text-xs text-gray-500 mt-1 px-2">
            {timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}
      </div>
      {!isRiley && <Avatar alt="Jason Adams" fallback="JA" />}
    </motion.div>
  );
}
