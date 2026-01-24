"use client";

import React from "react";

export default function PlatformStats() {
    const stats = [
        { label: "Credentials Minted", value: "1,240+", color: "text-orange-500" },
        { label: "Active Builders", value: "850+", color: "text-blue-500" },
        { label: "Total Staked", value: "450K STX", color: "text-purple-500" },
        { label: "Network", value: "Mainnet", color: "text-green-500" },
    ];

    return (
        <div className="grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center backdrop-blur-sm transition-transform hover:scale-105"
                >
                    <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                    <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                        {stat.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
