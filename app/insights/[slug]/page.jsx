import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/site-data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return { title: 'Insight' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article'
    }
  };
}

export default function InsightDetailPage({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) notFound();

  return (
    <article className="section-shell pb-24">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">{post.category}</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-semibold text-white md:text-5xl light:text-slate-900">{post.title}</h1>
      <p className="mt-4 text-sm text-slate-400 light:text-slate-600">Published {post.date}</p>
      <div className="mt-10 rounded-2xl border border-white/10 bg-panel/70 p-8 text-slate-300 light:border-slate-200 light:bg-white light:text-slate-700">
        <p>{post.excerpt}</p>
        <p className="mt-5">This placeholder article layout is built for future CMS integration, including category indexing, structured metadata, and internal linking strategy for search visibility.</p>
        <p className="mt-5">Each insight can be expanded with expert commentary, implementation examples, and conversion-focused calls to action that align with EDLAC Algorithm&apos;s service pillars.</p>
      </div>
    </article>
  );
}
