import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { insights } from "../homeData";

export default function InsightsSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Latest insights</p><h2 className="mt-3 font-serif text-3xl text-[var(--navy)] sm:text-4xl">Smart Insights, Stronger Decisions</h2></div><Link to="/blog" className="inline-flex items-center gap-3 border border-slate-400 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--navy)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]">View all blogs <ArrowRight size={14} /></Link></div>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {insights.map((post) => <article key={post.title} className="overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><img src={post.image} alt="" loading="lazy" className="aspect-[1.85] w-full object-cover" /><div className="p-5"><div className="flex items-start gap-4"><div className="flex min-w-[38px] flex-col items-center border border-slate-200 text-xs font-bold uppercase text-[var(--navy)]"><span className="w-full bg-[var(--gold)] px-1 py-1 text-center text-white">May</span><span className="py-1 text-sm">{post.date.split(" ")[1]}</span></div><h3 className="font-serif text-base leading-5 text-[var(--navy)]">{post.title}</h3></div><Link to="/blog" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--navy)]">Read more <ArrowRight size={12} /></Link></div></article>)}
        </div>
      </div>
    </section>
  );
}
