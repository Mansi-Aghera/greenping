"use client";
import { useEffect, useRef, useState } from "react";
import { HelpCircle, Plus, MessageCircle } from "lucide-react";
import Container from "@/src/components/ui/Container";

// ─── Data ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How can I integrate WhatsApp with my business account?",
    a: "Simply sign up for Greenping, connect your WhatsApp Business Account, and follow the step-by-step guide in the dashboard. Our Embedded Signup process takes less than 5 minutes — fully using the official WhatsApp Cloud API.",
  },
  {
    q: "Can I manage multiple phone numbers on the same account?",
    a: "Yes! Greenping supports managing multiple phone numbers under the same WhatsApp Business Account — regional offices, brands, or product lines — all in a single unified interface.",
  },
  {
    q: "How do I create and manage message templates?",
    a: "Create, edit, and submit WhatsApp message templates directly within the Greenping dashboard — no need to visit Meta Business Manager separately. Navigate to Templates, create your template, submit for approval, and deploy in campaigns.",
  },
  {
    q: "What analytics does the platform provide?",
    a: "Greenping provides real-time analytics on message delivery rates, open rates, response times, campaign performance, bot engagement, and agent activity — all presented in visual dashboards with export options for deeper analysis.",
  },
  {
    q: "Is my data secure when using Greenping?",
    a: "We use AES-256 encryption for all stored data. All communications use WhatsApp's built-in end-to-end encryption. We are GDPR compliant and follow WhatsApp's privacy and security policies strictly.",
  },
  {
    q: "Can I set up an AI-powered chatbot without coding?",
    a: "Yes! Our Flow Maker lets you build sophisticated conversation flows visually — no code needed. The AI Chatbot feature uses large language models to handle customer queries with contextual, intelligent answers.",
  },
];

interface FaqItemProps {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

// ─── Single FAQ item ──────────────────────────────────────────────────────────
function FaqItem({ faq, index, isOpen, onToggle }: FaqItemProps) {
  const ansRef  = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [visible, setVisible] = useState(false);

  // Measure answer height for smooth transition
  useEffect(() => {
    if (ansRef.current) setHeight(ansRef.current.scrollHeight);
  }, []);

  // Scroll-reveal
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={[
        "bg-white rounded-2xl overflow-hidden border transition-all duration-300",
        isOpen
          ? "border-green-300 shadow-lg shadow-green-100/50"
          : "border-gray-200 hover:border-green-200 hover:shadow-md hover:shadow-green-50",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5",
      ].join(" ")}
      style={{ transition: `opacity .5s ease ${index * 0.07}s, transform .5s ease ${index * 0.07}s, border-color .25s, box-shadow .25s` }}
    >
      {/* Question trigger */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start gap-3 px-5 py-4 text-left group"
      >
        {/* Number badge */}
        {/* <span
          className={[
            "w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5",
            "font-extrabold text-[10px] border transition-all duration-300",
            isOpen
              ? "bg-green-600 text-white border-green-600"
              : "bg-green-50 text-green-300 border-green-200",
          ].join(" ")}
        >
          {index + 1}
        </span> */}

        {/* Question text */}
        <span
          className={[
            "flex-1 text-[13px] font-bold leading-snug transition-colors duration-250",
            isOpen ? "text-green-700" : "text-gray-900 group-hover:text-green-700",
          ].join(" ")}
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {faq.q}
        </span>

        {/* Icon */}
        <span
          className={[
            "w-[22px] h-[22px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border",
            "transition-all duration-350",
            isOpen
              ? "bg-green-600 border-green-600 rotate-[135deg]"
              : "bg-gray-50 border-gray-200 group-hover:border-green-300 group-hover:bg-green-50",
          ].join(" ")}
        >
          <Plus
            className={[
              "w-3 h-3 transition-colors duration-250",
              isOpen ? "text-white" : "text-gray-400 group-hover:text-green-600",
            ].join(" ")}
          />
        </span>
      </button>

      {/* Animated progress bar */}
      <div className="mx-5 h-px overflow-hidden">
        <div
          className="h-px bg-gradient-to-r from-green-500 to-teal-500 transition-all duration-400 origin-left"
          style={{ transform: isOpen ? "scaleX(1)" : "scaleX(0)" }}
        />
      </div>

      {/* Answer — smooth height transition */}
      <div
        className="overflow-hidden transition-all duration-380"
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          opacity:   isOpen ? 1 : 0,
          transition: "max-height .38s cubic-bezier(.4,0,.2,1), opacity .3s ease",
        }}
      >
        <div ref={ansRef}>
          <p
            className="px-5 pt-3 pb-5 text-[12.5px] text-gray-500 leading-relaxed pl-14"
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i));

  return (
    <section id="faq" className="py-10 sm:py-18 bg-white relative overflow-hidden">

      {/* Soft radial bg */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(5,150,105,.04), transparent)" }}
      />

      <Container className="relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-[11px] font-medium text-green-700 tracking-wide">
            <HelpCircle className="w-3.5 h-3.5 text-green-600" />
            Got questions?
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.08]"
           style={{ fontFamily: "sans-serif" }}
          >
            Want to{" "}
            <span className="bg-gradient-to-r from-green-600 via-teal-500 to-green-600 bg-clip-text text-transparent">
              know more?
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Everything you need to know about Greenping Solutions.
          </p>
        </div>

        {/* ── FAQ Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              index={i}
              isOpen={open === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 px-6 sm:px-8 py-6 rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="text-center sm:text-left">
            <p
              className="text-base font-extrabold text-gray-900 mb-1"
              style={{ fontFamily: "sans-serif" }}
            >
              Still have questions?
            </p>
            <p className="text-sm text-gray-500">
              Our team is ready to help you get set up and growing.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-200 whitespace-nowrap"
            style={{ fontFamily: "sans-serif" }}
          >
            <MessageCircle className="w-4 h-4" />
            Talk to support
          </a>
        </div>
      </Container>

      {/* Keyframes */}
     
    </section>
  );
}