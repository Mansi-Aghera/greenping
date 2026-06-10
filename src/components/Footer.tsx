"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import logo from "../assests/logo.png";
import { NAV_LINKS } from "../constants/navigation";
import Container from "../components/ui/Container";

const contactInfo = [
  {
    icon: Phone,
    label: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "hello@greenping.com",
    href: "mailto:hello@greenping.com",
  },
  {
    icon: MapPin,
    label: "Ahmedabad, Gujarat, India",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
    label: "LinkedIn",
  },
];

const importantLinks = [
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Terms & Conditions",
    href: "#",
  },
  {
    label: "Support",
    href: "#",
  },
  {
    label: "FAQ",
    href: "#",
  },
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <Container className="relative pt-16 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link href="/" className="inline-flex">
              <Image
                src={logo}
                alt="GreenPing"
                className="h-auto w-[170px] object-contain"
                priority
              />
            </Link>

            <p className="max-w-sm leading-7 text-muted-foreground">
              Transform your customer communication with {"GreenPing's"}
              intelligent messaging solutions designed for modern businesses.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="
                      flex h-11 w-11 items-center justify-center rounded-xl
                      border border-border bg-white
                      text-muted-foreground
                      shadow-sm
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-primary/30
                      hover:bg-primary
                      hover:text-white
                      hover:shadow-lg
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Quick Links
            </h3>

            <div className="space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    group flex items-center gap-2 text-muted-foreground
                    transition-all duration-300
                    hover:translate-x-1
                    hover:text-primary
                  "
                >
                  <ArrowUpRight
                    className="
                      h-4 w-4
                      transition-transform duration-300
                      group-hover:rotate-45
                    "
                  />

                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Contact Us
            </h3>

            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                      group flex items-start gap-4
                    "
                  >
                    <div
                      className="
                        flex h-11 w-11 shrink-0 items-center justify-center
                        rounded-xl bg-primary/10 text-primary
                        transition-all duration-300
                        group-hover:bg-primary
                        group-hover:text-white
                      "
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span
                      className="
                        text-muted-foreground
                        transition-colors duration-300
                        group-hover:text-foreground
                      "
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Important Links
            </h3>

            <div className="space-y-4">
              {importantLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    group flex items-center gap-2
                    text-muted-foreground
                    transition-all duration-300
                    hover:translate-x-1
                    hover:text-primary
                  "
                >
                  <ArrowUpRight
                    className="
                      h-4 w-4
                      transition-transform duration-300
                      group-hover:rotate-45
                    "
                  />

                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div
          className="
            mt-14 flex flex-col items-center justify-between gap-4
            border-t border-border pt-8
            text-center md:flex-row md:text-left
          "
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GreenPing. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Made with

            <Heart
              className="h-4 w-4 fill-red-500 text-red-500"
            />

            in India
          </div>
        </div>
      </Container>
    </footer>
  );
}