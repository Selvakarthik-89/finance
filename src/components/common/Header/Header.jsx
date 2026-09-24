import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Menu, X } from "lucide-react";

import Brand from "./components/Brand";
import DesktopNav from "./components/DesktopNav";
import MobileNav from "./components/MobileNav";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopResourcesOpen, setDesktopResourcesOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setServicesOpen(false);
        setResourcesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setResourcesOpen(false);
    setDesktopServicesOpen(false);
    setDesktopResourcesOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((previous) => !previous);
    setServicesOpen(false);
    setResourcesOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(3,24,51,0.06)]">
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20">
          <div className="flex min-h-[68px] items-center justify-between gap-4 sm:min-h-[74px] lg:min-h-[82px]">
            <Brand onClick={closeAllMenus} />

            <DesktopNav
              desktopServicesOpen={desktopServicesOpen}
              setDesktopServicesOpen={setDesktopServicesOpen}
              desktopResourcesOpen={desktopResourcesOpen}
              setDesktopResourcesOpen={setDesktopResourcesOpen}
            />

            <Link
              to="/book-consultation"
              className="hidden shrink-0 items-center justify-center gap-2 rounded-md bg-[var(--navy)] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[var(--gold)] sm:px-5 sm:py-3 sm:text-sm lg:inline-flex xl:px-6 xl:py-3.5 2xl:px-7"
            >
              <CalendarDays size={17} strokeWidth={1.8} />
              <span className="whitespace-nowrap">Book a Consultation</span>
            </Link>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 text-[var(--navy)] transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold)] sm:h-11 sm:w-11 lg:hidden"
            >
              {mobileMenuOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
            </button>
          </div>
        </div>

        <MobileNav
          mobileMenuOpen={mobileMenuOpen}
          servicesOpen={servicesOpen}
          setServicesOpen={setServicesOpen}
          resourcesOpen={resourcesOpen}
          setResourcesOpen={setResourcesOpen}
          closeAllMenus={closeAllMenus}
        />
      </header>

      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeAllMenus}
          className="fixed inset-0 z-40 bg-black/20 lg:hidden"
        />
      )}
    </>
  );
}
