import { Link } from "react-router-dom";

export default function Brand({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex shrink-0 items-center"
    >
      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-[0.08em] text-[var(--navy)] transition-colors duration-300 group-hover:text-[var(--gold)] min-[375px]:text-xl sm:text-2xl lg:text-[26px] xl:text-[28px]">
          LOGO
        </span>
        <span className="mt-1 text-[6px] font-medium tracking-[0.20em] text-[var(--gold)] min-[375px]:text-[7px] sm:text-[8px] lg:text-[9px] xl:text-[10px]">
          YOUR BRAND
        </span>
      </div>
    </Link>
  );
}
