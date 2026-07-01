import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { absoluteUrl } from "@/lib/site";
import { Check } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Packages — BrainBoxWorld" },
      { name: "description", content: "Choose your digital marketing package. Starter, Professional and Enterprise plans designed to grow your business online." },
      { property: "og:title", content: "Digital Marketing Packages — BrainBoxWorld" },
      { property: "og:description", content: "Transparent pricing for SEO, web development and digital marketing services." },
      { property: "og:url", content: absoluteUrl("/packages") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/packages") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: plans.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: p.name,
              description: p.subtitle,
              brand: { "@type": "Brand", name: "BrainBoxWorld" },
              offers: {
                "@type": "Offer",
                price: p.price.replace(/[^0-9.]/g, ""),
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            },
          })),
        }),
      },
    ],
  }),
  component: PackagesPage,
});

const plans = [
  {
    name: "Starter Package",
    price: "$299",
    subtitle: "Perfect for small businesses getting started with digital marketing",
    features: [
      "Basic SEO Optimization",
      "5 Keywords Targeting",
      "Monthly Progress Reports",
      "On-Page SEO",
      "Google Analytics Setup",
      "Social Media Setup (2 Platforms)",
      "Email Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional Package",
    price: "$599",
    subtitle: "Best for growing businesses looking to expand their online presence",
    features: [
      "Advanced SEO Optimization",
      "15 Keywords Targeting",
      "Bi-Weekly Progress Reports",
      "On-Page & Off-Page SEO",
      "Content Marketing (4 Posts/Month)",
      "Social Media Management (4 Platforms)",
      "Google Ads Setup & Management",
      "Email & Phone Support",
      "Monthly Strategy Call",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise Package",
    price: "$1,299",
    subtitle: "Comprehensive solution for established businesses seeking market dominance",
    features: [
      "Complete SEO Strategy",
      "Unlimited Keywords Targeting",
      "Weekly Progress Reports",
      "Full On-Page & Off-Page SEO",
      "Content Marketing (12 Posts/Month)",
      "All Social Media Platforms",
      "Google Ads + Facebook Ads Management",
      "Reputation Management",
      "E-commerce Optimization",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "Custom Web Development",
    ],
    cta: "Get Started",
    popular: false,
  },
];

function PackagesPage() {
  return (
    <SiteLayout>
      <section className="py-10 px-4 bg-slate-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Choose Your Package</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Select the perfect plan that fits your business needs and budget. All packages include our premium support.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((p) => {
              const popular = p.popular;
              return (
                <div
                  key={p.name}
                  className={`relative rounded-2xl bg-white p-8 shadow-sm border-2 flex flex-col ${
                    popular ? "border-green-500 shadow-lg" : "border-slate-200"
                  }`}
                >
                  {popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h2 className="text-xl font-bold text-slate-800 mb-2">{p.name}</h2>
                  <div className="mb-3">
                    <span className="text-4xl font-bold text-slate-900">{p.price}</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-6">{p.subtitle}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/13312782900"
                    className={`block text-center py-3 rounded-md font-semibold text-white ${
                      popular ? "bg-green-500 hover:bg-green-600" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {p.cta}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center bg-white rounded-2xl border border-slate-200 p-10 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Need a Custom Package?</h2>
            <p className="text-slate-600 mb-6">
              Every business is unique. Contact us to discuss a customized package tailored specifically to your needs and goals.
            </p>
            <Link to="/contact" className="inline-block px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Contact Us for Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
