"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import logo from "../assests/logo.png";
import { NAV_LINKS } from "../constants/navigation";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      let current = "/";
      for (const link of NAV_LINKS) {
        if (link.href === "/") {
          if (window.scrollY < 300) current = "/";
          continue;
        }
        
        const id = link.href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold to detect section near top
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = link.href;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
      <Container >
        <nav className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-6 lg:h-20 lg:gap-10">

          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
          >
            <Image
              src={logo}
              alt="GreenPing Solutions"
              priority
              className="h-auto w-[140px] object-contain sm:w-[170px] lg:w-[190px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden justify-center lg:flex">
            <div className="flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`
                    relative
                    text-base
                    font-medium
                    transition-colors
                    duration-300
                    hover:text-primary
                    after:absolute
                    after:-bottom-1
                    after:left-0
                    after:h-0.5
                    after:bg-primary
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                    ${
                      activeSection === link.href
                        ? "text-primary after:w-full"
                        : "text-foreground after:w-0"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden items-center justify-end gap-3 lg:flex">
            <Link href="/register">
              <Button
                variant="outline"
                size="navbar"
              >
                Register
              </Button>
            </Link>

            <Link href="/login">
              <Button size="navbar">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              ml-auto
              rounded-xl
              p-2
              text-foreground
              transition-colors
              hover:bg-card
              lg:hidden
            "
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="size-7" />
            ) : (
              <Menu className="size-7" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border bg-white lg:hidden"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-6">

                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      text-lg
                      font-medium
                      transition-colors
                      hover:text-primary
                      ${
                        activeSection === link.href
                          ? "text-primary"
                          : "text-foreground"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="flex flex-col gap-3 pt-2">
                  <Link href="/register" className="w-full" onClick={() => setIsOpen(false)}>
                    <Button
                      variant="outline"
                      fullWidth
                    >
                      Register
                    </Button>
                  </Link>

                  <Link href="/login" className="w-full" onClick={() => setIsOpen(false)}>
                    <Button fullWidth>
                      Login
                    </Button>
                  </Link>
                </div>

              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}