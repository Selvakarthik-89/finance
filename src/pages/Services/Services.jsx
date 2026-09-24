import {
  ArrowRight,
  BriefcaseBusiness,
  FileCheck2,
  FileText,
  Gavel,
  ReceiptText,
  RefreshCcw,
} from "lucide-react";
import ContactImage from "../../assets/contact-us.jpg";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const services = [
  {
    id: "gst-registration",
    number: "01",
    title: "GST Registration & Compliance",
    icon: FileCheck2,
    items: [
      "GST Registration and amendments",
      "Cancellation and revocation",
      "GSTR-1 and GSTR-3B",
      "CMP-08 and GSTR-4",
      "GSTR-9 / GSTR-9C",
      "Input Tax Credit reconciliation",
      "Electronic Credit Ledger matters",
      "Reverse Charge Mechanism (RCM)",
      "GTA compliance",
      "Job Work / ITC-04",
      "E-Way Bill and E-Invoice matters",
    ],
  },
  {
    id: "gst-notices",
    number: "02",
    title: "GST Notices & Departmental Proceedings",
    icon: FileText,
    items: [
      "ASMT-10 / ASMT-11",
      "DRC-01A",
      "DRC-01",
      "DRC-06",
      "DRC-07",
      "ITC mismatch proceedings",
      "Rule 86A matters",
      "Rule 86B compliance",
      "Interest and penalty matters",
      "Input Tax Credit disputes",
      "Cancellation-related proceedings",
    ],
  },
  {
    id: "gst-appeals",
    number: "03",
    title: "GST Appeals & Litigation Support",
    icon: Gavel,
    items: [
      "APL-01",
      "Appeal documentation",
      "Pre-deposit workings",
      "Condonation petitions",
      "Rectification applications",
      "Representation before GST authorities",
      "Tax and documentation support in matters requiring further legal proceedings",
    ],
  },
  {
    id: "gst-refunds",
    number: "04",
    title: "GST Refunds",
    icon: RefreshCcw,
    items: [
      "RFD-01 applications",
      "Refund workings",
      "Supporting documents",
      "Deficiency memo responses",
      "Refund follow-up",
      "Refund arising from appellate orders",
    ],
  },
  {
    id: "income-tax",
    number: "05",
    title: "Income Tax",
    icon: ReceiptText,
    items: [
      "Income Tax Return filing for applicable categories of taxpayers",
      "Presumptive taxation - Sections 44AD and 44ADA",
      "Capital gains computation and supporting documentation",
      "TDS-related computations, returns and compliance assistance",
      "Business income computation, expense review and depreciation workings",
      "Tax audit preparation / coordination wherever applicable",
    ],
  },
  {
    id: "business-compliance",
    number: "06",
    title: "Business Compliance",
    icon: BriefcaseBusiness,
    items: [
      "PAN & TAN",
      "Udyam Registration",
      "IEC / DGFT",
      "Trademark assistance",
      "DARPAN ID",
      "ESI / PF assistance",
      "LLP / Company compliance coordination",
      "Other business registrations and compliance assistance",
    ],
  },
];

const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const target = document.getElementById(hash.slice(1));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <main className="bg-white">

      {/* Page Header */}
      <section className="relative overflow-hidden bg-[var(--navy)] px-5 py-16 text-white sm:px-8 lg:py-20">
        <img
          src={ContactImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--navy)]/80" />

        <div className="relative z-10 mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">
            Our Services
          </p>

          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl">
            Tax & Business
            <br />
            Compliance Services
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Professional support for GST, Income Tax, business registrations,
            compliance and related tax matters.
          </p>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-[1280px] overflow-x-auto px-5 sm:px-8">
          <nav className="flex min-w-max gap-6 py-4">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="whitespace-nowrap text-xs font-semibold text-slate-600 transition-colors hover:text-[var(--gold)]"
              >
                {service.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px] space-y-10">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-24 overflow-hidden rounded-xl border border-slate-200"
              >
                <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

                  {/* Service Header */}
                  <div className="bg-[var(--navy)] p-7 text-white sm:p-10">

                    <div className="flex items-center justify-between">
                      <span className="text-sm tracking-[0.2em] text-[var(--gold-light)]">
                        {service.number}
                      </span>

                      <Icon
                        size={30}
                        strokeWidth={1.2}
                        className="text-[var(--gold-light)]"
                      />
                    </div>

                    <h2 className="mt-8 font-serif text-3xl leading-tight sm:text-4xl">
                      {service.title}
                    </h2>

                    <a
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--gold-light)]"
                    >
                      Enquire Now
                      <ArrowRight size={14} />
                    </a>
                  </div>

                  {/* Service Items */}
                  <div className="p-7 sm:p-10">

                    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
                      Services Covered
                    </p>

                    <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 border-b border-slate-100 pb-3"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />

                          <span className="text-sm leading-6 text-slate-600">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              </section>
            );
          })}

        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-8 lg:pb-20">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 rounded-xl bg-[var(--navy)] px-7 py-8 sm:flex-row sm:items-center sm:px-10">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-light)]">
              Need Assistance?
            </p>

            <h2 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
              Let&apos;s discuss your requirement.
            </h2>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 rounded-md bg-[var(--gold-light)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--navy)]"
          >
            Contact Us
            <ArrowRight size={15} />
          </a>

        </div>
      </section>

    </main>
  );
};

export default Services;