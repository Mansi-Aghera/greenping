import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "GreenPing Solutions",
    template: "%s | GreenPing Solutions",
  },
  description:
    "Official WhatsApp Business Solution for marketing automation, customer engagement, and business growth.",

  keywords: [
    "WhatsApp Marketing",
    "WhatsApp Business API",
    "GreenPing",
    "Marketing Automation",
    "WhatsApp Solutions",
  ],

  authors: [
    {
      name: "GreenPing Solutions",
    },
  ],

  creator: "GreenPing Solutions",

  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <div className="flex min-h-screen flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}