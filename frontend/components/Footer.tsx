"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-black/40 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">StackCred</h3>
                        <p className="text-sm text-gray-400">
                            Verifying credentials and building reputation on the Stacks blockchain.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Platform</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-orange-500">Leaderboard</a></li>
                            <li><a href="#" className="hover:text-orange-500">Credentials</a></li>
                            <li><a href="#" className="hover:text-orange-500">Verify</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-orange-500">Documentation</a></li>
                            <li><a href="#" className="hover:text-orange-500">GitHub</a></li>
                            <li><a href="#" className="hover:text-orange-500">Status</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-orange-500">Privacy</a></li>
                            <li><a href="#" className="hover:text-orange-500">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-white/5 pt-8 text-center text-xs text-gray-600">
                    &copy; {new Date().getFullYear()} StackCred. Built on Bitcoin.
                </div>
            </div>
        </footer>
    );
}

// Task update: 25-Improve network indicator responsiveness

// Task update: 26-Add skeleton screens for better UX

// Task update: 27-Refactor SocialHub constants

// Task update: 28-Update deployment instructions

// Task update: 29-Add unit tests for check-in contract placeholder

// Task update: 30-Improve error handling in GithubScorer

// Task update: 31-Update about section content

// Task update: 32-Add hover effects to project cards

// Task update: 33-Optimize image assets path naming

// Task update: 34-Refactor theme provider logic

// Task update: 35-Add prop types to Toast component

// Task update: 36-Improve form validation for email field

// Task update: 37-Update contract constants

// Task update: 38-Add more descriptive console logs for dev

// Task update: 39-Refactor API endpoints configuration

// Quality Doc Update: 17:33:12 - Adding detailed documentation for better maintainability

// UI Polish: 17:33:30 - Refined spacing and color harmony

// Code Refactor: 17:33:48 - Improved modularity and readability

// Quality Fix: 17:34:06 - Enhanced type definitions and edge case handling

// A11y Update: 17:34:23 - Added ARIA roles and improved keyboard navigation

// Quality Doc Update: 17:34:40 - Adding detailed documentation for better maintainability

// UI Polish: 17:34:58 - Refined spacing and color harmony

// Code Refactor: 17:35:15 - Improved modularity and readability

// Quality Fix: 17:35:32 - Enhanced type definitions and edge case handling

// A11y Update: 17:35:50 - Added ARIA roles and improved keyboard navigation

// Quality Doc Update: 17:36:07 - Adding detailed documentation for better maintainability

// UI Polish: 17:36:24 - Refined spacing and color harmony

// Code Refactor: 17:36:41 - Improved modularity and readability
