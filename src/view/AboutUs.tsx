"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import aboutHero from "../assests/about_hero.png";
import {
  Target,
  Zap,
  Heart,
  Globe2,
  Users,
  MessageCircleMore,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

/* ── floating particle dots config ── */
const particles = [
  { size: 5,  x: "8%",  y: "18%", delay: 0,    dur: 4.5 },
  { size: 8,  x: "88%", y: "12%", delay: 0.7,  dur: 5.2 },
  { size: 4,  x: "75%", y: "78%", delay: 1.4,  dur: 3.8 },
  { size: 7,  x: "14%", y: "72%", delay: 0.3,  dur: 6.0 },
  { size: 5,  x: "92%", y: "48%", delay: 1.8,  dur: 4.2 },
  { size: 3,  x: "38%", y: "8%",  delay: 2.1,  dur: 5.5 },
  { size: 6,  x: "55%", y: "90%", delay: 0.9,  dur: 4.0 },
  { size: 4,  x: "3%",  y: "45%", delay: 1.6,  dur: 5.8 },
];

/* ── floating stat cards for the visual panel ── */
const floatCards = [
  { value: "5000+", label: "Businesses",  icon: Users,            pos: { top: "0%",  left: "-8%" }, delay: 0    },
  { value: "50M+",  label: "Messages Sent", icon: MessageCircleMore, pos: { top: "8%",  right: "-8%" }, delay: 0.6  },
  { value: "30+",   label: "Countries",   icon: Globe2,            pos: { bottom: "10%", left: "-8%" }, delay: 1.2  },
  { value: "99.9%", label: "Uptime SLA",   icon: TrendingUp,        pos: { bottom: "2%", right: "-8%" }, delay: 1.8  },
];

/* ── story milestones ── */
const milestones = [
  { year: "2022", text: "Founded to solve the WhatsApp + CRM gap" },
  { year: "2023", text: "Became an official Meta Business Partner" },
  { year: "2024", text: "Crossed 5000+ businesses across 30+ countries" },
];

/* ── core values ── */
const values = [
  { icon: Target,     title: "Mission-Driven",    desc: "Make WhatsApp marketing simple, smart, and scalable." },
  { icon: Zap,        title: "Speed & Reliability", desc: "Real-time automation that runs 24/7 without a hitch." },
  { icon: Heart,      title: "Customer First",     desc: "Every feature starts with an obsession to solve real problems." },
  { icon: ShieldCheck, title: "Secure & Compliant", desc: "Official Meta API — GDPR-ready and end-to-end encrypted." },
];

/* ══════════════════════════════════════════
   FLOATING VISUAL PANEL (right column)
══════════════════════════════════════════ */
function FloatingVisual() {
  return (
    <div className="relative flex items-center justify-center w-full" style={{ height: 480 }}>

      {/* soft green glow behind hub */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 320, height: 320,
          background: "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)",
          top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />

      {/* ── animated orbit ring ── */}
      <motion.div
        className="absolute rounded-full border border-dashed border-primary/20"
        style={{ width: 340, height: 340, top: "50%", left: "50%", marginTop: -170, marginLeft: -170 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_12px_rgba(34,197,94,0.9)]" />
      </motion.div>
      <motion.div
        className="absolute rounded-full border border-primary/10"
        style={{ width: 440, height: 440, top: "50%", left: "50%", marginTop: -220, marginLeft: -220 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-primary-light/60" />
      </motion.div>

      {/* ── Central hub (Relatable Image) ── */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 overflow-hidden rounded-3xl border border-border bg-white p-2 shadow-2xl w-[320px] h-[240px] flex items-center justify-center"
      >
        <Image
          src={aboutHero}
          alt="WhatsApp Automation Growth"
          className="w-full h-full object-cover rounded-2xl"
          priority
        />
      </motion.div>

      {/* ── Floating stat cards ── */}
      {floatCards.map((card, i) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.label}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
            className="absolute z-20 flex items-center gap-3.5 rounded-2xl border border-border bg-white p-4.5 shadow-lg min-w-[170px]"
            style={card.pos}
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300">
              <Icon size={22} className="text-primary" />
            </div>
            <div>
              <p className="text-2xl font-extrabold leading-none text-primary">{card.value}</p>
              <p className="text-xs font-semibold text-muted-foreground mt-1">{card.label}</p>
            </div>
          </motion.div>
        );
      })}

      {/* ── Mini floating dots ── */}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary"
          style={{
            width:  3 + (i % 3),
            height: 3 + (i % 3),
            left: `${10 + i * 12}%`,
            top:  `${25 + (i % 4) * 15}%`,
            opacity: 0.35,
          }}
          animate={{ y: [-5, 5, -5], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
export default function AboutUs() {
  return (
    <section id="about" className="relative overflow-hidden py-8 lg:py-16">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-primary-light/6 blur-[140px]" />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgb(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Floating ambient particles ── */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full bg-primary"
          style={{ width: p.size, height: p.size, left: p.x, top: p.y, opacity: 0.25 }}
          animate={{ y: [-8, 8, -8], opacity: [0.15, 0.45, 0.15] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}

      <Container className="relative z-10">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            <Heart size={14} />
            Our Story
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Built for Businesses
            <span className="block bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-clip-text text-transparent">
              That Dare to Grow
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            GreenPing was born from a simple belief — every business deserves the power of
            WhatsApp automation, without the complexity.
          </p>
        </motion.div>

        {/* ── Two-col main grid ── */}
        <div className="grid gap-16 lg:grid-cols-2 items-start">

          {/* Left Column: Floating Visual + Core Values 2x2 Grid */}
          <div className="flex flex-col gap-14 order-2 lg:order-1">
            <div>
              <FloatingVisual />
            </div>

           
          </div>

          {/* Right Column: Story + Milestones + Badges */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="space-y-6 lg:pl-4"
            >
              
 {/* Core Values 2's Grid */}
            <div className="w-full">
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <motion.div
                      key={v.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(34,197,94,0.12)" }}
                      className="group relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary/25"
                    >
                      {/* card glow on hover */}
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/18 group-hover:scale-105">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <h4 className="relative mb-2 font-bold text-foreground text-base">{v.title}</h4>
                      <p className="relative text-xs leading-relaxed text-muted-foreground">{v.desc}</p>

                      {/* bottom accent line */}
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary-dark to-primary transition-all duration-500 group-hover:w-full" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
             
            </motion.div>
          </div>

        </div>

      </Container>
    </section>
  );
}
