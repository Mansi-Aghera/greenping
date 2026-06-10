"use client";

import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import {
  ShieldCheck,
  BadgeCheck,
  Lock,
  Server,
  Star,
  Award,
  Clock,
  Headphones,
} from "lucide-react";

const trustItems = [
  {
    icon: BadgeCheck,
    title: "Meta Official Partner",
    desc: "We're an official Meta Business Partner — your WhatsApp access is always secure, verified, and policy-compliant.",
    badge: "VERIFIED",
  },
  {
    icon: Lock,
    title: "End-to-End Encrypted",
    desc: "All messages and customer data are encrypted at rest and in transit. We never read your conversations.",
    badge: "SECURE",
  },
  {
    icon: Server,
    title: "99.9% Uptime SLA",
    desc: "Enterprise-grade infrastructure with redundant servers. Your automation never goes down when you need it most.",
    badge: "RELIABLE",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    desc: "Real humans ready to help — not bots. Our support team is available round the clock via chat, call, and email.",
    badge: "SUPPORT",
  },
  {
    icon: Award,
    title: "ISO & GDPR Compliant",
    desc: "We follow global data protection standards so your business stays legally protected in every market.",
    badge: "COMPLIANT",
  },
  {
    icon: Clock,
    title: "Instant Onboarding",
    desc: "Get your WhatsApp Business API live in under 30 minutes — no technical knowledge required.",
    badge: "FAST",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, D2C Brand",
    text: "GreenPing 10x'd our WhatsApp revenue in 3 months. The automation flows are insane.",
    stars: 5,
  },
  {
    name: "Priya Mehta",
    role: "Head of Marketing, EdTech",
    text: "Our lead response time dropped from 2 hours to 30 seconds. Absolutely game-changing.",
    stars: 5,
  },
  {
    name: "Arjun Nair",
    role: "CEO, Real Estate Firm",
    text: "The CRM integration and WhatsApp together is a killer combo. Best decision we made.",
    stars: 5,
  },
];

export default function WhyTrustUs() {
  return (
    <section id="trust" className="relative overflow-hidden pt-8 lg:pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[140px]" />

      <Container className="relative z-10">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            <ShieldCheck size={14} />
            Why Businesses Trust Us
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Built on Trust.
            <span className="block bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-clip-text text-transparent">
              Proven by Results.
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {"5000+ businesses chose GreenPing and never looked back. Here's why."}
          </p>
        </motion.div>

        {/* ── Trust grid — 2-col with hover gradient ── */}
        <div className="trust-grid mb-20 grid grid-cols-1 gap-3 md:grid-cols-2">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="trust-card group relative overflow-hidden rounded-xl border border-border bg-white px-5 py-4 sm:px-6 sm:py-[18px] cursor-pointer"
              >
                {/* ── Gradient overlay (visible on hover) ── */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(16,185,129,0.22) 40%, rgba(5,150,105,0.12) 100%)",
                  }}
                />

                {/* ── Badge ── */}
                <span className="trust-badge absolute right-3.5 top-3.5 rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-bold tracking-widest text-primary transition-all duration-500 group-hover:bg-white/30 group-hover:text-white sm:right-4 sm:top-4">
                  {item.badge}
                </span>

                {/* ── Icon ── */}
                <div className="relative z-10 mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 transition-all duration-500 group-hover:bg-white/25 group-hover:shadow-lg">
                  <Icon
                    size={17}
                    className="text-primary transition-colors duration-500 group-hover:text-white"
                  />
                </div>

                {/* ── Title ── */}
                <h3 className="relative z-10 mb-1 text-[15px] font-bold text-foreground transition-colors duration-500 group-hover:text-white sm:text-base">
                  {item.title}
                </h3>

                {/* ── Description ── */}
                <p className="relative z-10 text-xs leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/80 sm:text-[13px]">
                  {item.desc}
                </p>

                {/* ── Bottom accent line ── */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-primary-dark via-primary to-primary-light transition-all duration-600 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* ── Testimonials ── */}
    

        
      </Container>



    </section>
  );
}
