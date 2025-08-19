import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";

function AnimatedLogoText() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Color scheme for each word
  const colorScheme = [
    "text-blue-600",    // AZONE
    "text-purple-600",  // INSTITUTE
    "text-green-600",   // OF
    "text-yellow-600",  // TECHNOLOGY
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: i * 0.05,
      },
    }),
  };

  const verticalBar = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const text = "AZONE INSTITUTE OF TECHNOLOGY";
  const words = text.split(" ");

  return (
    <motion.div
      className="flex items-center"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={container}
    >
      <motion.span
        className="rotate-90 inline-block mr-2 mb-2 text-blue-500"
        variants={verticalBar}
      >
        |
      </motion.span>

      <motion.p className="text-lg sm:text-3xl lg:text-4xl font-bold flex flex-wrap items-center">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="flex">
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`${wordIndex}-${charIndex}`}
                custom={charIndex}
                variants={letter}
                className={`inline-block ${colorScheme[wordIndex % colorScheme.length]}`}
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
            {/* Add space between words except after last word */}
            {wordIndex < words.length - 1 && (
              <motion.span 
                className="inline-block w-2"
                variants={letter}
                custom={word.length}
              />
            )}
          </span>
        ))}
      </motion.p>
    </motion.div>
  );
}

export default AnimatedLogoText;