import PageHero from '@/components/page-hero';
import MotionSection from '@/components/motion-section';
import { industries } from '@/lib/site-data';

export const metadata = {
  title: 'Industries',
  description: 'Explore the industries EDLAC Algorithm supports through AI automation, software engineering, and energy systems.',
  openGraph: {
    title: 'Industries Served by EDLAC Algorithm',
    description: 'Sector-focused technology execution for growth-focused organizations.'
  }
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Technology execution tailored to operational realities" description="Our multidisciplinary model lets us adapt solutions to industry-specific workflows, compliance contexts, and customer behavior." />
      <section className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3 pb-24">
        {industries.map((item) => (
          <MotionSection key={item.name} className="panel">
            <h2 className="text-xl font-semibold text-white light:text-slate-900">{item.name}</h2>
            <p className="mt-3 text-sm text-slate-300 light:text-slate-700">{item.summary}</p>
          </MotionSection>
        ))}
      </section>
    </>
  );
}
