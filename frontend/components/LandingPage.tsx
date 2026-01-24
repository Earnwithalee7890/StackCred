import Link from "next/link";
import dynamic from "next/dynamic";
import { BadgeCheck, Zap, Trophy, ArrowRight, Github, LayoutDashboard } from "lucide-react";
import Leaderboard from "./Leaderboard";
import SocialHub from "./SocialHub";

const WalletConnect = dynamic(() => import("./WalletConnect"), { ssr: false });
const GithubScorer = dynamic(() => import("./GithubScorer"), { ssr: false });

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 overflow-hidden relative">
            import Header from "./Header";

            // ... inside component ...
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-orange-600/20 blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />

            {/* Navigation */}
            <Header />

            {/* Hero Section */}

            {/* Hero Section */}
            <main className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-12">
                <div className="flex max-w-5xl flex-col items-center text-center z-10">

                    <div className="animate-in fade-in slide-in-from-top-8 duration-700 mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-400 shadow-[0_0_20px_-5px_rgba(249,115,22,0.3)] backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        Live for Talent App Challenge
                    </div>

                    <h1 className="animate-in fade-in zoom-in-95 duration-1000 delay-100 mb-8 text-6xl font-extrabold tracking-tight sm:text-8xl leading-tight">
                        Verified Credentials on <br />
                        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                            Bitcoin & Stacks
                        </span>
                    </h1>

                    <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 mb-12 max-w-2xl text-lg text-gray-400 sm:text-xl leading-relaxed">
                        StackCred allows builders to mint on-chain proof of their achievements.
                        Turn your GitHub commits and hackathon wins into permanent <span className="text-white font-semibold">SIP-009 NFTs</span>.
                    </p>

                    import PlatformStats from "./PlatformStats";

                    // ... inside component ...
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 flex w-full justify-center mb-12">
                        <GithubScorer />
                    </div>

                    <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500 mb-20 w-full flex justify-center">
                        <PlatformStats />
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-3 z-10">
                    {[
                        {
                            title: "On-Chain Identity",
                            desc: "Your skills stored permanently on Bitcoin-secured contracts.",
                            icon: <BadgeCheck className="h-8 w-8 text-orange-500" />,
                            gradient: "from-orange-500/10 to-transparent"
                        },
                        {
                            title: "Automated Rewards",
                            desc: "Get badges automatically based on your code contributions.",
                            icon: <Zap className="h-8 w-8 text-yellow-500" />,
                            gradient: "from-yellow-500/10 to-transparent"
                        },
                        {
                            title: "Talent App Ready",
                            desc: "Fully integrated with Stacks Builder Rewards ecosystem.",
                            icon: <Trophy className="h-8 w-8 text-purple-500" />,
                            gradient: "from-purple-500/10 to-transparent"
                        },
                    ].map((feature, i) => (
                        <div key={i} className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a] p-8 transition-all duration-300 hover:border-white/10 hover:translate-y-[-4px] hover:shadow-2xl`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            <div className="relative z-10">
                                <div className="mb-6 inline-flex rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 group-hover:bg-white/10 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{feature.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 w-full flex justify-center px-4 mb-24 flex-col items-center gap-12">
                    <Leaderboard />
                    <SocialHub />
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full border-t border-white/5 bg-[#050505] py-8 text-center text-sm text-gray-600">
                <p>Built for the Stacks Talent App Challenge</p>
            </footer>
        </div>
    );
}
