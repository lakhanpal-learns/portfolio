import Image from "next/image";

import { character } from "@/content/character";

export default function HeroCharacter() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={character.idle}
        alt="Portfolio Character"
        width={500}
        height={600}
        priority
        className="h-auto w-full max-w-md object-contain"
      />
    </div>
  );
}