"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/src/components/ui/Container";
import {
  CheckCircle2,
  Sparkles,
  Zap,
  Crown,
  ArrowRight,
  Star,
  Shield,
} from "lucide-react";

/* ── billing periods ── */
const periods = [
  { label: "Monthly", key: "monthly", save: undefined },
  { label: "6 Months", key: "6months", save: "10%" },
  { label: "12 Months", key: "12months", save: "20%" },
  { label: "18 Months", key: "18months", save: "30%" },
] as const;

type PeriodKey = (typeof periods)[number]["key"];

/* ── plan data ── */
const plans = [
  {
    name: "Free",
    badge: "Starter",
    icon: Zap,
    tagline: "Start for free",
    prices: {
      monthly: 4000,
      "6months": 3600,
      "12months": 3200,
      "18months": 2800,
    },
    popular: false,
    cta: "Get Started Free",
    features: [
      { text: "Contacts", value: "10" },
      { text: "Campaigns Per Month", value: "5" },
      { text: "Bot Replies", value: "10" },
      { text: "Bot Flows", value: "10" },
      { text: "Contact Custom Fields", value: "2" },
      { text: "Team Members/Agents", value: "5" },
      { text: "AI Chat Bot", value: "✓" },
      { text: "API and Webhook Access", value: "✓" },
    ],
  },
  {
    name: "Premium",
    badge: "Most Popular",
    icon: Sparkles,
    tagline: "Best for growing teams",
    prices: {
      monthly: 2500,
      "6months": 2250,
      "12months": 2000,
      "18months": 1750,
    },
    popular: true,
    cta: "Choose Plan",
    features: [
      { text: "Contacts", value: "1,000" },
      { text: "Campaigns Per Month", value: "50" },
      { text: "Bot Replies", value: "100" },
      { text: "Bot Flows", value: "10" },
      { text: "Contact Custom Fields", value: "100" },
      { text: "Team Members/Agents", value: "10" },
      { text: "AI Chat Bot", value: "✓" },
      { text: "API and Webhook Access", value: "✓" },
    ],
  },
  {
    name: "Ultimate",
    badge: "Enterprise",
    icon: Crown,
    tagline: "Unlimited everything",
    prices: {
      monthly: 3500,
      "6months": 3150,
      "12months": 2800,
      "18months": 2450,
    },
    popular: false,
    cta: "Choose Plan",
    features: [
      { text: "Contacts", value: "Unlimited" },
      { text: "Campaigns Per Month", value: "Unlimited" },
      { text: "Bot Replies", value: "Unlimited" },
      { text: "Bot Flows", value: "Unlimited" },
      { text: "Contact Custom Fields", value: "Unlimited" },
      { text: "Team Members/Agents", value: "Unlimited" },
      { text: "AI Chat Bot", value: "✓" },
      { text: "API and Webhook Access", value: "✓" },
    ],
  },
];

