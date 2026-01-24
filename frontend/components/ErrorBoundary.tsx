"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export default function ErrorBoundaryWrapper({ children }: Props) {
    return <ErrorBoundary>{children}</ErrorBoundary>;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex h-screen w-full flex-col items-center justify-center bg-black p-4 text-center">
                    <div className="mb-6 rounded-2xl bg-red-500/10 p-8 border border-red-500/20">
                        <h1 className="mb-4 text-2xl font-bold text-red-500">Something went wrong</h1>
                        <p className="mb-6 text-gray-300">
                            {this.state.error?.message || "An unexpected error occurred."}
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="rounded-lg bg-red-600 px-6 py-2 text-white hover:bg-red-700 transition-colors"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
