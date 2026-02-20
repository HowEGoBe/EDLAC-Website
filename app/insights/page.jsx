import Link from 'next/link';
import PageHero from '@/components/page-hero';
import MotionSection from '@/components/motion-section';
import { blogPosts } from '@/lib/site-data';

export const metadata = {
  title: 'Insights',
  description: 'Insights from EDLAC Algorithm on AI automation, software architecture, and energy systems performance.',
  openGraph: {
    title: 'Insights | EDLAC Algorithm',
    description: 'SEO-ready blog structure for thought leadership and strategic guidance.'
  }
};

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Strategic thinking for intelligent operations" description="Perspectives on automation, engineering execution, and performance-led innovation." />
      <section className="section-shell grid gap-5 pb-24">
        {blogPosts.map((post) => (
          <MotionSection key={post.slug} className="panel">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">{post.category}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white light:text-slate-900">{post.title}</h2>
            <p className="mt-3 text-slate-300 light:text-slate-700">{post.excerpt}</p>
            <Link href={`/insights/${post.slug}`} className="mt-5 inline-block text-sm font-semibold text-accent">Read insight →</Link>
          </MotionSection>
        ))}
      </section>
    </>
  );
}
