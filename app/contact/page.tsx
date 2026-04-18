import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo | Conversa",
  description: "Book a demo and see how Conversa automates your appointment setting in under 15 minutes.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Book a <span className="text-teal">Demo</span>
              </h1>
              <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
                Pick a time and we&apos;ll show you exactly how Conversa can work for your business — live, in 15 minutes.
              </p>
            </div>

            {/* GHL Booking Widget */}
            <div className="rounded-2xl overflow-hidden border border-border bg-card">
              <iframe
                src="https://link.iconmediaco.com/widget/booking/GRaS75T7cCEPfvRggZ3i"
                style={{ width: "100%", height: "700px", border: "none" }}
                title="Book a Demo"
              />
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {[
                "15-min personalised demo",
                "See real call recordings",
                "No commitment required",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted">
                  <svg
                    className="w-5 h-5 text-teal shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
