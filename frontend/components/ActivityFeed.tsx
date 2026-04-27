"use client";

import React, { useEffect, useState } from "react";
import { Activity, User, Clock } from "lucide-react";

interface ActivityItem {
    id: string;
    user: string;
    action: string;
    timestamp: string;
}

/**
 * ActivityFeed Component
 * Displays a real-time list of recent on-chain activities.
 * 
 * @returns {JSX.Element} The rendered activity feed.
 */
export default function ActivityFeed() {
    const [activities, setActivities] = useState<ActivityItem[]>([]);

    useEffect(() => {
        // Mock data for initial demonstration
        setActivities([
            { id: "1", user: "ST1...3R4", action: "Checked in for Stacks April Event", timestamp: "2 mins ago" },
            { id: "2", user: "ST2...9X1", action: "Minted Builder Credential", timestamp: "15 mins ago" },
            { id: "3", user: "ST3...4Z5", action: "Updated GitHub Scorer", timestamp: "1 hour ago" },
            { id: "4", user: "ST4...1A2", action: "Claimed Hackathon Badge", timestamp: "3 hours ago" },
        ]);
    }, []);

    return (
        <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-500/20 rounded-xl">
                    <Activity className="h-5 w-5 text-orange-500" />
                </div>
                <h2 className="text-xl font-bold">Recent Activity</h2>
            </div>

            <div className="space-y-4">
                {activities.map((item) => (
                    <div key={item.id} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                        <div className="p-2 rounded-full bg-indigo-500/10 text-indigo-400">
                            <User className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-mono text-gray-400 group-hover:text-white transition-colors">{item.user}</span>
                                <div className="flex items-center gap-1 text-[10px] text-gray-500 uppercase tracking-wider">
                                    <Clock className="h-3 w-3" />
                                    {item.timestamp}
                                </div>
                            </div>
                            <p className="text-sm text-gray-200">{item.action}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-6 py-3 text-sm text-gray-400 hover:text-white transition-colors border-t border-white/10 pt-4">
                View All Transactions
            </button>
        </div>
    );
}
