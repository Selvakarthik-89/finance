import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import heroBanner01 from "../../../assets/Hero-banner-01.jpg";
import heroBanner02 from "../../../assets/Hero-banner-02.jpg";
import heroBanner03 from "../../../assets/Hero-banner-03.jpg";
import heroBanner04 from "../../../assets/Hero-banner-04.jpg";
import heroBanner05 from "../../../assets/Hero-banner-05.jpg";

const heroBanners = [
  { src: heroBanner01, alt: "Financial planning and advisory services" },
  { src: heroBanner02, alt: "Financial clarity for growing businesses" },
  { src: heroBanner03, alt: "Personalized wealth management" },
  { src: heroBanner04, alt: "Confident financial decisions" },
  { src: heroBanner05, alt: "Long-term financial success" },
];

const transitionDuration = 700;

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [targetSlide, setTargetSlide] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [timerReset, setTimerReset] = useState(0);

  const slideTo = (nextSlide) => {
    if (isTransitioning) return;

    if (nextSlide === activeSlide) {
      setTimerReset((value) => value + 1);
      return;
    }

    setTargetSlide(nextSlide);
    setIsTransitioning(true);
    setTimerReset((value) => value + 1);
  };

  useEffect(() => {
    if (!isTransitioning) return undefined;

    const frame = window.requestAnimationFrame(() => {
      setIsAnimating(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isTransitioning]);

  useEffect(() => {
    if (!isAnimating || targetSlide === null) return undefined;

    const timer = window.setTimeout(() => {
      setActiveSlide(targetSlide);
      setTargetSlide(null);
      setIsAnimating(false);
      setIsTransitioning(false);
    }, transitionDuration);

    return () => window.clearTimeout(timer);
  }, [isAnimating, targetSlide]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!isTransitioning) {
        setTargetSlide((activeSlide + 1) % heroBanners.length);
        setIsTransitioning(true);
      }
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeSlide, isTransitioning, timerReset]);

  const displayedBanners = targetSlide === null
    ? [heroBanners[activeSlide]]
    : [heroBanners[activeSlide], heroBanners[targetSlide]];

  return (
    <section className="relative h-[280px] overflow-hidden bg-slate-100 sm:h-[360px] lg:h-[500px]" aria-label="Featured financial services">
      <div className={`flex h-full w-full ${isAnimating ? "-translate-x-full transition-transform duration-700 ease-in-out" : "translate-x-0 transition-none"}`}>
        {displayedBanners.map((banner, index) => (
          <div key={`${banner.src}-${index}`} className="h-full min-w-full shrink-0">
            <img src={banner.src} alt={banner.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => slideTo((activeSlide - 1 + heroBanners.length) % heroBanners.length)}
        aria-label="Previous banner"
        className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--navy)]/80 text-white transition hover:bg-[var(--gold)] sm:left-6"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={() => slideTo((activeSlide + 1) % heroBanners.length)}
        aria-label="Next banner"
        className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--navy)]/80 text-white transition hover:bg-[var(--gold)] sm:right-6"
      >
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2" aria-label="Banner slides">
        {heroBanners.map((banner, index) => (
          <button
            key={banner.src}
            type="button"
            onClick={() => slideTo(index)}
            aria-label={`Show banner ${index + 1}`}
            aria-current={activeSlide === index ? "true" : undefined}
            className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-7 bg-[var(--gold)]" : "w-2 bg-white/80"}`}
          />
        ))}
      </div>
    </section>
  );
}
