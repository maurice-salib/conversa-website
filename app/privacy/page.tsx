import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Conversa",
  description: "Privacy Policy for Conversa, a trading name of Bathurst Trading PTY LTD.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Privacy <span className="text-teal">Policy</span>
            </h1>
            <p className="mt-4 text-sm text-muted">Last updated: April 2026</p>
          </div>

          <div className="prose-policy space-y-10 text-muted leading-relaxed">

            <p>
              This Privacy Policy is issued by <strong className="text-white">Bathurst Trading PTY LTD</strong> (&ldquo;the Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), trading as <strong className="text-white">Conversa</strong>, and applies to all information collected through our website at <strong className="text-white">icon-conversa.ai</strong> and any related services, platforms, or communications (collectively, the &ldquo;Services&rdquo;).
            </p>
            <p>
              By accessing or using our Services, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our Services immediately.
            </p>

            <Section title="1. Information We Collect">
              <p className="font-medium text-white mb-2">Information you provide directly:</p>
              <ul>
                <li>Full name, email address, phone number, and business name</li>
                <li>Information submitted through booking forms, enquiry forms, or any other input on our Services</li>
                <li>Communications you initiate with us by any means</li>
              </ul>
              <p className="font-medium text-white mb-2 mt-4">Information collected automatically:</p>
              <ul>
                <li>IP address, browser type, device type, and operating system</li>
                <li>Pages visited, time on page, referral source, and click behaviour</li>
                <li>Session data, scroll depth, and interaction patterns</li>
                <li>Cookies, pixel tags, web beacons, and similar tracking technologies</li>
              </ul>
              <p className="font-medium text-white mb-2 mt-4">Information from third parties:</p>
              <ul>
                <li>Data from advertising platforms, analytics providers, and lead generation sources</li>
                <li>Information obtained through integrations with third-party CRM, scheduling, or marketing tools</li>
                <li>Publicly available information and commercially sourced data where applicable</li>
              </ul>
            </Section>

            <Section title="2. How We Use Your Information">
              <ul>
                <li>To provide, operate, personalise, and improve our Services</li>
                <li>To respond to enquiries and manage bookings or appointments</li>
                <li>To communicate with you regarding your engagement with us</li>
                <li>To send marketing, promotional, and educational communications — including via email, SMS, and voice — where permitted by applicable law or with your consent</li>
                <li>To build, segment, and target audiences for advertising and outreach purposes</li>
                <li>To analyse usage data and improve our website, funnels, and commercial offerings</li>
                <li>To develop new products, services, and revenue streams</li>
                <li>To share or sell your personal information with third parties for commercial, marketing, or operational purposes — including but not limited to data brokers, marketing partners, affiliated businesses, and advertisers — as further described in Section 3</li>
                <li>To comply with legal, regulatory, and contractual obligations</li>
                <li>To protect our rights, enforce our terms, and prevent fraud or abuse</li>
              </ul>
            </Section>

            <Section title="3. Sharing and Sale of Your Information">
              <p className="font-medium text-white mb-2">Marketing and commercial partners:</p>
              <p>
                We may provide your information — including contact details, behavioural data, and profile information — to third-party marketing partners, advertisers, and affiliated businesses for their own marketing and commercial purposes. This may include the sale of data as a commercial activity.
              </p>
              <p className="font-medium text-white mb-2 mt-4">Service providers:</p>
              <p>
                We engage third-party service providers to assist in operating our business, including CRM platforms, email and SMS delivery tools, booking and scheduling systems, advertising networks, and analytics providers. These providers may access your information solely to perform services on our behalf.
              </p>
              <p className="font-medium text-white mb-2 mt-4">Business transfers:</p>
              <p>
                In the event of a merger, acquisition, restructure, or sale of all or part of our assets, your personal information may be transferred as part of that transaction.
              </p>
              <p className="font-medium text-white mb-2 mt-4">Legal and regulatory requirements:</p>
              <p>
                We may disclose your information where required by law, court order, or government authority, or where we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
              </p>
              <p className="font-medium text-white mb-2 mt-4">With your consent:</p>
              <p>
                We may share your information with any third party where you have provided explicit consent.
              </p>
              <p className="mt-4">
                You acknowledge that by using our Services, you consent to the collection, use, and onward transfer or sale of your information as described in this policy.
              </p>
            </Section>

            <Section title="4. Cookies & Tracking Technologies">
              <p>We use cookies, pixels, web beacons, and similar tracking technologies to:</p>
              <ul>
                <li>Maintain session continuity and personalise your experience</li>
                <li>Analyse traffic patterns and optimise our Services</li>
                <li>Deliver targeted advertising and retargeting campaigns across third-party platforms</li>
                <li>Track the effectiveness of our marketing activities</li>
              </ul>
              <p className="mt-4">
                You may manage cookie preferences through your browser settings; however, disabling cookies may limit the functionality of certain parts of our Services. By continuing to use our Services, you consent to our use of these technologies.
              </p>
            </Section>

            <Section title="5. Data Retention">
              <p>
                We retain your personal information for as long as necessary to fulfil the purposes set out in this policy, including for the duration of any commercial relationship and for a reasonable period thereafter. We may retain data for longer periods where required by law, where it serves a legitimate business interest, or where it forms part of a commercially exploitable dataset.
              </p>
            </Section>

            <Section title="6. Your Rights">
              <p>Depending on your jurisdiction, you may have certain rights regarding your personal data, including the right to:</p>
              <ul>
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information, subject to legal and contractual obligations</li>
                <li>Withdraw consent for marketing communications at any time by using the unsubscribe mechanism in any communication you receive</li>
                <li>Lodge a complaint with the relevant privacy regulator in your jurisdiction</li>
              </ul>
              <p className="mt-4">
                Please note that exercising these rights does not affect the lawfulness of any processing carried out prior to withdrawal of consent, nor does it obligate us to delete data that has already been transferred or sold to third parties prior to receipt of your request.
              </p>
            </Section>

            <Section title="7. Security">
              <p>
                We implement commercially reasonable technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security, and you provide your information at your own risk.
              </p>
            </Section>

            <Section title="8. Third-Party Links & Integrations">
              <p>
                Our Services may contain links to, or integrations with, third-party websites, platforms, and tools. We have no control over, and accept no responsibility for, the privacy practices or content of those third parties. We encourage you to review the privacy policies of any third-party services you access.
              </p>
            </Section>

            <Section title="9. Children&rsquo;s Privacy">
              <p>
                Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please notify us and we will take steps to delete it.
              </p>
            </Section>

            <Section title="10. Changes to This Policy">
              <p>
                We reserve the right to update or modify this Privacy Policy at any time. Changes will be effective upon posting to our website. Your continued use of our Services following any update constitutes acceptance of the revised policy. We encourage you to review this page periodically.
              </p>
            </Section>

            <Section title="11. Governing Law">
              <p>
                This Privacy Policy is governed by the laws of New South Wales, Australia. Any disputes arising in connection with this policy are subject to the exclusive jurisdiction of the courts of New South Wales.
              </p>
            </Section>

            <p className="text-sm text-muted/60 pt-6 border-t border-border">
              Conversa is a trading name of Bathurst Trading PTY LTD. All rights reserved.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
