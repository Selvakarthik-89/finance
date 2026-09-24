import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { Link } from "react-router-dom";

import Finance2 from "../../../assets/images/Finance2.png";
import Finance1 from "../../../assets/images/Finance1.png";

const highlights = [
  "Fiduciary responsibility — your best interests come first",
  "Personalized strategies for every stage of life",
  "Transparent advice with no hidden fees",
];

export default function AboutSection() {
  return (
    <section className="overflow-hidden bg-[#f7f8fa] px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-22 md:gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-22">
        
        {/* =========================
            LEFT IMAGE SECTION
        ========================== */}
        <div className="relative mx-auto w-full max-w-[510px] px-2 sm:px-4 md:px-6 lg:px-0">
          
          {/* Gold Decorative Shape */}
          {/* <div className="absolute bottom-[-8px] left-0 h-24 w-9 rounded-l-3xl bg-[var(--gold)] sm:h-32 sm:w-12 md:h-36 md:w-14 lg:w-16" /> */}
          <div className="absolute left-[-30px] top-1/2 h-24 w-9 -translate-y-1/2 rounded-l-3xl bg-[var(--gold)] sm:h-32 sm:w-12 md:h-36 md:w-14 lg:w-16" />

          {/* Image Wrapper */}
          <div className="relative z-10">
            
            {/* Main Image */}
            <img
              src={Finance1}
              alt="Finance team collaborating in an office"
              className="
                h-[340px]
                w-full
                rounded-xl
                object-cover
                shadow-md
                sm:h-[400px]
                md:h-[460px]
                lg:h-[500px]
              "
            />

            {/* Overlapping Image */}
            <div className="
                absolute
                -bottom-8
                -right-3
                z-20
                w-[42%]
                sm:-right-5
                sm:-bottom-9
                sm:w-[43%]
                md:-right-7
                md:-bottom-10
                md:w-[45%]
                lg:-right-10
                lg:-bottom-10
                lg:w-[48%]
              "
            >
              <img
                src={Finance2}
                alt="Financial team meeting"
                className="
                aspect-[4/3]
                w-full
                rounded-xl
                border-4
                border-[#f7f8fa]
                object-cover
                shadow-lg"
              />
            </div>
          </div>

          {/* Decorative Dots */}
          <div
            className="
              absolute
              right-0
              top-2
              grid
              grid-cols-4
              gap-1.5
              opacity-60
              sm:right-0
              sm:top-2
              sm:gap-4
              md:-right-2
              lg:-right-20
            "
          >
            {Array.from({ length: 32 }).map((_, index) => (
                <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]"
                />
            ))}
          </div>
        </div>

        {/* =========================
            RIGHT CONTENT
        ========================== */}
        <div className="w-full max-w-xl lg:max-w-none">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
            About us
          </p>

          <h2
            className="
              mt-3
              font-serif
              text-3xl
              leading-[1.15]
              text-[var(--navy)]
              sm:text-4xl
              md:text-[2.6rem]
              lg:text-4xl
            "
          >
            Your Financial Success
            <br />
            <span className="text-[var(--gold)]">
              Is Our Mission
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:mt-6">
            At FinanceCo, we believe financial success isn&apos;t just about
            money—it&apos;s about freedom, security, and peace of mind. We
            partner with you to create a plan that fits your life today and
            your dreams for tomorrow.
          </p>

          {/* Highlights */}
          <ul className="mt-5 space-y-3 text-xs leading-5 text-slate-600 sm:mt-6">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2"
              >
                <CheckCircle2
                  size={15}
                  className="mt-0.5 shrink-0 text-[var(--gold)]"
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
         <Link
  to="/about-us"
  className="
    mt-7
    inline-flex
    items-center
    gap-3
    rounded-sm
    bg-[var(--navy)]
    px-5
    py-3
    text-xs
    font-bold
    uppercase
    tracking-[0.1em]
    !text-white
    transition
    hover:bg-[var(--gold)]
    sm:mt-8
  "
>
  <span className="!text-white">Learn more about us</span>

  <ArrowRight
    size={14}
    className="!text-white"
  />
</Link>
        </div>
      </div>

      {/* =========================
          QUOTE CARD
      ========================== */}
      <div
        className="
          mx-auto
          mt-14
          flex
          w-full
          max-w-[1180px]
          justify-center
          sm:mt-16
          md:justify-end
          lg:mt-[-263px]
        "
      >
       <div className="w-[150px] h-[300px] rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm flex flex-col items-center justify-center">
  <Quote
    size={24}
    className="text-[var(--gold)]"
  />

  <p className="mt-4 font-serif text-sm italic leading-6 text-[var(--navy)]">
    A goal without a plan is just a wish.
  </p>

  <p className="mt-4 text-xs text-slate-500">
    — Antoine de Saint-Exupéry
  </p>
</div>
      </div>
    </section>
  );
}