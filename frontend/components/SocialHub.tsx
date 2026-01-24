"use client";

import React from "react";

export default function SocialHub() {
    const socials = [
        { name: "Twitter", url: "https://twitter.com/stacks", icon: "🐦", color: "hover:text-blue-400" },
        { name: "Discord", url: "https://discord.gg/stacks", icon: "💬", color: "hover:text-indigo-400" },
        { name: "GitHub", url: "https://github.com/stacks-network", icon: "🐙", color: "hover:text-white" },
        { name: "Documentation", url: "https://docs.stacks.co", icon: "📚", color: "hover:text-orange-400" },
    ];

    return (
        <div className="w-full max-w-3xl py-8">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
                    Join the Community
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 text-gray-400 transition-colors ${social.color} group`}
                        >
                            <span className="text-xl transition-transform group-hover:scale-110">{social.icon}</span>
                            <span className="text-sm font-medium">{social.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
