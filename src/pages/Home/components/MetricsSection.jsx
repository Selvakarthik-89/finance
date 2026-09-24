import { metrics } from "../homeData";

export default function MetricsSection() {
  return (
    <section className="bg-white px-5 py-10 sm:px-8 md:py-14 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="overflow-hidden rounded-[28px] bg-[#031B3F] shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map(({ value, label, icon: Icon }, index) => (
              <div
                    key={label}
                    className={`
                        relative flex flex-col items-center justify-center
                        px-6 py-10 text-center
                        ${index !== 3 ? "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-[70%] lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-white/20" : ""}
                        ${index < 2 ? "border-b border-white/15 lg:border-b-0" : ""}
                    `}
                    >
                {/* Gold Icon */}
                <Icon
                  size={56}
                  strokeWidth={1.5}
                  className="mb-5 text-[#D4A44D]"
                />

                {/* Number */}
                <h3 className="font-serif text-[34px] font-semibold leading-none text-white md:text-[42px] lg:text-[46px]">
                  {value}
                </h3>

                {/* Label */}
                <p className="mt-4 max-w-[220px] text-sm font-medium leading-6 text-[#E5B965] sm:text-base">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}