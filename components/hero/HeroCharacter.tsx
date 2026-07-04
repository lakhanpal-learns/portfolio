"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

type HeroCharacterProps = {
  state: "idle" | "thumbsUp";
};

export default function HeroCharacter({
  state,
}: HeroCharacterProps) {
  const image =
    state === "thumbsUp"
      ? "/images/character/thumbs-up.png"
      : "/images/character/idle.png";

  return (
    <div className="relative flex h-[760px] w-full items-center justify-end">
      <div className="absolute right-0 h-[760px] w-[760px] rounded-full bg-muted/15 blur-3xl" />

      <AnimatePresence mode="wait">
        <motion.div
          key={image}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
            rotate: [0, 1, 0, -1, 0],
          }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{
            opacity: { duration: 0.25 },
            scale: { duration: 0.25 },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative z-10 translate-x-60"
        >
          <Image
            src={image}
            alt="Portfolio Character"
            width={550}
            height={650}
            priority
            className="h-auto w-[720px] max-w-none select-none object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}