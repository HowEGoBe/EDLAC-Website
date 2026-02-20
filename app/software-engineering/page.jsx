import Link from 'next/link';
import PageHero from '@/components/page-hero';
import MotionSection from '@/components/motion-section';

export const metadata = {
  title: 'Software Engineering',
  description: 'Enterprise software engineering services including custom systems, integrations, dashboards, and automation architecture.',
  openGraph: {
    title: 'Software Engineering Services by EDLAC Algorithm',
    description: 'Design and implement resilient software systems built for enterprise performance.'
  }
};

export default function SoftwareEngineeringPage() {
  const blocks = [
    'Custom Enterprise Solutions',
    'Platforms & Dashboards',
    'Systems Integration',
    'Workflow Automation',
    'Project Delivery Approach'
  ];

  return (
    <>
      <PageHero eyebrow="Software Engineering" title="Enterprise-grade software systems designed for dependable execution" description="We deliver architecture-first software products that align leadership goals with day-to-day operational reality." />
      <section className="section-shell grid gap-5 md:grid-cols-2">
        {blocks.map((block) => (
          <MotionSection key={block} className="panel">
            <h2 className="text-2xl font-semibold text-white light:text-slate-900">{block}</h2>
            <p className="mt-3 text-slate-300 light:text-slate-700">Structured discovery, robust implementation, and measurable adoption planning for lasting software outcomes.</p>
          </MotionSection>
        ))}
      </section>
      <MotionSection className="section-shell pb-24">
        <div className="panel flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-lg text-white light:text-slate-900">Need a trusted engineering partner for mission-critical systems?</p>
          <Link href="/contact" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950">Start a software consultation</Link>
        </div>
      </MotionSection>
    </>
  );
}
