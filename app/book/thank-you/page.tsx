import Link from "next/link";

/* ──────────────────────── PAGE ───────────────────────────────── */
export const metadata = {
  title: "You're All Set! | Conversa",
  description:
    "Your strategy session is booked. Here's what to expect next.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Confirmation header */}
        <div className="text-center animate-fade-in-up">
          {/* Checkmark icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal/15 border-2 border-teal/40 mb-6">
            <svg
              className="w-10 h-10 text-teal"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold">
            You&apos;re All <span className="text-teal">Set!</span>
          </h1>
          <p className="mt-3 text-muted max-w-md mx-auto">
            Your Strategy Session is confirmed. Check your email for the
            calendar invite and meeting details.
          </p>
        </div>

        {/* Thank-you video placeholder */}
        <div className="mt-10 relative w-full aspect-video rounded-2xl overflow-hidden bg-[#12121a] border border-border animate-fade-in-up delay-200">
          <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-transparent to-teal/3" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <button className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-teal/20 border-2 border-teal/60 flex items-center justify-center hover:bg-teal/30 transition-colors group">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-teal ml-0.5 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <p className="text-sm text-muted text-center px-4">
              A quick message from Maurice
            </p>
          </div>
        </div>

        {/* What happens next */}
        <div className="mt-12 animate-fade-in-up delay-300">
          <h2 className="text-xl font-semibold text-center mb-8">
            What Happens <span className="text-teal">Next</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Check Your Inbox",
                desc: "You'll receive a calendar invite with the Zoom link and any prep details within the next few minutes.",
              },
              {
                step: "2",
                title: "Prepare Your Database",
                desc: "If you have a contact list or CRM export ready, bring it to the call. We'll show you projected results based on your actual numbers.",
              },
              {
                step: "3",
                title: "Show Up & See the AI in Action",
                desc: "We'll do a live walkthrough of the AI agent, show you real call recordings, and map out a plan tailored to your market.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="w-9 h-9 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-teal font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8 animate-fade-in-up delay-400">
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-teal"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-muted leading-relaxed">
            &ldquo;I was sceptical about AI calling, but within the first
            fortnight I had three appraisals booked that I never would have
            chased myself. The strategy session alone gave me a clear plan — the
            results just kept coming after that.&rdquo;
          </blockquote>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center text-teal font-bold text-sm">
              JM
            </div>
            <div>
              <p className="text-sm font-medium">James M.</p>
              <p className="text-xs text-muted">
                Agent &middot; Sydney, Australia
              </p>
            </div>
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-teal transition-colors"
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
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
