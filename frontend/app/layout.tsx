import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "StackCred | Decentralized Reputation on Bitcoin",
  description: "Mint verified credentials for your skills and contributions on the Stacks blockchain. Secured by Bitcoin.",
  keywords: ["Stacks", "Bitcoin", "Learn to Earn", "Credentials", "Web3", "Crypto"],
  openGraph: {
    title: "StackCred - Verify Your Skills",
    description: "Decentralized reputation platform built on Stacks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StackCred",
    description: "Mint verified credentials on Stacks.",
  },
};

// ... imports ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