export default function Pricing() {
  const [period, setPeriod] = useState<PeriodKey>("monthly");
  const [activePlan, setActivePlan] = useState(1); // Premium default

  return (
    <section id="pricing" className="relative overflow-hidden py-8 lg:py-16">
      {/* ── Light background matching site ── */}
      <div className="absolute inset-0 bg-background" />

      {/* soft radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "110%",
          height: "110%",
          background:
            "radial-gradient(ellipse 50% 40% at 50% 45%, rgba(34,197,94,0.06) 0%, transparent 65%)",
        }}
      />

      {/* dot grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* corner blurs */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary-light/6 blur-[120px]" />

      <Container className="relative z-10">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/10 px-5 py-2"
          >
            <Star size={13} className="fill-primary text-primary" />
            <span className="text-sm font-semibold tracking-wide text-primary">
              Simple, Transparent Pricing
            </span>
          </motion.div>

          <h2 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-clip-text text-transparent">
              GreenPing Solutions
            </span>{" "}
            User Plans
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Choose the plan that works best for your business needs.
          </p>
        </motion.div>

        {/* ── Billing Toggle ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mx-auto mb-14 flex w-fit items-center rounded-full border border-border bg-white p-1.5 shadow-sm"
        >
          {periods.map((p) => (
            <button
              key={p.key}
              onClick={() => setPeriod(p.key)}
              className={`relative z-10 flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-5 ${
                period === p.key
                  ? "text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {period === p.key && (
                <motion.div
                  layoutId="pricingPeriodBg"
                  className="absolute inset-0 rounded-full shadow-[var(--shadow-primary)]"
                  style={{ background: "var(--gradient-primary)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{p.label}</span>
              {p.save && period === p.key && (
                <span className="relative z-10 rounded-full bg-white/25 px-1.5 py-0.5 text-[10px] font-bold">
                  -{p.save}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* ── Plan Cards ── */}
        <div className="relative flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-center lg:gap-0">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const price = plan.prices[period];
            const isActive = activePlan === i;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                onClick={() => setActivePlan(i)}
                className={`relative w-full max-w-[380px] cursor-pointer transition-all duration-500 lg:w-[360px] ${
                  isActive
                    ? "z-20 lg:scale-[1.08] lg:-mx-1"
                    : "z-10 lg:scale-[0.96] opacity-60 hover:opacity-80"
                }`}
              >
                {/* Gradient border ring for active */}
                {isActive && (
                  <motion.div
                    layoutId="activePlanBorder"
                    className="absolute -inset-[2px] rounded-[28px]"
                    style={{ background: "var(--gradient-primary)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}

                {/* Green glow behind active card */}
                {isActive && (
                  <div className="pointer-events-none absolute -inset-4 rounded-[36px] bg-primary/15 blur-2xl" />
                )}

                {/* Card body */}
                <div
                  className={`relative flex h-full flex-col overflow-hidden rounded-[26px] border bg-white transition-all duration-500 ${
                    isActive
                      ? "border-transparent shadow-2xl"
                      : "border-border shadow-sm"
                  }`}
                >
                  {/* Popular ribbon */}
                  {plan.popular && (
                    <div className="absolute right-0 top-6 z-20">
                      <div
                        className="flex items-center gap-1.5 rounded-l-full py-1.5 pl-4 pr-0 text-xs font-bold text-white shadow-lg"
                        style={{ background: "var(--gradient-primary)" }}
                      >
                        <Sparkles size={12} />
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  {/* Top section */}
                  <div className="px-7 pb-0 pt-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-primary/15 shadow-[0_0_12px_rgba(34,197,94,0.2)]"
                            : "bg-primary/8"
                        }`}
                      >
                        <Icon
                          size={20}
                          className={
                            isActive ? "text-primary" : "text-primary/50"
                          }
                        />
                      </div>
                      <div>
                        <h3
                          className={`text-lg font-bold transition-colors duration-300 ${
                            isActive ? "text-foreground" : "text-foreground/50"
                          }`}
                        >
                          {plan.name}
                        </h3>
                        <p
                          className={`text-xs transition-colors duration-300 ${
                            isActive
                              ? "text-primary"
                              : "text-muted-foreground/50"
                          }`}
                        >
                          {plan.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span
                        className={`text-sm font-medium transition-colors duration-300 ${
                          isActive
                            ? "text-foreground/60"
                            : "text-foreground/25"
                        }`}
                      >
                        ₹
                      </span>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`${plan.name}-${price}`}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.25 }}
                          className={`text-5xl font-extrabold tracking-tight transition-colors duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-clip-text text-transparent"
                              : "text-foreground/30"
                          }`}
                        >
                          {price.toLocaleString("en-IN")}
                        </motion.span>
                      </AnimatePresence>
                      <div className="flex flex-col">
                        <span
                          className={`text-sm font-medium transition-colors duration-300 ${
                            isActive
                              ? "text-foreground/50"
                              : "text-foreground/20"
                          }`}
                        >
                          INR
                        </span>
                        <span
                          className={`text-xs transition-colors duration-300 ${
                            isActive
                              ? "text-muted-foreground"
                              : "text-foreground/15"
                          }`}
                        >
                          /month
                        </span>
                      </div>
                    </div>

                    <p
                      className={`mt-1.5 text-[11px] font-medium transition-colors duration-300 ${
                        isActive ? "text-primary/70" : "text-foreground/15"
                      }`}
                    >
                      + WhatsApp Cloud Messaging Charges
                    </p>
                  </div>

                  {/* divider */}
                  <div
                    className={`mx-7 my-5 h-px transition-colors duration-300 ${
                      isActive ? "bg-primary/20" : "bg-border"
                    }`}
                  />

                  {/* Features */}
                  <div className="flex-1 px-7">
                    <ul className="space-y-2.5">
                      {plan.features.map((f) => (
                        <li key={f.text} className="flex items-center gap-2.5">
                          <CheckCircle2
                            size={15}
                            className={`flex-shrink-0 transition-colors duration-300 ${
                              isActive ? "text-primary" : "text-primary/25"
                            }`}
                          />
                          <span
                            className={`text-sm transition-colors duration-300 ${
                              isActive
                                ? "text-muted-foreground"
                                : "text-foreground/25"
                            }`}
                          >
                            <span
                              className={`font-semibold transition-colors duration-300 ${
                                isActive
                                  ? "text-foreground"
                                  : "text-foreground/35"
                              }`}
                            >
                              {f.value}
                            </span>{" "}
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="px-7 pb-7 pt-6">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? "text-white shadow-[var(--shadow-primary)]"
                          : "border-2 border-border text-muted-foreground/60 hover:border-primary/30 hover:text-foreground"
                      }`}
                      style={
                        isActive
                          ? { background: "var(--gradient-primary)" }
                          : undefined
                      }
                    >
                      {plan.cta}
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Trust bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {[
            { icon: Shield, text: "SSL Encrypted" },
            { icon: CheckCircle2, text: "No Hidden Fees" },
            { icon: Star, text: "Cancel Anytime" },
          ].map((t) => {
            const TIcon = t.icon;
            return (
              <div key={t.text} className="flex items-center gap-2">
                <TIcon size={14} className="text-primary/60" />
                <span className="text-sm text-muted-foreground">{t.text}</span>
              </div>
            );
          })}
        </motion.div>

        {/* ── Bottom note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          All plans billed in INR. Need a custom enterprise plan?{" "}
          <a
            href="#contact"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Contact us →
          </a>
        </motion.p>
      </Container>
    </section>
  );
}
