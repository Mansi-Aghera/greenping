"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -12,
      }}
      className="group relative h-full"
    >
      {/* Border Glow */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-primary/30 via-primary-light/20 to-primary-dark/30 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

      <div className="relative h-full overflow-hidden rounded-[32px] border border-border/50 bg-white/70 backdrop-blur-xl p-7 lg:p-8">
        {/* Top Glow */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary-dark via-primary to-primary-light" />

        {/* Decorative Orb */}
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:scale-150" />

        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-dark via-primary to-primary-light shadow-lg">
          <Icon
            size={30}
            className="text-white transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <h3 className="mb-4 text-xl font-bold text-foreground lg:text-2xl">
          {title}
        </h3>

        <p className="leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Hover Line */}
        <div className="mt-6 h-[3px] w-0 rounded-full bg-gradient-to-r from-primary-dark via-primary to-primary-light transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}