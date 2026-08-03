import React from "react";
import {
  ArrowRight,
  UserRound,
  Target,
  Cpu,
  // Brand Icons (used as generic marks for real client/project names, not their trademarks)
  Hexagon,
  Triangle,
  Command,
} from "lucide-react";

// --- REAL CLIENTS / PROJECTS ---
// Generic icons stand in for logos we don't have on file — names are real.
const CLIENTS = [
  { name: "Akuapem Community Bank", icon: Hexagon },
  { name: "Mamfe Apostolic School Complex", icon: Triangle },
  { name: "CBT StyleHub", icon: Command },
];

// --- SUB-COMPONENTS ---
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-white sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-sky-200/60 font-medium sm:text-xs">{label}</span>
  </div>
);

// --- MAIN COMPONENT ---
export default function HeroSection() {
  return (
    <div className="relative w-full text-white overflow-hidden font-sans">
      {/*
        SCOPED ANIMATIONS
      */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Light-play on the water — no stock photo, nothing borrowed */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(90% 60% at 15% 0%, rgba(125,211,252,.18), transparent 60%), radial-gradient(70% 50% at 90% 20%, rgba(56,189,248,.14), transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">

          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">

            {/* Badge */}
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/20 bg-sky-100/10 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-sky-100/20">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-sky-100 flex items-center gap-2">
                  Networking · Infrastructure · Software
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1
              className="animate-fade-in delay-200 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.95]"
            >
              Networks That<br />
              <span className="bg-gradient-to-br from-white via-sky-100 to-cyan-300 bg-clip-text text-transparent">
                Hold
              </span><br />
              Everything Up
            </h1>

            {/* Description */}
            <p className="animate-fade-in delay-300 max-w-xl text-lg text-sky-100/70 leading-relaxed">
              Network management and IT infrastructure first — LAN/WAN, Windows Server,
              Active Directory, and hardware kept running. Plus production web platforms
              built on the same foundation.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4">
              <a href="#work" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-sky-950 transition-all hover:scale-[1.02] hover:bg-sky-50 active:scale-[0.98]">
                View Our Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a href="/portfolio" className="group inline-flex items-center justify-center gap-2 rounded-full border border-sky-200/20 bg-sky-100/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-sky-100/20 hover:border-sky-200/40">
                <UserRound className="w-4 h-4" />
                Meet the Developer
              </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-5 space-y-6 lg:mt-12">

            {/* Stats Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-sky-200/20 bg-sky-100/10 p-8 backdrop-blur-xl shadow-2xl">
              {/* Card Glow Effect */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-sky-200/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300/15 ring-1 ring-sky-200/30">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-white">HND</div>
                    <div className="text-sm text-sky-100/70">Computer Network Management</div>
                  </div>
                </div>

                {/* Progress Bar Section */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-sky-100/70">Systems Live in Production</span>
                    <span className="text-white font-medium">100%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-sky-950/40">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-sky-200 to-cyan-400" />
                  </div>
                </div>

                <div className="h-px w-full bg-sky-200/20 mb-6" />

                {/* Mini Stats Grid */}
                <div className="flex items-stretch justify-between gap-2 text-center">
                  <div className="flex-1"><StatItem value="Multi" label="Branch Networks" /></div>
                  <div className="w-px self-stretch bg-sky-200/20" />
                  <div className="flex-1"><StatItem value="4+" label="Platforms Shipped" /></div>
                  <div className="w-px self-stretch bg-sky-200/20" />
                  <div className="flex-1"><StatItem value="Cisco" label="Certified Basics" /></div>
                </div>

                {/* Tag Pills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/20 bg-sky-100/10 px-3 py-1 text-[10px] font-medium tracking-wide text-sky-100">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    OPEN FOR WORK
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-200/20 bg-sky-100/10 px-3 py-1 text-[10px] font-medium tracking-wide text-sky-100">
                    <Cpu className="w-3 h-3 text-cyan-400" />
                    NETWORK MANAGEMENT
                  </div>
                </div>
              </div>
            </div>

            {/* Marquee Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-sky-200/20 bg-sky-100/10 py-8 backdrop-blur-xl">
              <h3 className="mb-6 px-8 text-sm font-medium text-sky-100/70">Selected Clients &amp; Projects</h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
                }}
              >
                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4">
                  {/* Tripled for a seamless loop — same real names repeating, not implying a larger client list */}
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default grayscale hover:grayscale-0"
                    >
                      <client.icon className="h-6 w-6 text-white" />
                      <span className="text-lg font-bold text-white tracking-tight">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
