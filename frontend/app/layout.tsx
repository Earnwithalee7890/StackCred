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
  other: {
    "talentapp:project_verification": "b95f6765cff4b1f08ee5abb6094cf39e6893b0fe20a6bd82589af05bc5383dd25179259621f0e98aec1a089438a21e6731cfb9e58b322a72aacdbc1f6f4bb70d",
  },
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
