import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Conversa",
  description: "Simple, transparent pricing for AI-powered appointment setting.",
};

const tiers = [
  {
    name: "Starter",
    price: "$499",
    period: "/mo",
    desc: "Perfect for solo agents getting started with AI calling.",
    features: [
      "1 AI Agent",
      "500 calls per month",
      "1 Script Type",
      "Call recordings",
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
    desc: "For teams ready to scale their lead conversion.",
    features: [
      "3 AI Agents",
      "2,000 calls per month",
      "All 8 Script Types",
      "AI Learning & Optimization",
      "Performance scoring",
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
    desc: "For brokerages and teams with custom requirements.",
    features: [
      "Unlimited AI Agents",
      "Unlimited calls",
      "Custom script development",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Simple, Transparent{" "}
              <span className="text-teal">Pricing</span>
            </h1>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Choose the plan that fits your team. No hidden fees, no long-term contracts.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl border p-8 flex flex-col ${
                    tier.highlighted
                      ? "border-teal/40 bg-gradient-to-b from-teal/5 to-card"
                      : "border-border bg-card"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-teal text-[#0a0a0f] text-xs font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold">{tier.name}</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-teal">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-muted">{tier.period}</span>
                      )}
                    </div>
                    <p className="mt-3 text-sm text-muted">{tier.desc}</p>
                  </div>

                  <ul className="mt-8 space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
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
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`mt-8 block text-center px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
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
          </div>
        </section>

        {/* FAQ-style note */}
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted">
              All plans include a 14-day free trial. Need something custom?{" "}
              <Link href="/contact" className="text-teal hover:underline">
                Talk to our team
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
