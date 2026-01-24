"use client";

import React from "react";

export default function PoweredBy() {
    return (
        <div className="flex items-center gap-2 rounded-full border border-white/5 bg-black/20 px-4 py-2 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/10 cursor-help group">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider group-hover:text-gray-300">Powered by</span>
            <div className="flex items-center gap-1.5">
                <div className="h-4 w-4 rounded-sm bg-purple-600"></div>
                <span className="text-sm font-bold text-white tracking-tight">Stacks</span>
            </div>
        </div>
    );
}
