import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  BriefcaseBusiness,
  Play,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const services = [
  { label: "GST Registration & Compliance", path: "/services#gst-registration" },
  { label: "GST Notices & Proceedings", path: "/services#gst-notices" },
  { label: "GST Appeals & Litigation", path: "/services#gst-appeals" },
  { label: "GST Refunds", path: "/services#gst-refunds" },
  { label: "Income Tax", path: "/services#income-tax" },
  { label: "Business Compliance", path: "/services#business-compliance" },
];

const resources = [
  { label: "Guides", path: "/resources/guides" },
  { label: "FAQs", path: "/resources/faqs" },
  { label: "Market Insights", path: "/resources/market-insights" },
  { label: "Calculators", path: "/resources/calculators" },
  { label: "Glossary", path: "/resources/glossary" },
];

const Footer = () => {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr_1fr_1.4fr] lg:gap-8">

          {/* Company Information */}
          <div>
            {/* Logo */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40">
                <div className="text-xl font-bold">
                  ◇
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-wide">
                  FINANCECO
                </h2>

                <p className="text-xs text-gray-300">
                  Plan Today, Prosper Tomorrow.
                </p>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-6 text-gray-300">
              We help individuals and businesses achieve financial clarity,
              grow wealth, and secure their future.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-5">
              <a
                href="/"
                aria-label="Website"
                className="text-gray-300 transition hover:text-white"
              >
                <Globe size={20} />
              </a>

              <a
                href="/services"
                aria-label="Business"
                className="text-gray-300 transition hover:text-white"
              >
                <BriefcaseBusiness size={20} />
              </a>

              <a
                href="/blog"
                aria-label="Video"
                className="text-gray-300 transition hover:text-white"
              >
                <Play size={20} />
              </a>

              <a
                href="/contact"
                aria-label="Chat"
                className="text-gray-300 transition hover:text-white"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide">
              Resources
            </h3>

            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide">
              Contact Us
            </h3>

            <div className="space-y-4">

              {/* Address */}
              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-gray-300"
                />

                <p className="text-sm leading-5 text-gray-300">
                  123 Finance Street,
                  <br />
                  New York, NY 10001
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="shrink-0 text-gray-300"
                />

                <a
                  href="tel:+12025550187"
                  className="text-sm text-gray-300 transition hover:text-white"
                >
                  +1 202 555 0187
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="shrink-0 text-gray-300"
                />

                <a
                  href="mailto:hello@financeco.com"
                  className="text-sm text-gray-300 transition hover:text-white"
                >
                  hello@financeco.com
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3">
                <Clock
                  size={20}
                  className="shrink-0 text-gray-300"
                />

                <p className="text-sm text-gray-300">
                  Mon - Fri, 9:00 AM - 6:00 PM
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;