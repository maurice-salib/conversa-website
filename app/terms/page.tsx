import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Conversa",
  description: "Terms of Service for Conversa, a trading name of Bathurst Trading PTY LTD.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
              Terms of <span className="text-teal">Service</span>
            </h1>
            <p className="mt-4 text-sm text-muted">Last updated: April 2026</p>
          </div>

          <div className="space-y-10 text-muted leading-relaxed">

            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between <strong className="text-white">Bathurst Trading PTY LTD</strong> (&ldquo;the Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), trading as <strong className="text-white">Conversa</strong>, and you (&ldquo;Client&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;) — whether as an individual or on behalf of a business entity.
            </p>
            <p>
              By accessing our website at <strong className="text-white">icon-conversa.ai</strong>, booking a call, purchasing any service, or engaging with us in any capacity, you agree to be fully and unconditionally bound by these Terms. If you do not agree, you must cease use of our Services immediately.
            </p>
            <p>
              These Terms should be read in conjunction with our <a href="/privacy" className="text-teal hover:underline">Privacy Policy</a>, which is incorporated by reference.
            </p>

            <Section title="1. Services Overview">
              <p>
                Conversa provides AI-powered appointment setting and outbound calling services, including but not limited to:
              </p>
              <ul>
                <li>AI voice agent technology that conducts outbound calls on behalf of clients</li>
                <li>Predictive dialler systems that automate call sequencing and lead contact</li>
                <li>Lead qualification, conversation scripting, and CRM integration</li>
                <li>Strategy sessions, onboarding, and account management</li>
                <li>Any related software, platforms, tools, or services provided by the Company</li>
              </ul>
              <p className="mt-3">
                The Company acts as a technology and services provider. Calls are made using AI voice agent technology on behalf of the Client, using contact lists, scripts, and parameters supplied or approved by the Client.
              </p>
            </Section>

            <Section title="2. Acceptance and Eligibility">
              <p>
                By engaging our Services, you represent and warrant that:
              </p>
              <ul>
                <li>You are at least 18 years of age</li>
                <li>You have the legal authority to enter into this agreement on behalf of yourself or your organisation</li>
                <li>Your use of the Services complies with all applicable laws and regulations</li>
                <li>All information you provide to us is accurate, complete, and current</li>
                <li>You have obtained all necessary consents, licences, and permissions required for us to contact individuals on your behalf</li>
              </ul>
            </Section>

            <Section title="3. Client Responsibilities and Compliance">
              <p>
                The Client bears sole and full responsibility for:
              </p>
              <ul>
                <li>Ensuring that all contact lists, databases, and lead data provided to the Company have been lawfully obtained and that the individuals therein have provided the required consents to receive marketing or promotional calls, including AI-generated voice calls</li>
                <li>Compliance with all applicable telecommunications, marketing, privacy, and consumer protection laws in all jurisdictions in which calls are made or received — including but not limited to the Australian Spam Act 2003, the Do Not Call Register Act 2006, the Privacy Act 1988, and any equivalent state, territory, or international legislation</li>
                <li>Ensuring that call scripts, messaging, and content approved by the Client do not violate any applicable law, regulation, or third-party rights</li>
                <li>Maintaining all required business registrations, licences, and regulatory approvals relevant to their industry and operations</li>
                <li>Any claims, disputes, or regulatory actions arising from calls made on their behalf</li>
              </ul>
              <p className="mt-3">
                The Company provides a technology and delivery platform only. The Company does not independently verify the lawfulness of any contact list or the regulatory compliance of any Client&rsquo;s operations. The Client indemnifies the Company fully against any liability arising from the Client&rsquo;s non-compliance.
              </p>
            </Section>

            <Section title="4. AI Voice Calls and Predictive Dialling">
              <p>
                The Client expressly acknowledges and agrees that:
              </p>
              <ul>
                <li>The Services involve the use of artificial intelligence to generate and deliver voice calls. These calls may sound human-like and are designed to simulate natural conversation</li>
                <li>The predictive dialler system automates the initiation of outbound calls and may contact multiple numbers simultaneously or in rapid succession</li>
                <li>Call volumes, timing, and frequency are subject to system parameters, data quality, and network conditions and cannot be guaranteed</li>
                <li>AI-generated conversations may not always reflect the precise wording of approved scripts due to the nature of dynamic language model outputs</li>
                <li>The Company makes no warranty that any specific call will result in a booking, lead, sale, or any other outcome</li>
                <li>The Client is solely responsible for disclosure obligations relating to the use of AI in calls, including any legal requirement to disclose that a caller is an automated or AI system</li>
              </ul>
            </Section>

            <Section title="5. Fees, Payment, and Billing">
              <p>
                All fees for Services are as agreed in writing between the parties at the time of engagement. By proceeding with any purchase or engagement:
              </p>
              <ul>
                <li>You agree to pay all fees in full in accordance with the agreed payment schedule</li>
                <li>All fees are quoted and payable in Australian Dollars (AUD) unless otherwise agreed in writing</li>
                <li>Fees are exclusive of GST and any other applicable taxes, which will be added where required by law</li>
                <li>Failure to pay by the due date may result in immediate suspension of Services without notice</li>
                <li>The Company reserves the right to charge interest on overdue amounts at a rate of 10% per annum, calculated daily</li>
                <li>The Client is responsible for all costs of recovery, including legal fees, in the event of non-payment</li>
              </ul>
            </Section>

            <Section title="6. No Refund Policy">
              <p>
                <strong className="text-white">All sales are final. The Company operates a strict no-refund policy.</strong>
              </p>
              <p className="mt-3">
                Under no circumstances will the Company issue a refund, partial refund, credit, or chargeback concession in respect of any fees paid, including but not limited to:
              </p>
              <ul>
                <li>Dissatisfaction with results, outcomes, or performance of the AI system</li>
                <li>Change of mind, change of business circumstances, or early termination of engagement</li>
                <li>Technical issues, downtime, or service interruptions that are outside the Company&rsquo;s direct control</li>
                <li>The Client&rsquo;s failure to provide adequate data, access, or cooperation required to deliver the Services</li>
                <li>Any claim that results did not meet expectations expressed in marketing materials or verbal discussions</li>
                <li>Regulatory restrictions or compliance issues affecting the Client&rsquo;s ability to use the Services</li>
              </ul>
              <p className="mt-3">
                Any testimonials, case studies, or projected outcomes referenced on our website or in our communications represent results achieved by specific clients under specific conditions and are not guarantees of future results. Results will vary based on industry, market, data quality, and other factors outside the Company&rsquo;s control.
              </p>
              <p className="mt-3">
                By proceeding with any payment, you acknowledge and accept this no-refund policy in full.
              </p>
            </Section>

            <Section title="7. Limitation of Liability">
              <p>
                <strong className="text-white">To the fullest extent permitted by applicable law, the Company excludes all liability whatsoever.</strong>
              </p>
              <p className="mt-3">
                Without limiting the foregoing, the Company shall not be liable for:
              </p>
              <ul>
                <li>Any direct, indirect, incidental, special, consequential, punitive, or exemplary loss or damage of any kind</li>
                <li>Loss of revenue, profit, business, data, goodwill, contracts, or anticipated savings</li>
                <li>Business interruption or loss of business opportunity</li>
                <li>Any loss arising from the performance or non-performance of AI voice agents or predictive dialler systems</li>
                <li>Any regulatory fines, penalties, or enforcement actions imposed on the Client</li>
                <li>Third-party claims arising from calls made on behalf of the Client</li>
                <li>Any loss arising from the Client&rsquo;s reliance on AI-generated content, conversations, or recommendations</li>
                <li>Technical failures, outages, data loss, or errors in AI outputs</li>
                <li>Any act or omission of a third-party service provider, telecommunications carrier, or platform operator</li>
              </ul>
              <p className="mt-3">
                Where liability cannot be fully excluded by law, the Company&rsquo;s total aggregate liability to the Client for any and all claims arising out of or in connection with these Terms or the Services shall not exceed the total fees paid by the Client to the Company in the 30 days immediately preceding the event giving rise to the claim.
              </p>
              <p className="mt-3">
                Nothing in these Terms excludes liability for fraud, wilful misconduct, or any liability that cannot be excluded by law.
              </p>
            </Section>

            <Section title="8. Indemnification">
              <p>
                The Client agrees to indemnify, defend, and hold harmless the Company, its directors, officers, employees, contractors, agents, affiliates, and successors from and against any and all claims, liabilities, damages, losses, penalties, fines, costs, and expenses (including reasonable legal fees) arising out of or in connection with:
              </p>
              <ul>
                <li>The Client&rsquo;s use of the Services</li>
                <li>The Client&rsquo;s breach of these Terms or any applicable law or regulation</li>
                <li>Calls made by the Company on behalf of the Client, including any claims brought by recipients of those calls</li>
                <li>The Client&rsquo;s provision of unlawfully obtained or non-consented contact data</li>
                <li>Any content, scripts, or instructions provided by the Client</li>
                <li>Any third-party claim relating to the Client&rsquo;s business, products, or services</li>
              </ul>
            </Section>

            <Section title="9. Intellectual Property">
              <p>
                All intellectual property in the Services — including but not limited to the AI models, voice systems, dialler technology, software, scripts developed by the Company, methodologies, and website content — is and remains the exclusive property of the Company or its licensors.
              </p>
              <p className="mt-3">
                The Client is granted a limited, non-exclusive, non-transferable licence to use the Services solely for their intended purpose during the engagement period. No rights are transferred to the Client beyond this limited licence.
              </p>
              <p className="mt-3">
                The Client retains ownership of all contact data and business information they provide to the Company. By providing such information, the Client grants the Company a royalty-free licence to use it solely for the purpose of delivering the Services.
              </p>
            </Section>

            <Section title="10. Confidentiality">
              <p>
                Each party agrees to keep confidential all non-public information disclosed by the other party in connection with the Services (&ldquo;Confidential Information&rdquo;) and not to disclose such information to any third party without prior written consent, except as required by law or to the extent necessary to deliver the Services.
              </p>
              <p className="mt-3">
                This obligation of confidentiality survives termination of the engagement.
              </p>
            </Section>

            <Section title="11. Term and Termination">
              <p>
                These Terms apply from the date you first engage with the Company and continue until terminated.
              </p>
              <ul>
                <li>The Company may suspend or terminate Services at any time, with or without cause, upon written notice</li>
                <li>The Client may terminate by providing written notice; however, no refund will be issued for fees already paid or fees due for the current billing period</li>
                <li>Upon termination, the Client&rsquo;s licence to use the Services ceases immediately</li>
                <li>All provisions that by their nature should survive termination — including Sections 6, 7, 8, 9, 10, and 14 — shall survive</li>
              </ul>
            </Section>

            <Section title="12. Warranties and Disclaimers">
              <p>
                The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To the fullest extent permitted by law, the Company makes no warranties, express or implied, including but not limited to:
              </p>
              <ul>
                <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                <li>That the Services will be uninterrupted, error-free, or free from viruses or other harmful components</li>
                <li>That any specific results, outcomes, or performance levels will be achieved</li>
                <li>That the AI voice agent or predictive dialler will operate consistently or without variation in any jurisdiction</li>
              </ul>
              <p className="mt-3">
                Any performance projections, outcome estimates, or result forecasts provided by the Company are illustrative only and do not constitute a guarantee of any kind.
              </p>
            </Section>

            <Section title="13. Force Majeure">
              <p>
                The Company shall not be liable for any failure or delay in performing its obligations under these Terms where such failure or delay is caused by circumstances beyond the Company&rsquo;s reasonable control, including but not limited to acts of God, natural disasters, pandemic, war, civil unrest, government action, telecommunications failure, third-party platform outages, or changes in applicable law or regulation.
              </p>
            </Section>

            <Section title="14. Governing Law and Dispute Resolution">
              <p>
                These Terms are governed by the laws of New South Wales, Australia. The parties submit to the exclusive jurisdiction of the courts of New South Wales for the resolution of any dispute arising under or in connection with these Terms.
              </p>
              <p className="mt-3">
                Prior to commencing any legal proceedings, the parties agree to attempt to resolve any dispute through good faith negotiation for a period of not less than 30 days following written notice of the dispute.
              </p>
            </Section>

            <Section title="15. Amendments">
              <p>
                The Company reserves the right to modify these Terms at any time by posting the updated version to our website. Your continued use of the Services following any amendment constitutes acceptance of the revised Terms. It is your responsibility to review these Terms periodically.
              </p>
            </Section>

            <Section title="16. Entire Agreement and Severability">
              <p>
                These Terms, together with any written engagement agreement, proposal, or order form agreed between the parties, constitute the entire agreement between the Company and the Client with respect to the Services and supersede all prior negotiations, representations, and agreements.
              </p>
              <p className="mt-3">
                If any provision of these Terms is found to be invalid, unlawful, or unenforceable, that provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, it shall be severed. The remaining provisions shall continue in full force and effect.
              </p>
            </Section>

            <Section title="17. Waiver">
              <p>
                No failure or delay by the Company to exercise any right or remedy under these Terms shall constitute a waiver of that right or remedy. A waiver of any breach shall not constitute a waiver of any subsequent breach.
              </p>
            </Section>

            <p className="text-sm text-muted/60 pt-6 border-t border-border">
              Conversa is a trading name of Bathurst Trading PTY LTD. All rights reserved. These Terms were last updated in April 2026.
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
