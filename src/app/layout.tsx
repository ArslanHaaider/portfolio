import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elias - Portfolio",
  description: "Portfolio website of Elias - Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased`}
        style={{ fontFamily: 'Fira Code, monospace' }}
      >
        <div className="mx-auto w-[90vw] max-w-[1320px] px-4 md:px-6">
          {children}
        </div>
      </body>
    </html>
  );
}
