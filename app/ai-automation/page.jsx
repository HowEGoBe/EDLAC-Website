import Link from 'next/link';
import PageHero from '@/components/page-hero';
import MotionSection from '@/components/motion-section';

export const metadata = {
  title: 'AI Automation',
  description: 'AI systems that convert customer conversations into revenue through automated qualification and follow-up workflows.',
  openGraph: {
    title: 'AI Systems That Turn Conversations Into Revenue',
    description: 'Diagnose leakage, implement AI workflows, and scale sales outcomes with EDLAC Algorithm.'
  }
};

export default function AIAutomationPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Automation"
        title="AI Systems That Turn Conversations Into Revenue"
        description="We architect full-funnel automation that responds instantly, qualifies leads intelligently, and keeps opportunities moving until close."
        cta={<Link href="/contact" className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950">Book Strategy Session</Link>}
      />

      <MotionSection className="section-shell"><div className="panel"><h2 className="section-title">Problem Diagnosis: Revenue Leakage</h2><p className="mt-4 text-slate-300 light:text-slate-700">Missed chats, delayed follow-up, and unstructured handoffs drain pipeline value. EDLAC identifies friction points and quantifies where deals are silently lost.</p></div></MotionSection>
      <MotionSection className="section-shell"><div className="panel"><h2 className="section-title">Solution Breakdown</h2><p className="mt-4 text-slate-300 light:text-slate-700">We deploy AI agents, routing logic, CRM synchronization, and escalation workflows that preserve context from first contact to conversion.</p></div></MotionSection>

      <MotionSection className="section-shell">
        <h2 className="section-title">Industry Use Cases</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {['Salon', 'Restaurant', 'Real Estate', 'Retail', 'Marketing Agency'].map((item) => <div key={item} className="panel"><h3 className="font-semibold text-white light:text-slate-900">{item}</h3><p className="mt-2 text-sm text-slate-300 light:text-slate-700">Customized funnel orchestration for {item.toLowerCase()} operators focused on predictable growth.</p></div>)}
        </div>
      </MotionSection>

      <MotionSection className="section-shell"><div className="panel"><h2 className="section-title">How It Works</h2><p className="mt-4 text-slate-300 light:text-slate-700">Connect channels, define qualification thresholds, activate automated follow-up, and monitor outcomes on executive dashboards.</p></div></MotionSection>
      <MotionSection className="section-shell"><div className="panel"><h2 className="section-title">Benefits</h2><p className="mt-4 text-slate-300 light:text-slate-700">Higher conversion rates, lower response times, improved lead accountability, and operational consistency across teams.</p></div></MotionSection>
      <MotionSection className="section-shell"><div className="panel"><h2 className="section-title">ROI Positioning</h2><p className="mt-4 text-slate-300 light:text-slate-700">Position automation as a revenue multiplier: recover missed intent, increase staff efficiency, and improve lifetime value through timely engagement.</p></div></MotionSection>
      <MotionSection className="section-shell"><div className="panel"><h2 className="section-title">Demo Placeholder</h2><p className="mt-4 text-slate-300 light:text-slate-700">Interactive product walkthrough slot for future embedded demo video or conversational sandbox.</p></div></MotionSection>

      <MotionSection className="section-shell pb-24">
        <div className="panel text-center">
          <h2 className="text-2xl font-semibold text-white light:text-slate-900">Build your conversion engine with EDLAC Algorithm</h2>
          <Link href="/contact" className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950">Book Strategy Session</Link>
        </div>
      </MotionSection>
    </>
  );
}
