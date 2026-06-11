

"use client";

import { useState, useEffect, useRef } from "react";
import { Check, Zap, Star, Crown } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PLANS = [
  {
    name: "Free",
    Icon: Zap,
    tagline: "Perfect for getting started",
    monthlyPrice: 0,
    annualPrice: 0,
    featured: false,
    cta: "Get Started Free",
    features: [
      "10 Contacts",
      "5 Campaigns / Month",
      "10 Bot Replies",
      "10 Bot Flows",
      "2 Contact Custom Fields",
      "5 Team Members / Agents",
      "AI Chat Bot",
      "API & Webhook Access",
    ],
  },
  {
    name: "Premium",
    Icon: Star,
    tagline: "For growing businesses",
    monthlyPrice: 2500,
    annualPrice: 2000,
    featured: true,
    cta: "Choose Premium",
    features: [
      "1,000 Contacts",
      "50 Campaigns / Month",
      "100 Bot Replies",
      "10 Bot Flows",
      "100 Contact Custom Fields",
      "10 Team Members / Agents",
      "AI Chat Bot",
      "API & Webhook Access",
    ],
  },
  {
    name: "Ultimate",
    Icon: Crown,
    tagline: "Unlimited everything",
    monthlyPrice: 3500,
    annualPrice: 2800,
    featured: false,
    cta: "Choose Ultimate",
    features: [
      "Unlimited Contacts",
      "Unlimited Campaigns",
      "Unlimited Bot Replies",
      "Unlimited Bot Flows",
      "Unlimited Custom Fields",
      "Unlimited Team Members",
      "AI Chat Bot",
      "API & Webhook Access",
    ],
  },
];

// ─── Dot Grid Canvas ────────────────────────────────────────────────────────

function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    
    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const sp = 22;
      const r = 1.6;
      
      for (let x = 0; x <= canvas.width; x += sp) {
        for (let y = 0; y <= canvas.height; y += sp) {
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(34, 197, 94, 0.12)";
          ctx.fill();
        }
      }
    };
    
    draw();
    
    const resizeObserver = new ResizeObserver(() => draw());
    resizeObserver.observe(canvasRef.current);
    
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

// ─── Plan Card Component ─────────────────────────────────────────────────────

interface PlanCardProps {
  plan: typeof PLANS[0];
  isSelected: boolean;
  billingCycle: "monthly" | "annually";
  onSelect: () => void;
}

