"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations/presets";

interface RileyQuickRepliesProps {
  options: string[];
  onSelect: (option: string) => void;
}

export function RileyQuickReplies({ options, onSelect }: RileyQuickRepliesProps) {
  return (
    <motion.div
      className="flex flex-wrap gap-2 mb-4"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {options.map((option, index) => (
        <motion.button
          key={index}
          variants={staggerItem}
          className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-golf-green-pale hover:border-golf-green transition-colors duration-200"
          onClick={() => onSelect(option)}
          whileTap={{ scale: 0.95 }}
        >
          {option}
        </motion.button>
      ))}
    </motion.div>
  );
}
