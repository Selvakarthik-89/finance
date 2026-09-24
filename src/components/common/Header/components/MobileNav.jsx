import { Link, NavLink } from "react-router-dom";
import { CalendarDays, ChevronDown } from "lucide-react";

import { serviceItems } from "../data/navigation";

const mobileLinkClass = ({ isActive }) => [
  "flex w-full items-center py-4 text-sm sm:text-[15px] font-medium border-b border-slate-100 transition-colors duration-300",
  isActive ? "text-[var(--gold)]" : "text-[var(--navy)] hover:text-[var(--gold)]",
].join(" ");

export default function MobileNav({
  mobileMenuOpen,
  servicesOpen,
  setServicesOpen,
  closeAllMenus,
}) {
  return (
    <div
      className={`fixed inset-x-0 top-[68px] z-50 overflow-hidden border-t border-slate-200 bg-white shadow-lg transition-all duration-300 ease-in-out sm:top-[74px] lg:hidden ${
        mobileMenuOpen ? "max-h-[calc(100vh-68px)] opacity-100 sm:max-h-[calc(100vh-74px)]" : "max-h-0 opacity-0"
      }`}
    >
      <div className="max-h-[calc(100vh-68px)] overflow-y-auto overscroll-contain px-4 pb-6 pt-2 sm:max-h-[calc(100vh-74px)] sm:px-6 md:px-8">
        <nav className="flex flex-col">
          <NavLink to="/" onClick={closeAllMenus} className={mobileLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about-us" onClick={closeAllMenus} className={mobileLinkClass}>
            About Us
          </NavLink>

          <div className="border-b border-slate-100">
            <div className="flex w-full items-center justify-between py-4 text-sm font-medium text-[var(--navy)] sm:text-[15px]">
              <Link
                to="/services"
                onClick={closeAllMenus}
                className="transition-colors duration-300 hover:text-[var(--gold)]"
              >
                Services
              </Link>
              <button
                type="button"
                onClick={() => setServicesOpen((previous) => !previous)}
                className="p-1 transition-colors duration-300 hover:text-[var(--gold)]"
                aria-label="Toggle services menu"
                aria-expanded={servicesOpen}
              >
              <ChevronDown
                size={18}
                strokeWidth={1.8}
                className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : "rotate-0"}`}
              />
              </button>
            </div>

            <div className={`overflow-hidden transition-all duration-300 ${servicesOpen ? "max-h-[500px] pb-2" : "max-h-0"}`}>
              <div className="rounded-lg bg-slate-50 p-2">
                {serviceItems.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={closeAllMenus}
                    className="block rounded-md px-4 py-3 text-sm font-medium text-[var(--navy)] transition-all duration-200 hover:bg-white hover:text-[var(--gold)] sm:text-[15px]"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/contact" onClick={closeAllMenus} className={mobileLinkClass}>
            Contact
          </NavLink>

          <Link
            to="/book-consultation"
            onClick={closeAllMenus}
            className="mt-5 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--gold)] active:scale-[0.98]"
          >
            <CalendarDays size={17} strokeWidth={1.8} />
            <span>Book a Consultation</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
