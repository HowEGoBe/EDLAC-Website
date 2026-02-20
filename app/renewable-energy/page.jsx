import Link from 'next/link';
import PageHero from '@/components/page-hero';
import MotionSection from '@/components/motion-section';

export const metadata = {
  title: 'Renewable Energy',
  description: 'Renewable energy services including solar installation, hybrid systems, audits, and performance optimization.',
  openGraph: {
    title: 'Renewable Energy Solutions | EDLAC Algorithm',
    description: 'Deploy efficient energy infrastructure with data-led optimization and long-term support.'
  }
};

export default function RenewableEnergyPage() {
  const services = ['Solar Installation', 'Hybrid Systems', 'Energy Audit', 'Performance Optimization', 'Commercial & Residential Solutions'];

  return (
    <>
      <PageHero eyebrow="Renewable Energy" title="Energy systems engineered for reliability, sustainability, and cost control" description="From audit to implementation, EDLAC Algorithm helps organizations and households modernize their energy infrastructure." />
      <section className="section-shell grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <MotionSection key={service} className="panel">
            <h2 className="text-2xl font-semibold text-white light:text-slate-900">{service}</h2>
            <p className="mt-3 text-slate-300 light:text-slate-700">Performance-focused planning and installation with transparent benchmarks and optimization checkpoints.</p>
          </MotionSection>
        ))}
      </section>
      <MotionSection className="section-shell pb-24">
        <div className="panel text-center">
          <p className="text-lg text-white light:text-slate-900">Plan your next renewable project with confidence.</p>
          <Link href="/contact" className="mt-5 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950">Request an energy consultation</Link>
        </div>
      </MotionSection>
    </>
  );
}
