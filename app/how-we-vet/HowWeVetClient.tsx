'use client';

import { useState } from 'react';
import { CheckCircle, Shield, Award, FileCheck, Star, Scale, BadgeCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';

const vettingSteps = [
  {
    step: 1,
    icon: <FileCheck className="w-5 h-5" />,
    title: 'Professional Qualification Verification',
    summary: 'We confirm every accountant holds a recognised UK qualification before anything else.',
    details: [
      'Active membership with a recognised professional body is mandatory. We accept members of the Institute of Chartered Accountants in England and Wales (ICAEW), the Association of Chartered Certified Accountants (ACCA), and the Chartered Institute of Management Accountants (CIMA).',
      'We verify membership status directly with the relevant professional body, not through self-declaration. Lapsed, suspended, or restricted memberships result in immediate rejection from our network.',
      'For specialist services such as SEIS/EIS advice, R&D tax credit claims, or audit work, we confirm the accountant holds the appropriate practising certificate and sector-specific experience.',
    ],
  },
  {
    step: 2,
    icon: <Shield className="w-5 h-5" />,
    title: 'Professional Indemnity Insurance Check',
    summary: 'Every accountant must carry adequate PI cover to protect your startup.',
    details: [
      'We require a minimum of £1,000,000 professional indemnity insurance cover from a UK-regulated insurer. For accountants handling complex investment structuring or R&D claims, we expect cover proportionate to the scale of their engagements.',
      'Proof of cover is verified at onboarding and re-checked annually. Any lapse in insurance results in immediate suspension from our referral network until cover is reinstated and documented.',
      'This protects your startup from financial loss in the unlikely event of professional negligence, ensuring you have a clear route to redress if something goes wrong.',
    ],
  },
  {
    step: 3,
    icon: <Award className="w-5 h-5" />,
    title: 'Startup-Specific Experience Audit',
    summary: 'We verify genuine experience with startups, not just general small business accounting.',
    details: [
      'General accountancy experience is not enough. We require demonstrated experience with startup-specific matters including SEIS/EIS advance assurance, R&D tax credit claims, company formation for investor readiness, and cash flow forecasting for fundraising.',
      'We assess the range of startup stages each accountant has served, from pre-revenue founders to Series A companies scaling their operations. Breadth across startup lifecycle stages is valued alongside depth in specific services.',
      'Accountants must provide verifiable case studies or client references demonstrating successful outcomes for startup clients. Generic SME experience without startup specifics results in rejection.',
    ],
  },
  {
    step: 4,
    icon: <Star className="w-5 h-5" />,
    title: 'Client Reference and Satisfaction Checks',
    summary: 'We speak to real startup clients to verify quality, responsiveness, and value.',
    details: [
      'Every applicant must provide contact details for a minimum of three current startup clients who have used their services for at least six months. We contact these references directly and ask about responsiveness, technical competence, value for money, and proactive advice quality.',
      'We also review publicly available feedback on Google Business Profile, Trustpilot, and professional body directories. A pattern of unresolved complaints or ratings below 4.0 out of 5.0 triggers additional scrutiny or rejection.',
      'At least one reference must involve a claim or structuring engagement, such as an R&D tax credit submission, SEIS advance assurance application, or investment round support, to verify hands-on technical competence.',
    ],
  },
  {
    step: 5,
    icon: <Scale className="w-5 h-5" />,
    title: 'Regulatory Standing and Compliance Audit',
    summary: 'We check for disciplinary history, AML registration, and regulatory compliance.',
    details: [
      'We search the disciplinary records of ICAEW, ACCA, CIMA, and other relevant bodies for any findings, sanctions, or ongoing investigations. A substantive disciplinary finding in the preceding five years results in automatic exclusion.',
      'All accountants must demonstrate current registration with HMRC as a supervised agent under the Money Laundering Regulations 2017, or supervision by their professional body for anti-money laundering purposes.',
      'We confirm that the practice holds appropriate data protection registration with the Information Commissioner\'s Office (ICO) and operates compliant client data handling procedures.',
    ],
  },
];

export default function HowWeVetClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={openModal} />
      <main className="flex-grow">

        {/* HERO */}
        <section
          className="border-b border-ink-900/10"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width pt-6 md:pt-10">
            <div className="flex items-center justify-between pb-3 border-b border-ink-900/40 text-[10px] md:text-[11px] font-semibold tracking-[0.22em] uppercase text-ink-900">
              <span>VETTING &nbsp;&middot;&nbsp; THE NETWORK</span>
              <span className="text-brand-500">&#9733; FIVE STEPS</span>
              <span className="hidden md:inline">&pound;1M+ PI</span>
            </div>
          </div>

          <div className="container-width py-12 md:py-16">
            <Breadcrumbs items={[{ label: 'How We Vet Our Accountants' }]} />
            <div className="max-w-3xl mt-6">
              <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-500 mb-5">
                <BadgeCheck className="w-3.5 h-3.5" aria-hidden="true" />
                <span>&sect; VERIFIED ACCOUNTANT NETWORK</span>
              </div>
              <h1 className="font-display text-[44px] md:text-[56px] lg:text-[64px] text-ink-900 leading-[0.98] tracking-tighter mb-5">
                How we <em className="text-brand-500 italic">vet</em><br />our accountants.
              </h1>
              <p className="font-sans text-[15px] md:text-base text-ink-700 leading-relaxed max-w-[580px]">
                Every startup accountant in our UK network passes a rigorous five-step verification before receiving a single referral. No exceptions, no shortcuts.
              </p>
            </div>
          </div>
        </section>

        {/* Why vetting matters */}
        <section
          className="py-14 md:py-18"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width max-w-3xl">
            <div className="masthead mb-4">
              <span>&sect; 01 &nbsp;&middot;&nbsp; WHY IT MATTERS</span>
            </div>
            <h2 className="font-display text-[26px] md:text-[30px] text-ink-900 mb-6 tracking-tight leading-tight">
              Why vetting matters <em className="text-brand-500 italic">for startups.</em>
            </h2>
            <div className="space-y-5 font-sans text-[15px] text-ink-700 leading-[1.75]">
              <p>
                The terms &ldquo;accountant&rdquo; and &ldquo;tax advisor&rdquo; are not legally protected in the United Kingdom. That means startup founders searching for professional help face a real risk of engaging someone without the qualifications, insurance, or startup experience to handle their financial affairs competently.
              </p>
              <p>
                Startup accounting is not the same as general small business accounting. SEIS/EIS structuring, R&amp;D tax credit claims, investor-ready financial reporting, and cap table management all require specialist knowledge. An accountant who handles sole traders and landlords may not understand your world.
              </p>
              <p>
                Our vetting process eliminates that risk. Before any accountant appears in our matching results, they must clear five independent checks. Roughly 35% of applicants do not make it through. We re-verify every accountant annually.
              </p>
            </div>
          </div>
        </section>

        {/* Five steps */}
        <section
          className="py-14 md:py-18 border-t border-ink-900/10"
          style={{ backgroundColor: 'var(--paper-50)' }}
        >
          <div className="container-width">
            <div className="mb-12 max-w-3xl">
              <div className="masthead mb-4">
                <span>&sect; 02 &nbsp;&middot;&nbsp; THE PROCESS</span>
              </div>
              <h2 className="font-display text-[30px] md:text-[38px] text-ink-900 mb-4 tracking-tight leading-tight">
                Five steps. <em className="text-brand-500 italic">Zero shortcuts.</em>
              </h2>
              <p className="font-sans text-[15px] text-ink-700 leading-relaxed max-w-[560px]">
                Every accountant must pass all five checks. Failure at any stage means rejection from the network.
              </p>
            </div>

            <div className="space-y-5 max-w-4xl">
              {vettingSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-sm border border-ink-900/10 p-6 md:p-8 relative"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
                  <div className="flex items-start gap-5 mb-5">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-sm border border-brand-500 flex flex-col items-center justify-center"
                    >
                      <span className="font-mono text-[9px] text-brand-500 tracking-[0.15em]">STEP</span>
                      <span className="font-display italic text-brand-500 text-[18px] leading-none">
                        {item.step.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-[19px] md:text-[22px] text-ink-900 mb-2 tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <p className="font-display italic text-brand-500 text-[14.5px] leading-snug">
                        {item.summary}
                      </p>
                    </div>
                    <div
                      className="hidden md:flex w-10 h-10 rounded-sm items-center justify-center text-brand-600 flex-shrink-0"
                      style={{ backgroundColor: 'var(--brand-50)' }}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div className="space-y-3 pl-0 md:pl-[4.25rem]">
                    {item.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-500 flex-shrink-0 mt-1" aria-hidden="true" />
                        <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats strip - ink-900 */}
        <section
          className="py-12 md:py-14"
          style={{ backgroundColor: 'var(--ink-900)' }}
        >
          <div className="container-width">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '5', label: 'Verification steps' },
                { value: '~35%', label: 'Applicant rejection' },
                { value: '£1M+', label: 'Minimum PI insurance' },
                { value: 'Annual', label: 'Re-verification cycle' },
              ].map((stat, i) => (
                <div key={i}>
                  <div
                    className="font-display italic text-[36px] md:text-[44px] leading-none mb-2"
                    style={{ color: '#AFA9EC' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-mono text-[11px] tracking-[0.15em] uppercase"
                    style={{ color: 'rgba(245, 242, 234, 0.82)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section
          className="py-14 md:py-18"
          style={{ backgroundColor: 'var(--paper-50)' }}
        >
          <div className="container-width max-w-3xl">
            <div className="text-center mb-8">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-sm mb-5"
                style={{ backgroundColor: 'var(--brand-50)' }}
              >
                <Shield className="w-6 h-6 text-brand-600" aria-hidden="true" />
              </div>
              <div className="flex items-center justify-center text-[10px] font-semibold tracking-[0.22em] uppercase text-ink-900 pb-3 mb-4 border-b border-ink-900/40 max-w-[200px] mx-auto">
                <span>&sect; 03 &nbsp;&middot;&nbsp; GUARANTEE</span>
              </div>
              <h2 className="font-display text-[28px] md:text-[34px] text-ink-900 mb-4 tracking-tight leading-tight">
                Our guarantee to <em className="text-brand-500 italic">UK startups.</em>
              </h2>
            </div>
            <div className="bg-white rounded-sm p-6 md:p-10 border border-ink-900/10 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
              <div className="space-y-4 font-sans text-[14.5px] text-ink-700 leading-[1.75]">
                <p>
                  When you request a match, you will only be connected with accountants who have passed every stage of our five-step process. Every recommendation will be ACA, ACCA, or CIMA qualified, carry a minimum of &pound;1,000,000 professional indemnity insurance, and have demonstrated startup-specific experience.
                </p>
                <p>
                  If you are not satisfied with any recommended accountant, we will provide alternative matches at no cost. Our service is free to founders, you only pay the accountant you choose, at the fee you agree directly with them.
                </p>
                <p className="font-display text-[15.5px] text-ink-900 tracking-tight pt-2">
                  We are a matching service, not an accountancy firm. We stake our reputation on the quality of our network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA - brand-500 */}
        <section
          className="py-20 md:py-24"
          style={{ backgroundColor: 'var(--brand-500)' }}
        >
          <div className="container-width text-center max-w-3xl">
            <span
              className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase mb-5"
              style={{ color: 'rgba(255, 255, 255, 0.75)' }}
            >
              &sect; READY TO MATCH?
            </span>
            <h2
              className="font-display text-[30px] md:text-[40px] leading-[1.0] tracking-tight mb-5"
              style={{ color: '#ffffff' }}
            >
              Ready to find a<br />vetted startup accountant?
            </h2>
            <p
              className="font-sans text-[15px] max-w-2xl mx-auto mb-8 leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.88)' }}
            >
              Every accountant in our network has cleared all five verification checks. Request your free, no-obligation match today.
            </p>
            <button
              onClick={openModal}
              className="bg-white font-sans font-medium text-[13px] py-4 px-10 rounded-sm hover:bg-paper-100 transition-colors uppercase tracking-[0.15em]"
              style={{ color: 'var(--brand-700)' }}
              type="button"
            >
              Request free match &nbsp;&rarr;
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
