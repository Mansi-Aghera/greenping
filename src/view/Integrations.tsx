// src/view/Integrations.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import logo from "../assests/logo.png";
import {
  leftIntegrations,
  rightIntegrations,
} from "@/src/constants/integrations";

/* ── duplicate for seamless infinite loop ── */
const colA = [...leftIntegrations, ...leftIntegrations];
const colB = [...rightIntegrations, ...rightIntegrations];

/* ── card component (light-theme glass) ── */
function IntegCard({ name, icon }: { name: string; icon: string | StaticImageData }) {
  return (
    <div className="group flex w-full items-center gap-3 rounded-2xl border border-white bg-white/80 px-4 py-3 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-[0_4px_20px_rgba(34,197,94,0.15)] hover:-translate-y-0.5">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 group-hover:ring-primary/20">
        <Image src={icon} alt={name} width={26} height={26} className="object-contain" />
      </div>
      <span className="truncate text-sm font-semibold text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
        {name}
      </span>
      <div className="ml-auto h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/30 transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_5px_rgba(34,197,94,0.7)]" />
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="relative overflow-hidden">

      {/* ── site-matching background ── */}
      <div className="absolute inset-0 bg-background" />

      {/* soft radial green glow from center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(34,197,94,0.06) 0%, transparent 68%)",
        }}
      />

      {/* dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* ════════ CONTENT ════════ */}
      <div className="relative z-10">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/8 px-5 py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_5px_rgba(34,197,94,0.7)]" />
            <span className="text-sm font-semibold tracking-wide text-primary">
              2000+ Integrations Available
            </span>
          </motion.div>

          <h2 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Your Entire Stack.
            <span className="block bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-clip-text text-transparent">
              One Powerful Hub.
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Connect every tool your business uses — no code needed. GreenPing
            becomes the central brain of your entire workflow.
          </p>
        </motion.div>

        {/* ════════ DESKTOP — infinite marquee + central hub ════════ */}
        <div className="relative hidden items-center justify-center gap-6 px-4 lg:flex" style={{ height: 580 }}>

          {/* ── Column A: scrolls UP ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="marquee-col relative h-full w-[230px] flex-shrink-0 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to bottom,transparent 0%,black 12%,black 88%,transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom,transparent 0%,black 12%,black 88%,transparent 100%)",
            }}
          >
            <div className="marquee-up flex flex-col gap-3">
              {colA.map((item, i) => (
                <IntegCard key={`a-${i}`} name={item.name} icon={item.icon} />
              ))}
            </div>
          </motion.div>

          {/* connector left */}
          <div className="relative h-px w-20 flex-shrink-0">
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right,transparent,rgba(34,197,94,0.5))" }}
            />
            <motion.div
              className="absolute top-1/2 left-0 h-2 w-2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_8px_rgba(34,197,94,0.8)]"
              animate={{ left: ["0%", "calc(100% - 8px)"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* ── Central Hub ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-shrink-0 flex-col items-center"
          >
            {/* ambient glow */}
            <div
              className="pointer-events-none absolute"
              style={{
                inset: -80,
                borderRadius: "50%",
                background: "radial-gradient(circle,rgba(34,197,94,0.12) 0%,transparent 70%)",
              }}
            />

            {/* outer spinning ring */}
            <motion.div
              className="absolute rounded-full border border-primary/25"
              style={{ inset: -56 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
            </motion.div>

            {/* outer dashed ring */}
            <motion.div
              className="absolute rounded-full border border-dashed border-primary/15"
              style={{ inset: -90 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-primary-light/60" />
            </motion.div>

            {/* hub orb */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex h-48 w-48 items-center justify-center rounded-full"
              style={{
                background: "var(--gradient-primary)",
                boxShadow:
                  "0 0 0 1px rgba(34,197,94,0.2),0 0 50px rgba(34,197,94,0.4),0 0 100px rgba(34,197,94,0.15)",
              }}
            >
              <div className="flex h-36 w-36 items-center justify-center rounded-full border-2 border-white/30 bg-white/15 shadow-inner backdrop-blur-sm">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-2xl">
                  <Image src={logo} alt="GreenPing" width={80} height={80} className="object-contain" />
                </div>
              </div>
            </motion.div>

            {/* stats */}
            <div className="mt-8 flex flex-col items-center gap-2">
              {[
                { v: "2000+",   l: "Integrations" },
                { v: "99.9%",   l: "Uptime"        },
                { v: "< 5 min", l: "Setup"          },
              ].map((s) => (
                <div key={s.l} className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold text-primary">{s.v}</span>
                  <span className="text-xs text-muted-foreground">{s.l}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* connector right */}
          <div className="relative h-px w-20 flex-shrink-0">
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to left,transparent,rgba(34,197,94,0.5))" }}
            />
            <motion.div
              className="absolute top-1/2 right-0 h-2 w-2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_8px_rgba(34,197,94,0.8)]"
              animate={{ right: ["0%", "calc(100% - 8px)"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* ── Column B: scrolls DOWN ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="marquee-col relative h-full w-[230px] flex-shrink-0 overflow-hidden"
            style={{
              maskImage: "linear-gradient(to bottom,transparent 0%,black 12%,black 88%,transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom,transparent 0%,black 12%,black 88%,transparent 100%)",
            }}
          >
            <div className="marquee-down flex flex-col gap-3">
              {colB.map((item, i) => (
                <IntegCard key={`b-${i}`} name={item.name} icon={item.icon} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ════════ TABLET — hub + 2-col / 3-col grid ════════ */}
        <div className="hidden sm:block lg:hidden px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-10 flex justify-center"
          >
            <div
              className="relative flex h-32 w-32 items-center justify-center rounded-full"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "0 0 50px rgba(34,197,94,0.35)",
              }}
            >
              <div className="absolute inset-[-14px] rounded-full border border-primary/20" />
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl">
                <Image src={logo} alt="GreenPing" width={52} height={52} />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {[...leftIntegrations, ...rightIntegrations].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <IntegCard name={item.name} icon={item.icon} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ════════ MOBILE — hub + two horizontal marquee rows ════════ */}
        <div className="sm:hidden px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 flex justify-center"
          >
            <div
              className="relative flex h-28 w-28 items-center justify-center rounded-full"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "0 0 40px rgba(34,197,94,0.35)",
              }}
            >
              <div className="absolute inset-[-12px] rounded-full border border-primary/20" />
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white shadow-xl">
                <Image src={logo} alt="GreenPing" width={44} height={44} />
              </div>
            </div>
          </motion.div>

          {/* row 1 — scrolls left */}
          <div className="space-y-3 overflow-hidden">
            <div
              className="marquee-col"
              style={{
                maskImage: "linear-gradient(to right,transparent,black 8%,black 92%,transparent)",
                WebkitMaskImage: "linear-gradient(to right,transparent,black 8%,black 92%,transparent)",
              }}
            >
              <div className="mobile-scroll-left flex gap-3">
                {colA.map((item, i) => (
                  <div key={`ml-${i}`} className="min-w-[170px]">
                    <IntegCard name={item.name} icon={item.icon} />
                  </div>
                ))}
              </div>
            </div>

            {/* row 2 — scrolls right */}
            <div
              className="marquee-col"
              style={{
                maskImage: "linear-gradient(to right,transparent,black 8%,black 92%,transparent)",
                WebkitMaskImage: "linear-gradient(to right,transparent,black 8%,black 92%,transparent)",
              }}
            >
              <div className="mobile-scroll-right flex gap-3">
                {colB.map((item, i) => (
                  <div key={`mr-${i}`} className="min-w-[170px]">
                    <IntegCard name={item.name} icon={item.icon} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── footnote ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 text-center text-sm text-muted-foreground"
        >
          And{" "}
          <span className="font-semibold text-primary">2000+ more</span>{" "}
          integrations available via Zapier &amp; Pabbly
        </motion.p>
      </div>
    </section>
  );
}