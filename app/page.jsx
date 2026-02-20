import Link from 'next/link';
import MotionSection from '@/components/motion-section';
import { caseStudies, industries } from '@/lib/site-data';

export default function HomePage() {
  return (
    <>
      <section className="section-shell pt-20">
        <p className="mb-5 text-xs uppercase tracking-[0.24em] text-accent">Enterprise Transformation Partner</p>
        <h1 className="max-w-5xl text-4xl font-semibold leading-tight text-white md:text-6xl light:text-slate-900">
          We build intelligent systems that automate sales, operations, and growth.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-300 light:text-slate-700">
          EDLAC Algorithm empowers companies with AI automation, enterprise software systems, and renewable energy execution designed for long-term performance.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950">Book Strategy Session</Link>
          <Link href="/case-studies" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white light:border-slate-300 light:text-slate-900">View Case Studies</Link>
        </div>
      </section>

      <MotionSection className="section-shell">
        <h2 className="section-title">What We Do</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {['AI Automation & Intelligent Systems', 'Software Design, Development & Implementation', 'Renewable Energy Installation & Audit'].map((item) => (
            <article key={item} className="panel">
              <h3 className="text-lg font-semibold text-white light:text-slate-900">{item}</h3>
              <p className="mt-3 text-slate-300 light:text-slate-700">Built for measurable efficiency, predictable revenue progression, and operational resilience.</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section-shell">
        <div className="panel">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">AI Focus</p>
          <h2 className="mt-3 text-3xl font-semibold text-white light:text-slate-900">Conversation-to-revenue systems engineered for speed and precision.</h2>
          <p className="mt-4 max-w-3xl text-slate-300 light:text-slate-700">From lead capture to follow-up and qualification, our AI workflows reduce leakage and convert intent into action at scale.</p>
        </div>
      </MotionSection>

      <MotionSection className="section-shell">
        <h2 className="section-title">Industries Served</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry.name} className="panel">
              <h3 className="font-semibold text-white light:text-slate-900">{industry.name}</h3>
              <p className="mt-2 text-sm text-slate-300 light:text-slate-700">{industry.summary}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section-shell">
        <h2 className="section-title">Our Process</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {['Discover', 'Design', 'Deploy', 'Optimize'].map((step) => (
            <div key={step} className="panel text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">{step}</p>
              <p className="mt-3 text-sm text-slate-300 light:text-slate-700">Execution checkpoints and executive visibility at every phase.</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section-shell">
        <h2 className="section-title">Case Study Preview</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {caseStudies.slice(0, 2).map((item) => (
            <article key={item.title} className="panel">
              <h3 className="text-lg font-semibold text-white light:text-slate-900">{item.title}</h3>
              <p className="mt-2 text-accent">{item.result}</p>
              <p className="mt-3 text-slate-300 light:text-slate-700">{item.focus}</p>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section-shell pb-24">
        <div className="panel flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white light:text-slate-900">Ready to modernize growth operations?</h2>
            <p className="mt-2 text-slate-300 light:text-slate-700">Partner with EDLAC Algorithm to engineer high-performance systems for your business.</p>
          </div>
          <Link href="/contact" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950">Speak with our team</Link>
        </div>
      </MotionSection>
    </>
  );
}
