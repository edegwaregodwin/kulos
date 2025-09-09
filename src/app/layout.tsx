import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type React from "react";
import { Suspense } from "react";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Kulos - Smart Ring",
  description:
    "Sleek, secure smart ring for payments, health tracking, and connectivity",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-black text-white`}
      >
        <Suspense fallback={null}>
          <Providers>{children}</Providers>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
