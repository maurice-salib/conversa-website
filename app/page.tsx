import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollFade from "./book/ScrollFade";

export const metadata = {
  title: "Conversa — The AI That Books Listings While You Sleep",
  description:
    "100+ Australian agents. $800K+ GCI in 30 days. 8 listings in a single month. Conversa's AI calling agent works 24/7 so you don't have to.",
};

/* ─────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 w-[800px] h-[800px] bg-teal/5 rounded-full blur-[180px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/4 rounded-full blur-[160px] animate-pulse-glow delay-700" />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[400px] h-[400px] bg-teal/4 rounded-full blur-[140px] animate-pulse-glow delay-300" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#4fd1c5 1px, transparent 1px), linear-gradient(90deg, #4fd1c5 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-teal/25 bg-teal/5 text-xs sm:text-sm text-teal mb-10 animate-fade-in whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse shrink-0" />
          <span className="hidden sm:inline">Live in 14 Australian markets — <span className="text-white/70">3 sessions booked in the last hour</span></span>
          <span className="sm:hidden text-white/70">3 sessions booked today</span>
        </div>

        <h1 className="text-[2rem] leading-tight sm:text-6xl md:text-8xl font-black tracking-tighter sm:leading-[1.05] animate-fade-in-up">
          The Last Appointment
          <br />
          <span className="text-teal">Setter You'll</span>
          <br />
          Ever Need.
        </h1>

        <p className="mt-8 text-xl sm:text-2xl text-muted max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-100">
          While your competitors wake up to cold calls and rejection, your AI
          agent has already booked 3 strategy sessions — overnight.
          <br className="hidden sm:block" />
          <span className="text-white/80">
            {" "}No staff. No scripts to manage. No bad days.
          </span>
        </p>

        {/* Inline stats */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 animate-fade-in-up delay-200">
          {[
            { n: "$800K+", l: "GCI in 30 days" },
            { n: "8", l: "Listings in 30 days" },
            { n: "100+", l: "Active agents" },
            { n: "24/7", l: "Never stops calling" },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-teal tabular-nums">
                {s.n}
              </div>
              <div className="text-xs text-muted mt-1 tracking-wide uppercase">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <Link
            href="#book"
            className="w-full sm:w-auto px-10 py-4 text-lg font-bold rounded-xl bg-teal text-[#0a0a0f] hover:bg-teal-dark transition-colors animate-pulse-teal"
          >
            Book Your Free Strategy Session
          </Link>
          <Link
            href="#demo"
            className="w-full sm:w-auto px-10 py-4 text-lg font-medium rounded-xl border border-teal/20 text-teal hover:bg-teal/10 transition-colors"
          >
            Watch It In Action ↓
          </Link>
        </div>

        <p className="mt-5 text-xs text-muted/70 animate-fade-in-up delay-400">
          Free 30-min call &middot; No contracts &middot; Limited to 5 new clients per month
        </p>

        {/* Waveform */}
        <div className="mt-16 w-full overflow-hidden flex items-end justify-center gap-[3px] h-20 animate-fade-in delay-600">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="w-1 sm:w-1.5 bg-teal/20 rounded-full animate-wave shrink-0"
              style={{
                height: `${Math.random() * 60 + 10}px`,
                animationDelay: `${i * 0.055}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MARQUEE
───────────────────────────────────────────────────────────────── */
function Marquee() {
  const items = [
    "8 listings in 30 days",
    "$800K GCI in one month",
    "1–3 extra listings per month",
    "100+ agents onboarded",
    "Calls every lead type, every day",
    "AI that improves after every call",
    "Active in 14 Australian markets",
    "Free 30-min strategy session",
  ];

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
      <div className="py-5 border-y border-border overflow-hidden bg-card/30">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 text-sm text-muted shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
   THE BRUTAL TRUTH
───────────────────────────────────────────────────────────────── */
function Problem() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-fade text-center mb-16">
          <p className="text-xs font-mono text-teal uppercase tracking-[0.25em] mb-5">
            The brutal truth
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.0] sm:leading-[0.95]">
            Your database has
            <br />
            <span className="text-teal">500+ contacts.</span>
            <br />
            You&apos;ve called maybe 20.
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Not because you don&apos;t care. Because there are only so many hours in a day,
            and rejection is exhausting. Meanwhile, those contacts are listing with
            someone who followed up — probably your competitor.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              stat: "80%",
              desc: "of listings require 5+ follow-ups before converting. Most agents stop at 1.",
            },
            {
              stat: "48hrs",
              desc: "Average response time from a real estate agent. Conversa responds in seconds.",
            },
            {
              stat: "$0",
              desc: "Revenue from the leads sitting untouched in your CRM right now. Not anymore.",
            },
          ].map((c) => (
            <div
              key={c.stat}
              className="scroll-fade rounded-2xl border border-border bg-card p-8 text-center hover:border-teal/25 transition-colors"
            >
              <div className="text-5xl font-black text-teal mb-4">{c.stat}</div>
              <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   DEMO VIDEO
───────────────────────────────────────────────────────────────── */
function Demo() {
  return (
    <section id="demo" className="py-20 sm:py-24 bg-card/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-fade text-center mb-12">
          <p className="text-xs font-mono text-teal uppercase tracking-[0.25em] mb-5">
            See it live
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            Watch Conversa Book a{" "}
            <span className="text-teal">Real Listing Appointment</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            This is a real call. Real objections. Real booking.
          </p>
        </div>

        <div className="scroll-fade relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0d0d15] border border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-transparent to-teal/3" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <button className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-teal/20 border-2 border-teal/50 flex items-center justify-center hover:bg-teal/30 transition-all hover:scale-105 group shadow-[0_0_60px_rgba(79,209,197,0.15)]">
              <svg
                className="w-8 h-8 sm:w-12 sm:h-12 text-teal ml-1.5 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <p className="text-base sm:text-lg text-muted text-center px-4 max-w-md">
              &ldquo;8 Listings in 30 Days — How One Agent Transformed Their
              Pipeline With AI&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   HOW IT WORKS
───────────────────────────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Upload Your Contacts",
      desc: "Import your database, Meta leads, referrals, or any cold list. We handle the rest.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "James Calls Automatically",
      desc: "Your AI agent calls every contact with the right script — cold leads, referrals, no-shows, aged leads.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Listings Land in Your Calendar",
      desc: "Qualified Strategy Sessions drop straight into your calendar. You show up, close the deal.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-fade text-center mb-20">
          <p className="text-xs font-mono text-teal uppercase tracking-[0.25em] mb-5">
            Stupid simple
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            Set Up Once.{" "}
            <span className="text-teal">Win Every Day After.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-teal/0 via-teal/30 to-teal/0" />
          {steps.map((step) => (
            <div key={step.num} className="scroll-fade relative text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border border-border bg-card text-teal group-hover:border-teal/40 group-hover:bg-teal/5 transition-all shadow-[0_0_30px_rgba(79,209,197,0.05)]">
                {step.icon}
              </div>
              <div className="mt-2 text-xs font-mono text-teal/50">{step.num}</div>
              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 text-muted text-sm leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MEET JAMES
───────────────────────────────────────────────────────────────── */
function MeetJames() {
  return (
    <section className="py-24 sm:py-32 bg-card/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-fade">
            <p className="text-xs font-mono text-teal uppercase tracking-[0.25em] mb-5">
              Your new team member
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Meet James.
              <br />
              <span className="text-teal">He&apos;s Relentless.</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              James is your AI calling agent. He&apos;s handled over{" "}
              <span className="text-white">50,000+ objections</span>, never had
              a bad day, and gets measurably better after every single call. He
              calls your database at scale, pivots his approach for each lead
              type, and books Strategy Sessions directly into your calendar —
              while you sleep, prospect, or close other deals.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Calls 24 hours a day, 7 days a week — never stops",
                "Zero rejection fatigue. Zero motivation problems.",
                "Natural, human-like conversation that builds rapport fast",
                "Learns from every call. Auto-improves his own scripts.",
                "Books directly to your calendar without your involvement",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transcript card */}
          <div className="scroll-fade rounded-2xl border border-border bg-card p-6 sm:p-8 font-mono text-sm shadow-[0_0_80px_rgba(79,209,197,0.04)]">
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border">
              <div className="w-9 h-9 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse" />
              </div>
              <div>
                <p className="font-sans font-semibold text-white text-xs">
                  LIVE CALL TRANSCRIPT
                </p>
                <p className="font-sans text-muted text-xs">
                  James — AI Calling Agent
                </p>
              </div>
              <div className="ml-auto flex items-center gap-1.5 text-xs text-teal font-sans">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                LIVE
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-teal/60 mb-1.5 font-sans">James</p>
                <p className="text-white/85 text-xs leading-relaxed bg-teal/5 border border-teal/10 rounded-xl p-3.5">
                  &ldquo;Hey Sarah, this is James calling from Icon Media. I
                  noticed you listed your property on REA about 8 months ago —
                  I wanted to check in because the market in your area has
                  shifted significantly since then.&rdquo;
                </p>
              </div>
              <div>
                <p className="text-xs text-muted/60 mb-1.5 font-sans">
                  Prospect
                </p>
                <p className="text-white/85 text-xs leading-relaxed bg-white/3 border border-border rounded-xl p-3.5">
                  &ldquo;Oh, we decided not to sell at the time. We were getting
                  offers but they weren&apos;t at the number we needed.&rdquo;
                </p>
              </div>
              <div>
                <p className="text-xs text-teal/60 mb-1.5 font-sans">James</p>
                <p className="text-white/85 text-xs leading-relaxed bg-teal/5 border border-teal/10 rounded-xl p-3.5">
                  &ldquo;Totally makes sense — and that&apos;s exactly why
                  I&apos;m calling. Properties in your suburb have moved up 12%
                  since then. Would you be open to a 15-minute chat to see what
                  that actually means for your number?&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span className="text-xs text-teal font-sans">
                  Appointment booked — Friday 2:30pm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SCRIPT TYPES
───────────────────────────────────────────────────────────────── */
function ScriptTypes() {
  const scripts = [
    { name: "Cold Call", desc: "Pattern interrupt through REA profile research", icon: "🎯" },
    { name: "SMS Reactivation", desc: "Anchors to the text, pivots to personal relevance", icon: "💬" },
    { name: "Fresh Meta Lead", desc: "Speed validation confirms their action", icon: "⚡" },
    { name: "Aged Meta Lead", desc: "Something's changed frame gives fresh reason to re-engage", icon: "🔄" },
    { name: "Referral", desc: "Referrer name drop does 70% of the work", icon: "🤝" },
    { name: "No-Show Recovery", desc: "Zero guilt, concierge energy", icon: "📅" },
    { name: "Inbound Callback", desc: "Rewarding their intent before anything else", icon: "📞" },
    { name: "Pipeline Re-Engagement", desc: "Lead with what's new, never rehash", icon: "🔁" },
  ];

  return (
    <section id="scripts" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-fade text-center mb-16">
          <p className="text-xs font-mono text-teal uppercase tracking-[0.25em] mb-5">
            Precision-crafted
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            One AI.{" "}
            <span className="text-teal">Eight Conversation Styles.</span>
          </h2>
          <p className="mt-5 text-muted text-lg max-w-2xl mx-auto">
            Every lead type gets a completely different approach — tailored from
            the first word to the booking close.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {scripts.map((script, i) => (
            <div
              key={script.name}
              className="scroll-fade rounded-xl border border-border bg-card p-5 hover:border-teal/30 hover:bg-teal/3 transition-all group"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="text-3xl mb-4">{script.icon}</div>
              <h3 className="font-bold text-sm group-hover:text-teal transition-colors">
                {script.name}
              </h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                {script.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SELF-IMPROVING AI
───────────────────────────────────────────────────────────────── */
function SelfImproving() {
  const barHeights = [18, 26, 22, 34, 40, 38, 50, 55, 52, 64, 72, 82];

  return (
    <section className="py-24 sm:py-32 bg-card/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-fade">
            <p className="text-xs font-mono text-teal uppercase tracking-[0.25em] mb-5">
              Gets better every day
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              An AI That Gets{" "}
              <span className="text-teal">Smarter After Every Single Call</span>
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Every conversation is analyzed across 7 dimensions. Conversa
              identifies what worked, what didn&apos;t, and automatically
              optimizes its scripts — so your conversion rate compounds over
              time. The longer you run it, the deadlier it gets.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { val: "7", label: "Performance Dimensions" },
                { val: "Auto", label: "Optimization" },
                { val: "+38%", label: "Avg. Improvement" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-card p-5 text-center"
                >
                  <div className="text-2xl font-black text-teal">{s.val}</div>
                  <div className="mt-1.5 text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-fade rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[0_0_80px_rgba(79,209,197,0.04)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">Booking Conversion Rate</span>
              <span className="text-xs text-teal font-mono">+38% in 12 weeks</span>
            </div>
            <p className="text-xs text-muted mb-6">Based on actual agent data</p>
            <div className="flex items-end gap-2 h-36">
              {barHeights.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-teal/50 to-teal transition-all hover:from-teal/70 hover:to-teal cursor-default"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-muted">
              <span>Week 1</span>
              <span>Week 12</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   FEATURES
───────────────────────────────────────────────────────────────── */
function Features() {
  const features = [
    {
      title: "Voice Agent Builder",
      desc: "Build and customize AI agents with unique personas, voices, and scripts.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
      ),
    },
    {
      title: "Live Call Testing",
      desc: "Test your agent in the browser or call any real phone number before going live.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
      ),
    },
    {
      title: "Full Call Recordings",
      desc: "Every call recorded and synced with a timestamped transcript. Nothing is lost.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
      ),
    },
    {
      title: "AI Performance Scoring",
      desc: "Every call scored on qualification, objection handling, booking rate, and tone.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: "Calendar Integration",
      desc: "Strategy Sessions drop directly into your calendar. Zero manual steps.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
    },
    {
      title: "Full Lead Management",
      desc: "Auto-track source, status, and script type for every contact in your database.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-fade text-center mb-16">
          <p className="text-xs font-mono text-teal uppercase tracking-[0.25em] mb-5">
            Everything included
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            A Complete AI Platform{" "}
            <span className="text-teal">Built for Agents Who Win</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="scroll-fade rounded-xl border border-border bg-card p-6 hover:border-teal/25 hover:bg-teal/2 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal group-hover:bg-teal/20 transition-colors mb-5">
                {f.icon}
              </div>
              <h3 className="text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   RESULTS
───────────────────────────────────────────────────────────────── */
function Results() {
  const cases = [
    {
      stat: "8 Listings",
      period: "In 30 Days",
      desc: "A Sydney-based agent went from cold, untouched database to fully booked pipeline. AI did the calling. He did the closing.",
      market: "Sydney, NSW",
    },
    {
      stat: "$800K+",
      period: "GCI in One Month",
      desc: "Consistent AI follow-up on aged leads converted contacts that had been sitting in a CRM for over two years.",
      market: "Melbourne, VIC",
    },
    {
      stat: "1–3 Extra",
      period: "Listings Per Month",
      desc: "Across our entire network of active agents, the average lift is 1 to 3 additional listings every single month.",
      market: "Across Australia",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-card/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-fade text-center mb-16">
          <p className="text-xs font-mono text-teal uppercase tracking-[0.25em] mb-5">
            Proof, not promises
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            Real Agents.{" "}
            <span className="text-teal">Real Numbers.</span>
          </h2>
          <p className="mt-5 text-lg text-muted max-w-xl mx-auto">
            No cherry-picked edge cases. This is what consistent AI-powered
            prospecting looks like.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.stat}
              className="scroll-fade rounded-2xl border border-border bg-card p-8 hover:border-teal/30 transition-colors"
            >
              <div className="text-5xl sm:text-6xl font-black text-teal leading-none">
                {c.stat}
              </div>
              <div className="text-sm font-semibold text-teal/70 mt-2">
                {c.period}
              </div>
              <p className="mt-5 text-sm text-muted leading-relaxed">{c.desc}</p>
              <div className="mt-5 pt-5 border-t border-border flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal" />
                <span className="text-xs text-muted">{c.market}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────────────────────────── */
function Testimonials() {
  const quotes = [
    {
      quote:
        "I was sceptical about AI calling. But within the first fortnight I had three appraisals booked that I never would have chased myself. The strategy session alone gave me a clear plan — the results kept coming after that.",
      name: "James M.",
      title: "Residential Agent · Sydney",
      initials: "JM",
    },
    {
      quote:
        "My database had 600 contacts I hadn't called in over a year. Conversa worked through all of them in three weeks and booked me 11 appointments. I listed 4 of them. That's my best month in 6 years.",
      name: "Priya S.",
      title: "Senior Agent · Melbourne",
      initials: "PS",
    },
    {
      quote:
        "The fact that it learns from every call is what separates it from everything else I've tried. It got noticeably sharper within the first month. Now I genuinely can't imagine running without it.",
      name: "Mark T.",
      title: "Principal · Brisbane",
      initials: "MT",
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-fade text-center mb-16">
          <p className="text-xs font-mono text-teal uppercase tracking-[0.25em] mb-5">
            What agents say
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            Hear It From the{" "}
            <span className="text-teal">People Winning</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div
              key={q.name}
              className="scroll-fade rounded-2xl border border-border bg-card p-7 hover:border-teal/20 transition-colors flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-teal" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm text-muted leading-relaxed flex-1">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center text-teal font-bold text-xs shrink-0">
                  {q.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{q.name}</p>
                  <p className="text-xs text-muted">{q.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PRICING
───────────────────────────────────────────────────────────────── */
function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$499",
      period: "/mo",
      desc: "Perfect for solo agents ready to start converting their database.",
      features: [
        "1 AI Agent",
        "500 calls per month",
        "1 Script Type",
        "Call recordings + transcripts",
        "Basic analytics",
        "Email support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$999",
      period: "/mo",
      desc: "For agents serious about building a consistent listing pipeline.",
      features: [
        "3 AI Agents",
        "2,000 calls per month",
        "All 8 Script Types",
        "AI Learning & Auto-Optimization",
        "Performance scoring (7 dimensions)",
        "Calendar integration",
        "Priority support",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For brokerages and high-volume teams with custom requirements.",
      features: [
        "Unlimited AI Agents",
        "Unlimited calls",
        "Custom script development",
        "Dedicated account manager",
        "API access + custom integrations",
        "SLA guarantee",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-card/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-fade text-center mb-16">
          <p className="text-xs font-mono text-teal uppercase tracking-[0.25em] mb-5">
            Straightforward pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-black">
            Pick a Plan.{" "}
            <span className="text-teal">Start Winning.</span>
          </h2>
          <p className="mt-5 text-lg text-muted">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`scroll-fade relative rounded-2xl border p-8 flex flex-col transition-all ${
                tier.highlighted
                  ? "border-teal/40 bg-gradient-to-b from-teal/6 to-card shadow-[0_0_80px_rgba(79,209,197,0.08)]"
                  : "border-border bg-card hover:border-teal/20"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-teal text-[#0a0a0f] text-xs font-bold tracking-wide">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold">{tier.name}</h3>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-teal">{tier.price}</span>
                  {tier.period && (
                    <span className="text-muted text-lg">{tier.period}</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted">{tier.desc}</p>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#book"
                className={`mt-8 block text-center px-6 py-3.5 rounded-xl text-sm font-bold transition-colors ${
                  tier.highlighted
                    ? "bg-teal text-[#0a0a0f] hover:bg-teal-dark"
                    : "border border-border hover:border-teal/30 text-white hover:bg-card"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="scroll-fade mt-10 text-center text-sm text-muted">
          All plans include a{" "}
          <span className="text-white">14-day free trial</span>. Need something
          custom?{" "}
          <Link href="#book" className="text-teal hover:underline">
            Talk to our team
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   FINAL CTA
───────────────────────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-fade relative rounded-3xl overflow-hidden border border-teal/25">
          <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-card to-teal/5 animate-gradient" />
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-teal/8 rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />

          <div className="relative px-5 py-16 sm:px-16 sm:py-24 text-center">
            {/* Scarcity badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/25 bg-teal/8 text-sm text-teal mb-8">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              Only 5 new clients onboarded per month — 2 spots remain
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight">
              Stop Leaving Listings
              <br />
              <span className="text-teal">On the Table.</span>
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Every day you don&apos;t automate your prospecting, a lead in your
              database is calling someone else. Let Conversa fix that — for
              free, in 30 minutes.
            </p>

            <Link
              href="#book"
              className="inline-flex items-center mt-10 w-full sm:w-auto justify-center px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-black rounded-2xl bg-teal text-[#0a0a0f] hover:bg-teal-dark transition-colors animate-pulse-teal"
            >
              Book Your Free Strategy Session
            </Link>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
              {[
                "Free 30-min call",
                "No contracts",
                "Real results in week 1",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-muted">
                  <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   BOOK SECTION
───────────────────────────────────────────────────────────────── */
function BookSection() {
  return (
    <section id="book" className="py-8 sm:py-12 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/25 bg-teal/8 text-sm text-teal mb-4">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            Free 30-min call · No commitment
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Let&apos;s Talk
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border bg-card">
          <iframe
            src="https://link.iconmediaco.com/widget/booking/GRaS75T7cCEPfvRggZ3i"
            style={{ width: "100%", height: "600px", border: "none" }}
            title="Book a Strategy Session"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {["No contracts", "100% free", "Real results in week 1"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-muted">
              <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <>
      <ScrollFade />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Demo />
        <HowItWorks />
        <MeetJames />
        <ScriptTypes />
        <SelfImproving />
        <Features />
        <Results />
        <Testimonials />
        <Pricing />
        <FinalCTA />
        <BookSection />
      </main>
      <Footer />
    </>
  );
}
