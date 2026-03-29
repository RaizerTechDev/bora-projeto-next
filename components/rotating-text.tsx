"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingTextProps {
  words: string[];
  className?: string;
}

export function RotatingText({ words, className = "" }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 30, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -30, rotateX: 90 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="inline-block text-cyan-400 neon-text"
        >
          {words[currentIndex]}
          {/* Underline animado */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="          
    absolute -bottom-1 left-0 right-0 
    h-[3px] 
    bg-gradient-to-r from-white to-blue-500 
    origin-center 
    rounded-full
  "
            style={{
              boxShadow:
                "0 0 10px rgba(0,255,255,0.8), 0 0 20px rgba(0,255,255,0.4)",
            }}
          />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
