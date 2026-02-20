import PageHero from '@/components/page-hero';
import MotionSection from '@/components/motion-section';
import { caseStudies } from '@/lib/site-data';

export const metadata = {
  title: 'Case Studies',
  description: 'Review EDLAC Algorithm case studies across AI automation, enterprise software, and renewable energy delivery.',
  openGraph: {
    title: 'Case Studies | EDLAC Algorithm',
    description: 'Structured project outcomes highlighting measurable business impact.'
  }
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero eyebrow="Case Studies" title="Proof of execution across automation, engineering, and energy" description="A preview of how EDLAC Algorithm translates strategy into measurable outcomes for growth-focused teams." />
      <section className="section-shell grid gap-5 md:grid-cols-2 pb-24">
        {caseStudies.map((study) => (
          <MotionSection key={study.title} className="panel">
            <h2 className="text-xl font-semibold text-white light:text-slate-900">{study.title}</h2>
            <p className="mt-2 text-sm font-medium text-accent">{study.result}</p>
            <p className="mt-3 text-sm text-slate-300 light:text-slate-700">{study.focus}</p>
          </MotionSection>
        ))}
      </section>
    </>
  );
}
