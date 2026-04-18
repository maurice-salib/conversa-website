import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ───────────────────────────── HERO ───────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/8 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal/5 rounded-full blur-[128px] animate-pulse-glow delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[128px] animate-pulse-glow delay-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 text-sm text-muted mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          AI-Powered Appointment Setting
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight animate-fade-in-up delay-100">
          Your AI Appointment Setter
          <br />
          <span className="text-teal">That Never Sleeps</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Conversa calls your prospects, handles objections like a human, books
          Strategy Sessions on your calendar — and gets better after every
          single call.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 text-base font-medium rounded-lg bg-teal text-[#0a0a0f] hover:bg-teal-dark transition-colors"
          >
            Book a Demo
          </Link>
          <Link
            href="/#how-it-works"
            className="w-full sm:w-auto px-8 py-3.5 text-base font-medium rounded-lg border border-teal/30 text-teal hover:bg-teal/10 transition-colors"
          >
            Watch It In Action
          </Link>
        </div>

        {/* Waveform visual */}
        <div className="mt-16 flex items-end justify-center gap-1 h-16 animate-fade-in delay-500">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-teal/30 rounded-full animate-wave"
              style={{
                height: `${Math.random() * 48 + 16}px`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── SOCIAL PROOF BAR ─────────────────────── */
function SocialProof() {
  const stats = [
    { value: "$800K+", label: "GCI Generated" },
    { value: "1-3", label: "Extra Listings/Month" },
    { value: "8", label: "Listings in 30 Days" },
    { value: "90 Days", label: "Motivated Sellers" },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-teal">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── HOW IT WORKS ─────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Upload Your Contacts",
      desc: "Import your database, Meta leads, referrals, or cold lists.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "AI Calls Automatically",
      desc: "James calls with the right script for every lead type.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Appointments Booked",
      desc: "Strategy Sessions land directly in your calendar.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            How It <span className="text-teal">Works</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Three simple steps to automated appointment setting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-teal/0 via-teal/30 to-teal/0" />

          {steps.map((step) => (
            <div key={step.num} className="relative text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-border bg-card text-teal group-hover:border-teal/40 transition-colors">
                {step.icon}
              </div>
              <div className="mt-2 text-xs font-mono text-teal/60">
                {step.num}
              </div>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── SCRIPT TYPES ────────────────────────── */
function ScriptTypes() {
  const scripts = [
    { name: "Cold Call", desc: "Pattern interrupt through REA profile research", icon: "🎯" },
    { name: "SMS Reactivation", desc: "Anchors to the text, pivots to personal relevance", icon: "💬" },
    { name: "Fresh Meta Lead", desc: "Speed validation confirms their action", icon: "⚡" },
    { name: "Aged Meta Lead", desc: "Something\u2019s changed frame gives fresh reason to re-engage", icon: "🔄" },
    { name: "Referral", desc: "Referrer name drop does 70% of the work", icon: "🤝" },
    { name: "No-Show Recovery", desc: "Zero guilt, concierge energy", icon: "📅" },
    { name: "Inbound Callback", desc: "Rewarding their intent before anything else", icon: "📞" },
    { name: "Pipeline Re-Engagement", desc: "Lead with what\u2019s new, never rehash", icon: "🔁" },
  ];

  return (
    <section className="py-20 sm:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            One AI. <span className="text-teal">Eight Conversation Styles.</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Every lead type gets a tailored approach.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {scripts.map((script) => (
            <div
              key={script.name}
              className="rounded-xl border border-border bg-card p-5 hover:border-teal/30 transition-colors group"
            >
              <div className="text-2xl mb-3">{script.icon}</div>
              <h3 className="font-semibold text-sm group-hover:text-teal transition-colors">
                {script.name}
              </h3>
              <p className="mt-1.5 text-xs text-muted leading-relaxed">
                {script.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── SELF-IMPROVING AI ─────────────────────────── */
function SelfImproving() {
  const barHeights = [28, 36, 32, 42, 48, 45, 55, 60, 58, 68, 72, 78];

  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              An AI That Gets{" "}
              <span className="text-teal">Smarter After Every Call</span>
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Conversa analyzes every conversation, scores performance across 7
              dimensions, and automatically optimizes its approach.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { val: "7", label: "Performance Dimensions" },
                { val: "Auto", label: "Optimization" },
                { val: "Full", label: "Version History" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-border bg-card p-4 text-center"
                >
                  <div className="text-xl font-bold text-teal">{s.val}</div>
                  <div className="mt-1 text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Ascending bar chart */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Performance Score</span>
              <span className="text-xs text-teal">+38% improvement</span>
            </div>
            <div className="flex items-end gap-2 h-32">
              {barHeights.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-teal/60 to-teal transition-all hover:from-teal/80 hover:to-teal"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-3 text-xs text-muted">
              <span>Week 1</span>
              <span>Week 12</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── FEATURES GRID ─────────────────────────── */
function Features() {
  const features = [
    {
      title: "Voice Agent Builder",
      desc: "Build and customize AI agents with unique personas, voices, and scripts.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
    },
    {
      title: "Live Call Testing",
      desc: "Test your agent in browser or call any phone number.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
      ),
    },
    {
      title: "Call Recordings",
      desc: "Play back every call with synced transcripts.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
      ),
    },
    {
      title: "AI Performance Scoring",
      desc: "Every call scored on qualification, objection handling, booking, and tone.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: "Calendar Integration",
      desc: "Strategy Sessions booked directly into your calendar.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>
      ),
    },
    {
      title: "Lead Management",
      desc: "Auto-track lead source, status, and script type for every contact.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Everything You Need to{" "}
            <span className="text-teal">Convert Leads</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            A complete AI calling platform built for real estate teams.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card p-6 hover:border-teal/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal group-hover:bg-teal/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── CTA ──────────────────────────────── */
function CTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-teal/20">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-card to-teal/5 animate-gradient" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/8 rounded-full blur-[100px]" />

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to stop chasing leads?
            </h2>
            <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
              Let Conversa do the calling while you focus on closing.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center mt-8 px-8 py-4 text-base font-medium rounded-lg bg-teal text-[#0a0a0f] hover:bg-teal-dark transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── PAGE ─────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <ScriptTypes />
        <SelfImproving />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
