'use client';

import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import "./globals.css";
import { pageVariants } from "@/lib/animations";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>Elias - Portfolio</title>
        <meta name="description" content="Portfolio website of Elias - Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${firaCode.variable} antialiased overflow-x-hidden`}
        style={{ fontFamily: 'Fira Code, monospace' }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            className="min-h-screen"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
