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
