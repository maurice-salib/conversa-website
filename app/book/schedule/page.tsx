import Link from "next/link";

/* ──────────────────────── PAGE ───────────────────────────────── */
export const metadata = {
  title: "Pick a Time | Icon Media Co",
  description:
    "Choose a time for your free strategy session and discover how AI calling can generate extra listings every month.",
};

export default function SchedulePage() {
  return (
    <main className="min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/book"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-teal transition-colors mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </Link>

        {/* Headline */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Pick a Time That <span className="text-teal">Works</span>
          </h1>
          <p className="mt-3 text-muted max-w-lg mx-auto">
            Choose a 30-minute slot and we&apos;ll walk you through exactly how
            AI calling can work for your business.
          </p>
        </div>

        {/* GHL booking widget */}
        <div className="rounded-2xl overflow-hidden border border-border bg-card animate-fade-in-up delay-200">
          <iframe
            src="https://link.iconmediaco.com/widget/booking/GRaS75T7cCEPfvRggZ3i"
            style={{ width: "100%", height: "600px", border: "none" }}
            title="Book a Strategy Session"
          />
        </div>

        {/* What to expect */}
        <div className="mt-12 max-w-2xl mx-auto animate-fade-in-up delay-300">
          <h2 className="text-xl font-semibold text-center mb-6">
            What to Expect
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                ),
                text: "We'll analyse your current pipeline and prospecting strategy",
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                ),
                text: "You'll see a live demo of the AI agent calling and booking",
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                text: "We'll map out projected results based on your database size",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
              >
                <div className="w-9 h-9 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal shrink-0">
                  {item.icon}
                </div>
                <p className="text-sm text-muted leading-relaxed pt-1.5">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {[
            { label: "No contracts", icon: "shield" },
            { label: "100% free", icon: "dollar" },
            { label: "Real results", icon: "chart" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-sm text-muted"
            >
              <svg
                className="w-5 h-5 text-teal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
