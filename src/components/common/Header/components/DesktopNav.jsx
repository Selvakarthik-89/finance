import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import { serviceItems } from "../data/navigation";

const desktopLinkClass = ({ isActive }) => [
  "relative inline-flex items-center py-2 text-[13px] sm:text-sm xl:text-[15px] font-medium whitespace-nowrap transition-colors duration-300",
  isActive ? "text-[var(--gold)]" : "text-[var(--navy)] hover:text-[var(--gold)]",
].join(" ");

export default function DesktopNav({
  desktopServicesOpen,
  setDesktopServicesOpen,
}) {
  return (
    <nav className="hidden lg:flex lg:items-center lg:justify-center lg:gap-5 xl:gap-7 2xl:gap-10">
      <NavLink to="/" className={desktopLinkClass}>
        Home
      </NavLink>

      <NavLink to="/about-us" className={desktopLinkClass}>
        About Us
      </NavLink>

      <div
        className="relative"
        onMouseEnter={() => setDesktopServicesOpen(true)}
        onMouseLeave={() => setDesktopServicesOpen(false)}
      >
        <div className="inline-flex items-center gap-1">
          <Link
            to="/services"
            className="py-2 text-sm font-medium text-[var(--navy)] transition-colors duration-300 hover:text-[var(--gold)] xl:text-[15px]"
          >
            Services
          </Link>
          <button
            type="button"
            onClick={() => setDesktopServicesOpen((previous) => !previous)}
            className="inline-flex items-center py-2 text-[var(--navy)] transition-colors duration-300 hover:text-[var(--gold)]"
            aria-label="Toggle services menu"
            aria-expanded={desktopServicesOpen}
          >
          <ChevronDown
            size={16}
            strokeWidth={1.8}
            className={`transition-transform duration-300 ${desktopServicesOpen ? "rotate-180" : "rotate-0"}`}
          />
          </button>
        </div>

        <div
          className={`absolute left-1/2 top-full w-[230px] -translate-x-1/2 pt-3 transition-all duration-200 ${
            desktopServicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-[0_15px_40px_rgba(0,0,0,0.10)] ring-1 ring-slate-100">
            {serviceItems.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                onClick={() => setDesktopServicesOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-[var(--navy)] transition-all duration-200 hover:bg-slate-50 hover:pl-5 hover:text-[var(--gold)] xl:text-[15px]"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <NavLink to="/contact" className={desktopLinkClass}>
        Contact
      </NavLink>
    </nav>
  );
}
