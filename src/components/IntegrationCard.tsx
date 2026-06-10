"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface IntegrationCardProps {
  name: string;
  icon: string | StaticImageData;
}

export default function IntegrationCard({ name, icon }: IntegrationCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="integration-card flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-md backdrop-blur-xl transition-shadow duration-300 hover:border-primary/30 hover:shadow-xl"
      aria-label={`Integration: ${name}`}
    >
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
        <Image
          src={icon}
          alt={name}
          width={28}
          height={28}
          className="object-contain"
        />
      </div>
      <span className="truncate text-sm font-semibold text-foreground">
        {name}
      </span>
    </motion.div>
  );
}
