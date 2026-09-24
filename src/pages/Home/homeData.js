import {
  BarChart3,
  BriefcaseBusiness,
  FileText,
  HandCoins,
  PieChart,
  ShieldCheck,
  Target,
  Users,
  WalletCards,
} from "lucide-react";

export const services = [
  {
    title: "GST Compliance",
    description:
      "Registration, amendments, returns, annual returns, reconciliations and regular GST compliance.",
    icon: PieChart,
    path: "/services/service-1",
  },
  {
    title: "GST Notices & Assessments",
    description:
      "Professional assistance for scrutiny, show-cause notices, demand proceedings and departmental submissions.",
    icon: ShieldCheck,
    path: "/services/service-2",
  },
  {
    title: "GST Appeals & Representation",
    description:
      "Preparation and filing assistance for GST appeals, rectification matters and representation before appropriate authorities.",
    icon: Target,
    path: "/services/service-3",
  },
  {
    title: "GST Refunds",
    description:
      "Refund applications, supporting workings, documentation, deficiency responses and follow-up assistance.",
    icon: FileText,
    path: "/services/service-4",
  },
  {
    title: "Income Tax",
    description:
      "Income-tax returns, computations, presumptive taxation, TDS and related tax compliance.",
    icon: HandCoins,
    path: "/services",
  },
  {
    title: "Business Compliance",
    description:
      "PAN, TAN, Udyam, IEC/DGFT, trademark and other business registration/compliance assistance.",
    icon: BriefcaseBusiness,
    path: "/services",
  },
];

export const metrics = [
  { value: "10K+", label: "Happy Clients", icon: Users },
  { value: "25+", label: "Years of Experience", icon: BarChart3 },
  { value: "100%", label: "Client Satisfaction", icon: ShieldCheck },
  { value: "$2.4B+", label: "Assets Managed", icon: WalletCards },
];

export const insights = [
  { date: "May 20", title: "5 Investment Mistakes to Avoid in Volatile Markets", image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80" },
  { date: "May 15", title: "Retirement Planning: Start Today, Enjoy Tomorrow", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80" },
  { date: "May 10", title: "How Businesses Can Improve Cash Flow in 2024", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80" },
];

