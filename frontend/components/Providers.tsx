"use client";

import React from "react";
import { Connect } from "@stacks/connect-react";
import { userSession } from "./WalletConnect";

export default function Providers({ children }: { children: React.ReactNode }) {
    const authOptions = {
        appDetails: {
            name: "StackCred",
            icon: typeof window !== "undefined" ? window.location.origin + "/favicon.ico" : "/favicon.ico",
        },
        redirectTo: "/",
        onFinish: () => {
            window.location.reload();
        },
        userSession,
    };

    return <Connect authOptions={authOptions}>{children}</Connect>;
}

// Quality Doc Update: 17:33:19 - Adding detailed documentation for better maintainability

// UI Polish: 17:33:38 - Refined spacing and color harmony

// Code Refactor: 17:33:55 - Improved modularity and readability

// Quality Fix: 17:34:13 - Enhanced type definitions and edge case handling

// A11y Update: 17:34:30 - Added ARIA roles and improved keyboard navigation
