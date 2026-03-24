import Link from "next/link";
import ScrollFade from "./ScrollFade";

/* ───────────────────────── VIDEO HERO ───────────────────────── */
function VideoHero() {
  return (
    <section className="pt-12 pb-8 sm:pt-20 sm:pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video placeholder - 16:9 */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#12121a] border border-border animate-fade-in-up">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-transparent to-teal/3" />

          {/* Play button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
            <button className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-teal/20 border-2 border-teal/60 flex items-center justify-center hover:bg-teal/30 transition-colors group">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-teal ml-1 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <p className="text-sm sm:text-base text-muted text-center px-4 max-w-md leading-relaxed">
              Watch: How Agents Are Picking Up 1-3 Extra Listings Per Month
            </p>
          </div>
        </div>

        {/* CTA below video */}
        <div className="mt-8 sm:mt-10 text-center animate-fade-in-up delay-200">
          <Link
            href="/book/schedule"
            className="inline-flex items-center px-10 py-4 text-lg font-semibold rounded-xl bg-teal text-[#0a0a0f] hover:bg-teal-dark transition-colors animate-pulse-teal"
          >
            Book Your Strategy Session
          </Link>
          <p className="mt-3 text-sm text-muted">
            Free 30-min call &middot; No obligation
          </p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── CASE STUDY CARDS ──────────────────────── */
function CaseStudies() {
  const cases = [
    {
      stat: "8 Listings",
      period: "in 30 days",
      desc: "A Sydney-based agent went from cold database to fully booked pipeline using AI-powered prospecting.",
    },
    {
      stat: "$800K+ GCI",
      period: "in one month",
      desc: "Consistent follow-up on aged leads converted forgotten contacts into high-value listings.",
    },
    {
      stat: "1-3 Extra Listings",
      period: "per month average",
      desc: "Across our network of 100+ agents, the average lift is 1-3 additional listings per month.",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10 scroll-fade">
          Real Results From <span className="text-teal">Real Agents</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div
              key={c.stat}
              className="scroll-fade rounded-xl border border-border bg-card p-6 hover:border-teal/30 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-bold text-teal">
                {c.stat}
              </div>
              <div className="text-sm text-teal/70 font-medium mt-1">
                {c.period}
              </div>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── SOCIAL PROOF BAR ──────────────────────── */
function SocialProofBar() {
  return (
    <section className="py-10 border-y border-border scroll-fade">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-muted text-sm uppercase tracking-widest mb-3">
          Trusted by
        </p>
        <p className="text-xl sm:text-2xl font-bold">
          <span className="text-teal">100+</span> agents across Australia
        </p>
      </div>
    </section>
  );
}

/* ──────────────────────── FAQ ────────────────────────────────── */
function FAQ() {
  const faqs = [
    {
      q: "What is a Strategy Session?",
      a: "It's a free 30-minute call where we analyse your current prospecting, identify the biggest gaps, and show you exactly how AI calling can fill them — with real numbers from agents in your market.",
    },
    {
      q: "Is this a sales pitch?",
      a: "It's a strategy-first conversation. We'll walk through your pipeline, show you projected results, and only recommend next steps if it genuinely makes sense for your business.",
    },
    {
      q: "How long before I see results?",
      a: "Most agents see their first AI-booked appointment within the first week. Consistent listing results typically show within the first 30 days.",
    },
    {
      q: "Do I need to be tech-savvy?",
      a: "Not at all. We handle all the setup. You just need your contact list and your calendar — we take care of everything else.",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10 scroll-fade">
          Frequently Asked <span className="text-teal">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="scroll-fade group rounded-xl border border-border bg-card overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-left font-medium hover:text-teal transition-colors">
                {faq.q}
                <svg
                  className="w-5 h-5 text-muted shrink-0 ml-4 group-open:rotate-180 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-5 text-sm text-muted leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── BOTTOM CTA ────────────────────────────── */
function BottomCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-teal/20">
          <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-card to-teal/5" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal/8 rounded-full blur-[80px]" />

          <div className="relative px-6 py-14 sm:px-12 sm:py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Ready to pick up extra listings?
            </h2>
            <p className="mt-3 text-muted max-w-md mx-auto">
              See exactly how AI calling works for agents in your market.
            </p>
            <Link
              href="/book/schedule"
              className="inline-flex items-center mt-8 px-10 py-4 text-base font-semibold rounded-xl bg-teal text-[#0a0a0f] hover:bg-teal-dark transition-colors animate-pulse-teal"
            >
              Book Your Strategy Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── PAGE ───────────────────────────────── */
export const metadata = {
  title: "Book a Strategy Session | Icon Media Co",
  description:
    "See how Australian agents are picking up 1-3 extra listings per month with AI-powered prospecting. Book your free strategy session.",
};

export default function BookPage() {
  return (
    <>
      <ScrollFade />
      <main className="min-h-screen">
        <VideoHero />
        <CaseStudies />
        <SocialProofBar />
        <FAQ />
        <BottomCTA />
      </main>
    </>
  );
}
