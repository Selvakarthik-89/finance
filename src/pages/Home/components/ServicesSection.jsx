import { Link } from "react-router-dom";

import { services } from "../homeData";

export default function ServicesSection() {
  return (
    <section className="bg-[#f7f8fa] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
         <p> <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
            What we offer
          </span> </p>

          <h2 className="mt-3 font-serif text-3xl text-[var(--navy)] sm:text-4xl">
            Comprehensive Financial Solutions
          </h2>

          <p className="text-sm text-xl text-slate-500">
            Tailored strategies. Transparent advice. Lasting impact.
          </p>
        </div>

        <div className="mt-10 overflow-hidden">
          <div className="services-marquee-track flex w-max gap-3">
            {[...services, ...services].map(({ title, description, icon: Icon, path }, index) => (
              <Link
                key={`${title}-${index}`}
                to={path}
                className="group flex min-h-[300px] w-[280px] shrink-0 flex-col items-center rounded-md border border-[#eaeaea] bg-white px-7 py-7 text-center shadow-[0_4px_15px_rgba(3,24,51,0.025)] transition duration-300 hover:-translate-y-1 hover:border-[var(--gold-light)] hover:shadow-lg sm:min-h-[260px] sm:w-[300px] lg:min-h-[280px] lg:w-[240px]"
              >
                <Icon size={48} strokeWidth={1.2} className="text-[var(--gold)]" />
                <h3 className="pt-8 pb-4 font-serif text-base text-[var(--navy)]">{title}</h3>
                <p className="mt-3 text-xs leading-5 text-slate-500">{description}</p>
                {/* <span className="mt-auto flex items-center gap-2 pt-5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--navy)]">
                  Learn more
                  <ArrowRight size={12} className="transition group-hover:translate-x-1" />
                </span> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}