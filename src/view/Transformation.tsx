// components/sections/ComparisonSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  AlertCircle,
  Clock,
  Users,
  TrendingDown,
  TrendingUp,
  Zap,
  Shield,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

const beforePoints = [
  {
    icon: Clock,
    title: "Slow Response Times",
    desc: "Customers wait hours or days for replies",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: AlertCircle,
    title: "Missed Opportunities",
    desc: "No automated follow-ups, lost leads",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Users,
    title: "Scattered Communication",
    desc: "Multiple platforms, no central dashboard",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: TrendingDown,
    title: "Low Engagement",
    desc: "Broadcast messages often ignored",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
];

const afterPoints = [
  {
    icon: Zap,
    title: "Instant Replies",
    desc: "AI-powered auto‑responses within seconds",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: TrendingUp,
    title: "2x More Conversions",
    desc: "Automated funnels & campaign tracking",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: Shield,
    title: "Unified Dashboard",
    desc: "All channels, analytics, and contacts in one place",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    desc: "Real‑time insights & engagement metrics",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

export default function ComparisonSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const controlsBefore = useAnimation();
  const controlsAfter = useAnimation();
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setTimeout(() => setHasAnimated(true), 0);
      controlsBefore.start("visible");
      controlsAfter.start("visible");
    }
  }, [isInView, controlsBefore, controlsAfter, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-8 md:py-16 overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium mb-4"
          >
            <ArrowRight className="w-3.5 h-3.5 text-green-600" />
            Before vs After
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Without{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Greenping
            </span>{" "}
            vs{" "}
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              With Greenping
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto mt-4"
          >
            See the transformation – from manual chaos to automated excellence
          </motion.p>
        </div>

        {/* Two-column comparison */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Before Column */}
          <motion.div
            initial="hidden"
            animate={controlsBefore}
            variants={containerVariants}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-red-100 overflow-hidden h-full">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Before Greenping
                </h3>
                <p className="text-red-100 text-sm mt-1">
                  The old way – fragmented, slow, and inefficient
                </p>
              </div>
              <div className="p-6 space-y-4">
                {beforePoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-red-50 transition-colors group"
                  >
                    <div
                      className={`${point.bg} p-2 rounded-lg ${point.color} group-hover:scale-110 transition-transform`}
                    >
                      <point.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{point.title}</h4>
                      <p className="text-sm text-gray-500">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* After Column */}
          <motion.div
            initial="hidden"
            animate={controlsAfter}
            variants={containerVariants}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-green-100 overflow-hidden h-full">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  After Greenping
                </h3>
                <p className="text-green-100 text-sm mt-1">
                  The future – unified, automated, and scalable
                </p>
              </div>
              <div className="p-6 space-y-4">
                {afterPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors group"
                  >
                    <div
                      className={`${point.bg} p-2 rounded-lg ${point.color} group-hover:scale-110 transition-transform`}
                    >
                      <point.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{point.title}</h4>
                      <p className="text-sm text-gray-500">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Central floating arrow – only visible on md+ screens */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center border-2 border-green-200">
                <div className="relative w-6 h-6">
                  <ArrowRight className="absolute inset-0 text-green-600 opacity-75" />
                  <ArrowRight className="absolute inset-0 text-green-600" />
                </div>
              </div>
              <div className="absolute -inset-2 rounded-full bg-green-300 opacity-30 blur-md animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}