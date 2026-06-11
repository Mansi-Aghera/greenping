"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircleMore,
  Clock,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: " Info@greenpingsolutions.com",
    href: "mailto: Info@greenpingsolutions.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: " +91 99980 16391",
    href: "tel:+919876543210",
  },
  {
    icon: MessageCircleMore,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/919876543210",
  },
  
];

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-8 lg:py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/6 blur-[130px]" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary-light/5 blur-[120px]" />

      <Container className="relative z-10">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            <Send size={14} />
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            {"Let's Start Your"}
            <span className="block bg-gradient-to-r from-primary-dark via-primary to-primary-light bg-clip-text text-transparent">
              Growth Journey
            </span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Reach out to our team and get a personalised demo within 24 hours.
          </p>
        </motion.div>

        {/* ── Two-col layout ── */}
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">

          {/* ── Left: contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col justify-between gap-8"
          >
            <div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Talk to us directly</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team is available Monday to Saturday, 9 AM – 7 PM IST. For urgent queries, WhatsApp us anytime.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactInfo.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-[var(--shadow-primary)]"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="font-semibold text-foreground">{c.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-border bg-white p-8 shadow-sm md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 size={32} className="text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Our team will get back to you within 24 hours. Check your email for confirmation.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* name + email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Rahul Sharma"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="rahul@company.com"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  {/* phone + company */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder=" +91 99980 16391"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Company
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  {/* message */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your business and what you'd like to automate..."
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-primary)] transition-all duration-300 disabled:opacity-70"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {loading ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-muted-foreground">
                    We typically respond within 2–4 business hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
