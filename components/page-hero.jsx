export default function PageHero({ eyebrow, title, description, cta }) {
  return (
    <section className="section-shell pt-16">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl light:text-slate-900">{title}</h1>
      <p className="mt-6 max-w-3xl text-lg text-slate-300 light:text-slate-700">{description}</p>
      {cta}
    </section>
  );
}
