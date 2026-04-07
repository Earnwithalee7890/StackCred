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
