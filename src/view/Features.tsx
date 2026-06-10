

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import logo from "../assests/logo.png";

import {
  Brain,
  QrCode,
  LineChart,
  PlugZap,
  Workflow,
  Rocket,
  BarChart3,
  Users,
  MessageCircleMore,
  UserPlus,
} from "lucide-react";

const features = [
  {
    title: "AI Chatbot",
    icon: Brain,
    desc: "AI-powered conversations and customer engagement.",
  },
  {
    title: "Live Analysis",
    icon: LineChart,
    desc: "Realtime insights into campaigns and performance.",
  },
  {
    title: "Flow Maker",
    icon: Workflow,
    desc: "Create advanced customer automation journeys.",
  },
  {
    title: "Chat Reports",
    icon: BarChart3,
    desc: "Comprehensive analytics and reporting dashboard.",
  },
  {
    title: "WhatsApp Chat",
    icon: MessageCircleMore,
    desc: "Manage customer conversations seamlessly.",
  },
  {
    title: "Embedded Signup",
    icon: UserPlus,
    desc: "Fast onboarding with embedded signup flows.",
  },
  {
    title: "Assign Agents",
    icon: Users,
    desc: "Assign conversations to team members instantly.",
  },
  {
    title: "Campaigns",
    icon: Rocket,
    desc: "Launch and manage campaigns effortlessly.",
  },
  {
    title: "API Integration",
    icon: PlugZap,
    desc: "Connect GreenPing with your ecosystem.",
  },
  {
    title: "QR Code",
    icon: QrCode,
    desc: "Generate QR codes for instant engagement.",
  },
];

export default function Features() {
  const radius = 300;

  return (
    <section className="relative overflow-hidden py-5 lg:py-10">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-primary-light/10 blur-[140px]" />

      <Container className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            GREENPING ECOSYSTEM
          </span>

          <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Everything Connected
            <span className="block bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-clip-text text-transparent">
              Around GreenPing
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            A complete ecosystem for automation, analytics,
            communication and customer growth.
          </p>
        </motion.div>

        {/* Desktop Orbit */}
        <div className="relative mx-auto hidden h-[850px] max-w-[1200px] lg:block">
          {/* Orbit Rings */}
          <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />

          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
<svg
  className="absolute inset-0 h-full w-full"
  viewBox="0 0 1200 820"
>
  {features.map((_, index) => {
    const angle =
      (index / features.length) * Math.PI * 2 - Math.PI / 2;

    const x = 600 + Math.cos(angle) * radius;
    const y = 410 + Math.sin(angle) * radius;

    return (
      <g key={index}>
        {/* Connection Line */}
        <motion.line
          x1="600"
          y1="410"
          x2={x}
          y2={y}
          stroke="rgba(34,197,94,0.18)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: index * 0.08,
          }}
        />

        {/* Moving Pulse */}
        <motion.circle
          r="4"
          fill="rgb(var(--primary))"
          initial={{
            cx: 600,
            cy: 410,
          }}
          animate={{
            cx: [600, x],
            cy: [410, y],
          }}
          transition={{
            duration: 2.5,
            delay: index * 0.2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "linear",
          }}
        />
      </g>
    );
  })}
</svg>
          {/* Center Logo */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute left-1/2 top-1/2 z-20 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/20 bg-white shadow-[var(--shadow-primary-lg)]"
          >
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
<div className="absolute -inset-6 rounded-full border border-primary/20" />

            <Image
              src={logo}
              alt="GreenPing"
              className="relative z-10 h-20 w-auto object-contain"
            />
          </motion.div>

          {/* Orbit Nodes */}
          {features.map((feature, index) => {
            const angle =
              (index / features.length) * Math.PI * 2 - Math.PI / 2;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                }}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                className="group absolute z-10 hover:z-50 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative flex flex-col items-center">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 scale-125 rounded-full bg-primary/20 blur-xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

                  {/* Icon Circle */}
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/20 bg-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-[var(--shadow-primary-lg)]">
                    <Icon
                      size={34}
                      className="text-primary"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 whitespace-nowrap text-center text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>

                  {/* Side Tooltip */}
                  <div className="  pointer-events-none
  absolute
  left-[120%]
  top-1/2
  z-[999]
  w-60
  -translate-y-1/2
  rounded-2xl
  border
  border-border
  bg-white
  p-4
  shadow-2xl
  opacity-0
  invisible
  transition-all
  duration-300
  group-hover:opacity-100
  group-hover:visible">
                    <p className="text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-border bg-white p-5 shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon
                    size={24}
                    className="text-primary"
                  />
                </div>

                <h3 className="mb-2 font-semibold text-foreground">
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}