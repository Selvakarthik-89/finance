const Blog = () => (
  <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <section className="space-y-6">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
        Insights
      </p>
      <h1 className="text-4xl font-bold text-[var(--navy)]">Latest articles</h1>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-[var(--navy)]">
          Financial planning for growth-stage businesses
        </h2>
        <p className="mt-3 text-slate-600">
          Learn how to plan ahead, manage priorities, and build sustainable momentum.
        </p>
      </div>
    </section>
  </main>
);

export default Blog;
