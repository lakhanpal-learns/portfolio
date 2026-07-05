"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

type HeroCharacterProps = {
  state:
    | "idle"
    | "thumbsUp"
    | "resume"
    | "thinking"
    | "laptop"
    | "dashboard"
    | "goodbye"
    | "wave";
};

const characterImages = {
  idle: "/images/character/idle.png",
  thumbsUp: "/images/character/thumbs-up.png",
  resume: "/images/character/resume.png",
  thinking: "/images/character/thinking.png",
  laptop: "/images/character/laptop.png",
  dashboard: "/images/character/dashboard.png",
  goodbye: "/images/character/goodbye.png",
  wave: "/images/character/wave.png",
};

export default function HeroCharacter({
  state,
}: HeroCharacterProps) {
  const image = characterImages[state];

  return (
    <div className="relative flex h-[760px] w-full items-center justify-end">
      {/* Background Glow */}
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
          exit={{
            opacity: 0,
            scale: 0.96,
          }}
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
          className="relative z-10 translate-x-56"
        >
          <Image
            src={image}
            alt="Portfolio Character"
            width={760}
            height={760}
            priority
            className="h-auto w-[720px] max-w-none object-contain select-none pointer-events-none"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}