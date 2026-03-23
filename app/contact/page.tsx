import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Conversa",
  description: "Book a demo or get in touch with the Conversa team.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                Book a <span className="text-teal">Demo</span>
              </h1>
              <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
                See how Conversa can automate your appointment setting in under
                15 minutes.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+61 400 000 000"
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Your Agency"
                        className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your team and goals..."
                      className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-white placeholder:text-muted/50 focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-teal text-[#0a0a0f] font-medium hover:bg-teal-dark transition-colors"
                  >
                    Book a Demo
                  </button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2">
                <div className="rounded-xl border border-border bg-card p-6 sm:p-8 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted">hello@conversa.au</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-sm text-muted">Sydney, Australia</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-sm text-muted">
                      We typically respond within 2 business hours.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h3 className="font-semibold mb-3">What to expect</h3>
                    <ul className="space-y-3">
                      {[
                        "15-minute personalised demo",
                        "See real call recordings",
                        "Custom ROI projection for your team",
                        "No commitment required",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm text-muted"
                        >
                          <svg
                            className="w-5 h-5 text-teal shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
