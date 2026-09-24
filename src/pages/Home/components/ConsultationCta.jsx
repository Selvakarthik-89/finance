import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

export default function ConsultationCta() {
  return (
    <section className="px-5 pb-2 sm:px-8">
      <div className="relative mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-7 overflow-hidden rounded-xl bg-[var(--navy)] px-7 py-8 text-white sm:flex-row sm:items-center sm:px-12 sm:py-10">
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 [background-image:linear-gradient(145deg,transparent_40%,#c9a15f_41%,transparent_42%),linear-gradient(25deg,transparent_60%,#c9a15f_61%,transparent_62%)]" />
        <div className="relative flex items-center gap-5"><CalendarDays size={44} strokeWidth={1.1} /><div><h2 className="font-serif text-2xl sm:text-3xl">Ready to Take Control of<br className="hidden sm:block" /> Your Financial Future?</h2><p className="mt-2 text-xs text-slate-300">Let&apos;s build a plan that works for you.</p></div></div>
        <Link to="/book-consultation" className="relative inline-flex items-center gap-3 rounded-sm bg-[var(--gold)] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[var(--gold-light)]">Book a consultation <ArrowRight size={14} /></Link>
      </div>
    </section>
  );
}
