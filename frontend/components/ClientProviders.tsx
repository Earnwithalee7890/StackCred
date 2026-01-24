"use client";

import dynamic from "next/dynamic";
import React from "react";

import { ToastProvider } from "./Toast";

const Providers = dynamic(() => import("./Providers"), { ssr: false });

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <Providers>
            <ToastProvider>{children}</ToastProvider>
        </Providers>
    );
}
