"use client";

import { motion } from "framer-motion";
import { typingDot } from "@/lib/animations/presets";
import { Avatar } from "@/components/ui";

export function RileyTypingIndicator() {
  return (
    <div className="flex gap-3 mb-4">
      <Avatar alt="Riley B" fallback="RB" />
      <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
        <div className="flex gap-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-gray-400 rounded-full"
              variants={typingDot}
              animate="animate"
              transition={{ delay: index * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
