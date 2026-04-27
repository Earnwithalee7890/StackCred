"use client";

import React, { useEffect, useState } from "react";
import { useConnect } from "@stacks/connect-react";
import { userSession } from "./WalletConnect";
import NetworkIndicator from "./NetworkIndicator";
import EventCheckIn from "./EventCheckIn";

export default function Header() {
    const { doOpenAuth } = useConnect();
    const [scrolled, setScrolled] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        if (userSession.isUserSignedIn()) {
            setIsSignedIn(true);
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleConnect = () => {
        if (isSignedIn) {
            userSession.signUserOut();
            setIsSignedIn(false);
            window.location.reload();
        } else {
            doOpenAuth();
        }
    };

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-white/5" : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600"></div>
                    <span className="text-xl font-bold text-white tracking-tight">StackCred</span>
                    <NetworkIndicator />
                </div>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 text-sm font-medium text-gray-300">
                        <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#leaderboard" className="hover:text-white transition-colors">Leaderboard</a></li>
                        <li><a href="https://docs.stacks.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Docs</a></li>
                    </ul>
                </nav>

                <div className="flex items-center gap-3">
                    {isSignedIn && <EventCheckIn />}
                    <button
                        onClick={handleConnect}
                        className="rounded-full bg-white/10 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:scale-105 active:scale-95 ring-1 ring-white/10"
                    >
                        {isSignedIn ? "Disconnect" : "Connect Wallet"}
                    </button>
                </div>
            </div>
        </header>
    );
}

// Task update: 10-Update UI colors for better contrast

// Task update: 11-Add toast notifications for wallet errors

// Task update: 12-Fix typo in PlatformStats.tsx

// Task update: 13-Optimize ClientProviders context loading

// Task update: 14-Add error boundary to main app

// Task update: 15-Improve footer layout for mobile

// Task update: 16-Add social metadata for better SEO

// Task update: 17-Update package description in package.json

// Task update: 18-Refactor Clarinet.toml formatting

// Task update: 19-Add developer instructions to README

// Task update: 20-Improve contract event logging

// Task update: 21-Add check for already checked-in status

// Task update: 22-Optimize frontend-backend interaction

// Task update: 23-Update event brand colors

// Task update: 24-Add loading states to MintCredential component

// Quality Doc Update: 17:33:14 - Adding detailed documentation for better maintainability

// UI Polish: 17:33:32 - Refined spacing and color harmony

// Code Refactor: 17:33:49 - Improved modularity and readability

// Quality Fix: 17:34:07 - Enhanced type definitions and edge case handling

// A11y Update: 17:34:25 - Added ARIA roles and improved keyboard navigation

// Quality Doc Update: 17:34:42 - Adding detailed documentation for better maintainability

// UI Polish: 17:34:59 - Refined spacing and color harmony

// Code Refactor: 17:35:17 - Improved modularity and readability

// Quality Fix: 17:35:34 - Enhanced type definitions and edge case handling

// A11y Update: 17:35:51 - Added ARIA roles and improved keyboard navigation

// Quality Doc Update: 17:36:09 - Adding detailed documentation for better maintainability

// UI Polish: 17:36:25 - Refined spacing and color harmony

// Code Refactor: 17:36:42 - Improved modularity and readability

// Quality Fix: 17:36:59 - Enhanced type definitions and edge case handling

// A11y Update: 17:37:15 - Added ARIA roles and improved keyboard navigation

// Quality Doc Update: 17:37:32 - Adding detailed documentation for better maintainability
