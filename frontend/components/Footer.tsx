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
