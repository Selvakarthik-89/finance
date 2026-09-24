import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";


import ContactImage from "../../assets/contact-us.jpg";
export default function Contact() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] px-5 py-16 text-white sm:px-8 lg:py-20">
        <img
          src={ContactImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--navy)]/80" />

        <div className="relative z-10 mx-auto max-w-[1280px]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
            Get In Touch
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Have a question or looking for the right financial service?
            Get in touch with our team and let us understand how we can
            assist you.
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="px-5 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact Information */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
              Contact Information
            </p>

            <h2 className="mt-3 font-serif text-3xl text-[var(--navy)] sm:text-4xl">
              Let&apos;s Start a Conversation
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
              Whether you need professional guidance, have a business
              enquiry, or simply want to know more about our services,
              we are here to help.
            </p>

            <div className="mt-8 space-y-6">

              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-white">
                  <MapPin size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--navy)]">
                    Address
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    1, Dr Ambedkar Nagar,
                    <br />
                    JKR Complex, First Floor,
                    <br />
                    Wimco Nagar, Chennai 600057 <br />
                    Land mark : (opposite to wimco nagar metro depot)<br /> metro pillar number 268
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-white">
                  <Phone size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--navy)]">
                    Phone
                  </h3>

                  <a
                    href="tel:+918754545007"
                    className="mt-2 block text-sm text-slate-600 transition hover:text-[var(--gold)]"
                  >
                    +91 87545 45007
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-white">
                  <Mail size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--navy)]">
                    Email
                  </h3>

                  <a
                    href="mailto:guructprchennai@gmail.com"
                    className="mt-2 block break-all text-sm text-slate-600 transition hover:text-[var(--gold)]"
                  >
                    guructprchennai@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Enquiry Form */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
                Enquiry
              </p>

              <h2 className="mt-2 font-serif text-3xl text-[var(--navy)]">
                Send Us an Enquiry
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Fill in the details below and our team will get back to you.
              </p>
            </div>

            <form className="space-y-5">

              {/* Name + Business */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                  >
                    Business / Organization Name
                  </label>

                  <input
                    id="business"
                    name="business"
                    type="text"
                    placeholder="Business or organization"
                    className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]"
                  />
                </div>

              </div>

              {/* Mobile + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="mobile"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                  >
                    Mobile Number
                  </label>

                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]"
                  />
                </div>

              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                >
                  Service Required
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="financial-planning">
                    Financial Planning
                  </option>
                  <option value="investment-advisory">
                    Investment Advisory
                  </option>
                  <option value="tax-planning">
                    Tax Planning
                  </option>
                  <option value="business-consulting">
                    Business Consulting
                  </option>
                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700"
                >
                  Brief Description of Requirement
                </label>

                <textarea
                  id="description"
                  name="description"
                  rows="5"
                  placeholder="Please describe your requirement..."
                  className="w-full resize-none rounded-md border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)]"
                />
              </div>

              {/* Submit */}
                <button
                  type="submit"
                  className="text-white hover:bg-[var(--gold)] shrink-0 items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-4 py-2.5 text-xs font-semibold text-[var(--gold-light)] sm:px-5 sm:py-3 sm:text-sm lg:inline-flex xl:px-6 xl:py-3.5 2xl:px-7">
                  Send Enquiry
                  <Send size={15} />
                </button>


            </form>
          </div>

        </div>
      </section>

      {/* Map */}
      <section className="px-5 pb-16 sm:px-8 lg:pb-20">
        <div className="mx-auto max-w-[1280px]">

          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">
              Find Us
            </p>

            <h2 className="mt-2 font-serif text-3xl text-[var(--navy)] sm:text-4xl">
              Our Location
            </h2>
          </div>

          <div className="h-[350px] overflow-hidden rounded-xl border border-slate-200 shadow-sm sm:h-[450px]">
            <iframe
              title="Guru CTPR Chennai Location"
              src="https://www.google.com/maps?q=1%20Dr%20Ambedkar%20Nagar%2C%20JKR%20Complex%2C%20First%20Floor%2C%20Wimco%20Nagar%2C%20Chennai%20600057&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

    </main>
  );
}
