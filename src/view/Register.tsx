"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  Phone,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Users,
} from "lucide-react";
import logo from "@/src/assests/logo.png";

const benefits = [
  "Free 14-day trial, no credit card needed",
  "Connect WhatsApp in under 5 minutes",
  "2000+ integrations ready to use",
  "24/7 dedicated onboarding support",
];

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1 = form, 2 = success
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setStep(2);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-muted/30 p-4 sm:p-8">
      <div className="flex w-full max-w-[1050px] overflow-hidden rounded-[2rem] bg-background shadow-2xl ring-1 ring-border/50">
        {/* ════════ LEFT — Branding Panel ════════ */}
        <div className="relative hidden w-[45%] overflow-hidden lg:flex lg:flex-col lg:justify-between">
        {/* bg gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-primary)" }}
        />

        {/* subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* glow orbs */}
        <motion.div
          className="absolute left-[-100px] top-[-80px] h-[400px] w-[400px] rounded-full bg-white/10 blur-[100px]"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-60px] right-[-80px] h-[350px] w-[350px] rounded-full bg-white/10 blur-[80px]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col justify-between p-10 xl:p-14">
          {/* logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <Image src={logo} alt="GreenPing" width={28} height={28} />
            </div>
            <span className="text-xl font-bold text-white">GreenPing</span>
          </Link>

          {/* tagline */}
          <div className="my-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-md text-4xl font-extrabold leading-tight text-white xl:text-5xl"
            >
              Start Growing
              <span className="block text-white/90">With GreenPing</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-5 max-w-sm text-base leading-relaxed text-white/70"
            >
              Join 5000+ businesses automating their WhatsApp marketing and
              customer engagement.
            </motion.p>

            {/* benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 space-y-3"
            >
              {benefits.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={16} className="flex-shrink-0 text-white/80" />
                  <span className="text-sm text-white/70">{b}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* social proof */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm"
                  >
                    <Users size={14} className="text-white/80" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">5,000+</p>
                <p className="text-xs text-white/50">businesses trust us</p>
              </div>
            </motion.div>
          </div>

          {/* bottom trust */}
          <div className="flex items-center gap-2 text-sm text-white/50">
            <ShieldCheck size={14} />
            Official Meta Business Partner · GDPR Compliant
          </div>
        </div>
      </div>

        {/* ════════ RIGHT — Register Form ════════ */}
        <div className="relative flex w-full items-center justify-center px-6 py-10 lg:w-[55%] xl:px-12">
        {/* light bg */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-full max-w-[480px]"
        >
          {/* mobile logo */}
          <div className="mb-6 flex items-center gap-3 lg:hidden">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Image src={logo} alt="GreenPing" width={24} height={24} />
              </div>
              <span className="text-lg font-bold text-foreground">GreenPing</span>
            </Link>
          </div>

          {step === 1 ? (
            <>
              {/* heading */}
              <h1 className="text-3xl font-extrabold text-foreground">
                Create Account
              </h1>
              <p className="mt-2 text-muted-foreground">
                Get started with your free 14-day trial.
              </p>

              {/* google signup */}
              <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-white py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:border-primary/25 hover:shadow-sm">
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
                  <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
                  <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                  <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                </svg>
                Sign up with Google
              </button>

              {/* divider */}
              <div className="my-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">or sign up with email</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* name + phone */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <User size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Rahul Sharma"
                        className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>

                {/* email */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="rahul@company.com"
                      className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* company */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* passwords */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Password <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <Lock size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                      <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={handleChange}
                        required
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 transition-colors hover:text-foreground"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Confirm Password <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <Lock size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                      <input
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-border bg-white py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>

                {/* terms */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-border accent-primary"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight">
                    I agree to the{" "}
                    <Link href="#" className="font-medium text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="font-medium text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white shadow-[var(--shadow-primary)] transition-all duration-300 disabled:opacity-70"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {loading ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Creating account…
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight size={16} />
                    </>
                  )}
                </motion.button>
              </form>

              {/* login link */}
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-primary hover:underline">
                  Sign in →
                </Link>
              </p>
            </>
          ) : (
            /* ── Success State ── */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
              >
                <Sparkles size={36} className="text-primary" />
              </motion.div>
              <h2 className="text-2xl font-extrabold text-foreground">
                Account Created! 🎉
              </h2>
              <p className="mt-3 max-w-sm text-muted-foreground">
                Welcome aboard! Check your email for a verification link, then
                sign in to start automating your WhatsApp marketing.
              </p>
              <Link
                href="/login"
                className="mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold text-white shadow-[var(--shadow-primary)]"
                style={{ background: "var(--gradient-primary)" }}
              >
                Go to Sign In
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          )}
        </motion.div>
        </div>
      </div>
    </div>
  );
}
