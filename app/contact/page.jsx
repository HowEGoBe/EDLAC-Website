import Link from 'next/link';
import PageHero from '@/components/page-hero';

export const metadata = {
  title: 'Contact',
  description: 'Contact EDLAC Algorithm to discuss AI automation, software systems, and renewable energy projects.',
  openGraph: {
    title: 'Contact EDLAC Algorithm',
    description: 'Book a strategy session with our technology execution team.'
  }
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let&apos;s architect your next growth system" description="Share your priorities and our team will coordinate a strategic consultation." />
      <section className="section-shell pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <form className="panel space-y-4" aria-label="Contact form">
            <div>
              <label className="mb-1 block text-sm text-slate-300 light:text-slate-700" htmlFor="name">Full name</label>
              <input id="name" className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm outline-none ring-accent focus:ring-2 light:border-slate-300 light:bg-white" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-300 light:text-slate-700" htmlFor="email">Work email</label>
              <input id="email" type="email" className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm outline-none ring-accent focus:ring-2 light:border-slate-300 light:bg-white" placeholder="name@company.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-300 light:text-slate-700" htmlFor="msg">Project goals</label>
              <textarea id="msg" rows={5} className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3 text-sm outline-none ring-accent focus:ring-2 light:border-slate-300 light:bg-white" placeholder="Tell us what you want to automate or build." />
            </div>
            <button type="button" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950">Send inquiry</button>
          </form>
          <div className="panel">
            <h2 className="text-2xl font-semibold text-white light:text-slate-900">Direct channels</h2>
            <p className="mt-4 text-slate-300 light:text-slate-700">Email: contact@edlacalgorithm.com</p>
            <Link href="https://wa.me/2340000000000" className="mt-4 inline-block rounded-full border border-accent px-5 py-2 text-sm font-semibold text-accent">Chat on WhatsApp</Link>
            <p className="mt-6 text-sm text-slate-400 light:text-slate-600">All inquiries are reviewed by our strategy and delivery leadership team.</p>
          </div>
        </div>
      </section>
    </>
  );
}
