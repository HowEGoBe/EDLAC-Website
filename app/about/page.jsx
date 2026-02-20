import PageHero from '@/components/page-hero';
import MotionSection from '@/components/motion-section';

export const metadata = {
  title: 'About',
  description: 'Learn about EDLAC Algorithm, founded in 2017 by Oluwatosin Kolawole, and our evolution across software, energy, and AI.',
  openGraph: {
    title: 'About EDLAC Algorithm',
    description: 'Our story, founder background, and long-term vision for intelligent systems.'
  }
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Engineering the future of business operations since 2017" description="EDLAC Algorithm began as a software-focused company, expanded into renewable energy implementation, and evolved into an AI-forward systems partner." />
      <section className="section-shell grid gap-5 md:grid-cols-2 pb-24">
        <MotionSection className="panel"><h2 className="text-2xl font-semibold text-white light:text-slate-900">EDLAC Story</h2><p className="mt-3 text-slate-300 light:text-slate-700">Founded in 2017, EDLAC Algorithm was built to bridge strategic vision with real-world implementation in technical environments.</p></MotionSection>
        <MotionSection className="panel"><h2 className="text-2xl font-semibold text-white light:text-slate-900">Evolution</h2><p className="mt-3 text-slate-300 light:text-slate-700">We progressed from software implementation to energy infrastructure and now lead with AI-powered automation across business functions.</p></MotionSection>
        <MotionSection className="panel"><h2 className="text-2xl font-semibold text-white light:text-slate-900">Founder</h2><p className="mt-3 text-slate-300 light:text-slate-700">Oluwatosin Kolawole, with an engineering background in Electronics and Telecommunications, leads the company with a systems-first mindset.</p></MotionSection>
        <MotionSection className="panel"><h2 className="text-2xl font-semibold text-white light:text-slate-900">Vision</h2><p className="mt-3 text-slate-300 light:text-slate-700">To become the preferred technology execution partner for organizations seeking intelligent, sustainable, and scalable growth infrastructure.</p></MotionSection>
      </section>
    </>
  );
}
