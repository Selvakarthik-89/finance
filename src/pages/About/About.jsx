import { ArrowRight, BookOpenCheck, FileCheck2, FolderSearch, History, Scale, Send } from "lucide-react";
import { Link } from "react-router-dom";

import ContactImage from "../../assets/contact-us.jpg";
import ComplianceImage from "../../assets/images/Compliance.png";
import FinanceImage from "../../assets/images/Finance1.png";
import AboutImage from "../../assets/images/about_img.jpg";

const approachSteps = [
  { title: "Understand", text: "We begin with the facts, context, and practical needs behind each matter.", icon: FolderSearch },
  { title: "Examine", text: "We review applicable statutory provisions, records, and supporting evidence carefully.", icon: BookOpenCheck },
  { title: "Prepare", text: "We build clear reconciliations, documentation, and responses suited to the requirement.", icon: FileCheck2 },
  { title: "Assist", text: "We help clients address tax and compliance matters in a structured, informed way.", icon: Send },
];

export default function About() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[var(--navy)] px-5 py-20 text-white sm:px-8 sm:py-24 lg:py-28">
        <img src={ContactImage} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--navy)]/80" />
        <div className="relative z-10 mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold-light)]">About us</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">Built on trust.<br /><span className="text-[var(--gold-light)]">Guided by clarity.</span></h1>
          {/* <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">A professional practice shaped by experience, careful thinking, and a lasting commitment to helping clients meet their tax and compliance responsibilities with confidence.</p> */}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[500px] pl-3 sm:pl-8">
            <div className="absolute bottom-[-14px] left-0 h-32 w-12 rounded-l-3xl bg-[var(--gold)] sm:h-44 sm:w-16" />
            <img src={FinanceImage} alt="Professionals discussing financial records" className="relative z-10 aspect-[1.08] w-full rounded-xl object-cover shadow-lg" />
            <div className="absolute -bottom-8 right-0 z-20 rounded-xl border-4 border-white bg-[var(--navy)] px-5 py-4 text-white shadow-xl sm:right-[-18px] sm:px-7 sm:py-5">
              <p className="font-serif text-3xl text-[var(--gold-light)]">1976</p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-300">Our beginning</p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Our legacy</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[var(--navy)] sm:text-5xl">A Professional Legacy Since 1976</h2>
            <p className="mt-6 text-sm leading-7 text-slate-600">Our firm traces its professional roots to 1976. Across the years, the practice has continued through generations, carrying forward a standard of careful work, dependable advice, and respect for every client&apos;s circumstances.</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">That legacy belongs to the firm and the practice built over time. It should not be confused with the personal years of experience of any one individual practitioner. Today, our team continues that professional tradition with current knowledge, practical attention, and a clear focus on the work in front of each client.</p>
            <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
              <div><History size={22} className="text-[var(--gold)]" /><p className="mt-3 font-serif text-xl text-[var(--navy)]">Since 1976</p><p className="mt-1 text-xs text-slate-500">A continuing firm legacy</p></div>
              <div><Scale size={22} className="text-[var(--gold)]" /><p className="mt-3 font-serif text-xl text-[var(--navy)]">Clear advice</p><p className="mt-1 text-xs text-slate-500">Grounded in the facts</p></div>
              <div><FileCheck2 size={22} className="text-[var(--gold)]" /><p className="mt-3 font-serif text-xl text-[var(--navy)]">Structured work</p><p className="mt-1 text-xs text-slate-500">Documentation that holds</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">Our approach</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[var(--navy)] sm:text-5xl">Compliance with Clarity</h2>
            <p className="mt-6 text-sm leading-7 text-slate-600">Our approach is centred on understanding the facts of each case, examining the applicable statutory provisions and records, preparing appropriate reconciliations and documentation, and assisting clients in addressing their tax and compliance requirements in a structured manner.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {approachSteps.map(({ title, text, icon: Icon }) => <div key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"><Icon size={22} className="text-[var(--gold)]" /><h3 className="mt-4 font-serif text-xl text-[var(--navy)]">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{text}</p></div>)}
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -right-3 -top-3 h-full w-full rounded-xl border border-[var(--gold)] sm:-right-5 sm:-top-5" />
            <img src={ComplianceImage} alt="Compliance records and review process" className="relative z-10 aspect-[1.25] w-full rounded-xl object-cover shadow-lg" />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 rounded-2xl bg-[var(--navy)] px-7 py-10 text-white sm:px-12 sm:py-14 lg:grid-cols-[1fr_auto] lg:px-16">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold-light)]">A dependable next step</p><h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">Let&apos;s bring clarity to your next compliance requirement.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">Share the details of your situation with our team and we&apos;ll help you understand the practical path forward.</p></div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-sm bg-[var(--gold)] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition hover:bg-[var(--gold-light)]">Start a conversation <ArrowRight size={15} /></Link>
        </div>
      </section>
    </main>
  );
}