function PlanCard({ plan, isSelected, billingCycle, onSelect }: PlanCardProps) {
  const { name, Icon, tagline, monthlyPrice, annualPrice, featured, cta, features } = plan;
  const price = billingCycle === "monthly" ? monthlyPrice : annualPrice;
  const isFree = price === 0;

  const discountPercent =
    billingCycle === "annually" && monthlyPrice > 0
      ? Math.round(((monthlyPrice - annualPrice) / monthlyPrice) * 100)
      : 0;

  return (
    <div
      onClick={onSelect}
      className={`
        relative rounded-2xl sm:rounded-3xl flex flex-col h-full cursor-pointer transition-all duration-300
        ${isSelected ? "scale-100 shadow-2xl" : "scale-100 hover:scale-[1.02] hover:shadow-xl"}
      `}
    >
      {/* Gradient border wrapper for featured plan */}
      {featured && !isSelected && (
        <div
          className="absolute inset-0 rounded-2xl sm:rounded-3xl p-px pointer-events-none"
          style={{ background: "linear-gradient(135deg, #10b981, #14b8a6, #059669)" }}
        />
      )}

      {/* Card body */}
      <div
        className={`
          relative rounded-2xl sm:rounded-3xl flex flex-col h-full transition-all duration-300 p-5 sm:p-6 lg:p-7
          ${isSelected
            ? "bg-gradient-to-br from-green-600 to-teal-700 text-white"
            : featured
              ? "bg-white"
              : "bg-white border border-gray-200"
          }
        `}
      >
        {/* "Most Popular" badge */}
        {featured && (
          <div className="absolute -top-3 sm:-top-[14px] left-1/2 -translate-x-1/2 z-30 whitespace-nowrap pointer-events-none">
            <span
              className="inline-block px-3 sm:px-4 py-1 sm:py-[4px] rounded-full text-white text-[9px] sm:text-[10px] font-extrabold tracking-wide shadow-lg"
              style={{ background: "linear-gradient(120deg, #059669, #0d9488)" }}
            >
              ⚡ Most Popular
            </span>
          </div>
        )}

        {/* Icon */}
        <div
          className={`
            w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-3 sm:mb-4
            ${isSelected
              ? "bg-white/20 text-white"
              : featured
                ? "bg-gradient-to-br from-green-600 to-teal-600 text-white"
                : "bg-green-50 text-green-600"
            }
          `}
        >
          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isSelected || featured ? "fill-white" : ""}`} />
        </div>

        {/* Name + tagline */}
        <h3
          className={`text-base sm:text-lg font-extrabold mb-0.5 leading-tight ${isSelected ? "text-white" : "text-gray-900"}`}
        >
          {name}
        </h3>
        <p className={`text-[10px] sm:text-xs mb-3 sm:mb-4 ${isSelected ? "text-teal-100" : "text-gray-400"}`}>
          {tagline}
        </p>

        {/* Price */}
        <div className="mb-1">
          {isFree ? (
            <span className={`text-3xl sm:text-4xl font-extrabold ${isSelected ? "text-white" : "text-gray-900"}`}>
              Free
            </span>
          ) : (
            <div className="flex items-end gap-1 flex-wrap">
              <span className={`text-sm font-medium ${isSelected ? "text-teal-100" : "text-gray-400"}`}>₹</span>
              <span
                className={`text-3xl sm:text-4xl font-extrabold leading-none ${isSelected ? "text-white" : "text-gray-900"}`}
              >
                {price.toLocaleString()}
              </span>
              <span className={`text-[10px] sm:text-xs mb-0.5 sm:mb-1 ${isSelected ? "text-teal-100" : "text-gray-400"}`}>
                /mo
              </span>
            </div>
          )}
        </div>

        {/* Billing note */}
        {!isFree && billingCycle === "annually" && discountPercent > 0 && (
          <p className={`text-[8px] sm:text-[10px] font-medium mb-2 ${isSelected ? "text-teal-100" : "text-green-600"}`}>
            Save {discountPercent}% – billed annually
          </p>
        )}
        {!isFree && billingCycle === "monthly" && (
          <p className={`text-[8px] sm:text-[10px] mb-2 ${isSelected ? "text-teal-100" : "text-gray-400"}`}>
            Month‑to‑month billing
          </p>
        )}

        <p className={`text-[8px] sm:text-[10px] mb-4 sm:mb-5 leading-snug ${isSelected ? "text-teal-100" : "text-gray-300"}`}>
          + WhatsApp Cloud Messaging Charges
        </p>

        {/* CTA Button */}
        <a
          href="#"
          onClick={(e) => e.stopPropagation()}
          className={`
            block text-center py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all mb-4 sm:mb-5
            ${isSelected
              ? "bg-white text-green-700 hover:bg-gray-100 shadow-md"
              : featured
                ? "bg-gradient-to-r from-green-600 to-teal-600 text-white hover:from-green-700 hover:to-teal-700 shadow-md hover:shadow-lg"
                : "bg-gray-50 border border-gray-200 text-gray-700 hover:border-green-300 hover:bg-green-50"
            }
          `}
        >
          {cta}
        </a>

        {/* Divider */}
        <div className={`border-t mb-3 sm:mb-4 ${isSelected ? "border-teal-500" : "border-gray-100"}`} />

        {/* Features list */}
        <ul className="space-y-2 sm:space-y-2.5 flex-1">
          {features.map((feature, idx) => (
            <li key={idx} className={`flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs ${isSelected ? "text-teal-50" : "text-gray-500"}`}>
              <Check className={`w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0 mt-0.5 ${isSelected ? "text-white" : "text-green-600"}`} />
              <span className="leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Main Pricing Component ──────────────────────────────────────────────────

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<number>(1);

  return (
    <section
      id="pricing"
      className="relative py-8 lg:py-16 overflow-hidden"
      style={{ background: "#f0fdf4" }}
    >
      <DotGrid />

      {/* Soft radial overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(240,253,244,0.62), rgba(240,253,244,0.04))",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 space-y-2 sm:space-y-3">
          <div
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-green-200
                       text-[10px] sm:text-[11px] font-medium text-green-700 tracking-wide"
            style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(4px)" }}
          >
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-600 fill-green-600" />
            Simple pricing
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.2] sm:leading-[1.08]">
            Plans that{" "}
            <span className="bg-gradient-to-r from-green-600 via-teal-500 to-green-600 bg-clip-text text-transparent">
              scale with you
            </span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm lg:text-base max-w-xl mx-auto px-4">
            Choose the plan that fits your business. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12">
          <div
            className="inline-flex p-1 rounded-xl sm:rounded-2xl border border-green-200"
            style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(4px)" }}
          >
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`
                px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm lg:text-base font-medium transition-all whitespace-nowrap
                ${billingCycle === "monthly"
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
                }
              `}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`
                px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm lg:text-base font-medium transition-all whitespace-nowrap
                ${billingCycle === "annually"
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
                }
              `}
            >
              Annually
              <span className="hidden sm:inline ml-1 sm:ml-1.5 text-[8px] sm:text-[10px] font-semibold text-green-600">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-5 items-stretch">
          {PLANS.map((plan, idx) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              isSelected={selectedPlan === idx}
              billingCycle={billingCycle}
              onSelect={() => setSelectedPlan(idx)}
            />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-500 text-xs sm:text-sm mt-8 sm:mt-10">
          Have questions about our pricing?{" "}
          <a href="#contact" className="text-green-600 hover:underline font-medium transition-colors">
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}