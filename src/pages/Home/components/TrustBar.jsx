import brand01 from "../../../assets/brand-logos/brand_01.png";
import brand02 from "../../../assets/brand-logos/brand_02.png";
import brand03 from "../../../assets/brand-logos/brand_03.png";
import brand04 from "../../../assets/brand-logos/brand_04.png";
import brand05 from "../../../assets/brand-logos/brand_05.png";
import brand06 from "../../../assets/brand-logos/brand_06.png";
import brand07 from "../../../assets/brand-logos/brand_07.png";
import brand08 from "../../../assets/brand-logos/brand_08.png";
import brand09 from "../../../assets/brand-logos/brand_09.png";

const brandLogos = [brand01, brand02, brand03, brand04, brand05, brand06, brand07, brand08, brand09];

export default function TrustBar() {
  return (
    <section className="relative z-20 mx-auto -mt-7 max-w-[1280px] px-5 sm:-mt-10 sm:px-8 lg:px-10">
      <div className="rounded-2xl bg-white px-5 py-6 shadow-[0_12px_35px_rgba(3,24,51,0.08)] sm:px-10 sm:py-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-[var(--navy)]">Trusted by individuals &amp; businesses</p>

        <div className="mt-5 overflow-hidden" aria-label="Trusted brands">
          <div className="brand-marquee-track flex w-[900%] sm:w-[450%] lg:w-[300%]">
            {[...brandLogos, ...brandLogos].map((logo, index) => (
              <div key={`${logo}-${index}`} className="flex h-9 w-[5.5556%] shrink-0 items-center justify-center px-2 sm:h-10">
                <img src={logo} alt="Trusted partner logo" className="max-h-8 w-auto max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
