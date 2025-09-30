'use client';

import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import "./globals.css";
import { pageVariants } from "@/lib/animations";
import LetterGlitch from "@/components/LetterGlitch";
import BlobCursor from "@/components/BlobCursor";

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
        className={`${firaCode.variable} antialiased overflow-x-hidden relative`}
        style={{ fontFamily: 'Fira Code, monospace' }}
      >
        {/* Background LetterGlitch Effect */}
        <div className="fixed inset-0 w-full h-full">
          <LetterGlitch 
            glitchColors={['#ABB2BF', '#C778DD', '#6B7280']}
            glitchSpeed={150}
            opacity={0.2}
            outerVignette={true}
            centerVignette={true}
            smooth={true}
          />
        </div>

        {/* BlobCursor Effect */}
        <BlobCursor 
          fillColor="#C778DD"
          innerColor="rgba(171, 178, 191, 0.8)"
          shadowColor="rgba(199, 120, 221, 0.3)"
          trailCount={3}
          sizes={[40, 80, 60]}
          innerSizes={[15, 25, 20]}
          opacities={[0.6, 0.4, 0.3]}
          shadowBlur={8}
          shadowOffsetX={5}
          shadowOffsetY={5}
          zIndex={9999}
          useFilter={true}
          filterStdDeviation={20}
        />
        
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            className="min-h-screen relative z-10"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
