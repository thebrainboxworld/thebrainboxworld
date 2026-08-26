import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Toaster } from "@/components/ui/sonner";
import { absoluteUrl } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "4hZeLM1DZGS9eenB6jW2KLBNJWgf4oy-iO0NzwMsXiM" },
      { title: "BrainBoxWorld — Digital Marketing & SEO Services" },
      { name: "description", content: "Professional Digital Marketing & SEO services. We help businesses achieve first-page Google rankings, boost traffic and grow conversions." },
      { name: "author", content: "BrainBoxWorld" },
      { property: "og:title", content: "BrainBoxWorld — Digital Marketing & SEO Services" },
      { property: "og:description", content: "Professional Digital Marketing & SEO services. We help businesses achieve first-page Google rankings, boost traffic and grow conversions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "BrainBoxWorld — Digital Marketing & SEO Services" },
      { name: "twitter:description", content: "Professional Digital Marketing & SEO services. We help businesses achieve first-page Google rankings, boost traffic and grow conversions." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/e60801b7-1e0b-4f60-9926-ef9fb565089a" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/e60801b7-1e0b-4f60-9926-ef9fb565089a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "ProfessionalService"],
          "@id": `${absoluteUrl()}/#organization`,
          name: "BrainBoxWorld",
          alternateName: ["BrainBox World", "BBW"],
          url: absoluteUrl(),
          logo: absoluteUrl("/email-logo.png"),
          image: absoluteUrl("/email-logo.png"),
          description:
            "BrainBoxWorld is a digital marketing and SEO agency that builds high-performance websites, AI systems, automation, and growth-focused digital experiences. We help businesses rank on Google, grow qualified organic traffic, and convert traffic into revenue.",
          slogan: "Growth systems, not just websites.",
          founder: { "@type": "Person", name: "Adam Bawa Aliyu" },
          foundingDate: "2017",
          email: "hellobrainboxworld@gmail.com",
          telephone: "+1-331-278-2900",
          priceRange: "$$",
          areaServed: [
            { "@type": "Place", name: "Worldwide" },
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "United Kingdom" },
            { "@type": "Country", name: "Nigeria" },
            { "@type": "Country", name: "Canada" },
          ],
          knowsAbout: [
            "Search Engine Optimization",
            "Technical SEO",
            "Ecommerce SEO",
            "Local SEO",
            "International SEO",
            "Content Marketing",
            "Conversion Rate Optimization",
            "Web Design",
            "Custom Web Development",
            "Shopify Development",
            "WordPress Development",
            "Next.js",
            "React",
            "Google Ads",
            "Meta Ads",
            "TikTok Ads",
            "Marketing Automation",
            "AI Automation",
            "Generative AI",
            "Custom GPTs",
            "Retrieval Augmented Generation",
            "Branding",
            "Analytics",
            "Google Analytics 4",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "hellobrainboxworld@gmail.com",
              telephone: "+1-331-278-2900",
              areaServed: "Worldwide",
              availableLanguage: ["English"],
            },
            {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "hello@brainboxworld.com",
              areaServed: "Worldwide",
              availableLanguage: ["English"],
            },
          ],
          sameAs: [
            "https://www.linkedin.com/in/adam-bawa-aliyu-8463a93b2",
            "https://www.facebook.com/bawaaliyuadams",
            "https://www.tiktok.com/@brainboxworld",
            "https://www.instagram.com/brainboxproworld",
            "https://x.com/Brainboxworld",
            "https://www.brainboxworldng.dedyn.io",
            "https://brainboxworld.infy.uk",
            "https://www.vantiqcreative.dedyn.io",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "BrainBoxWorld Services",
            itemListElement: [
              "Search Engine Optimization (SEO)",
              "Ecommerce SEO",
              "Web Design and Development",
              "Conversion Rate Optimization",
              "Google Ads and Paid Media",
              "Content Marketing",
              "AI Systems and Automation",
              "Branding and Creative",
              "Analytics and Tracking",
            ].map((service) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: service },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${absoluteUrl()}/#website`,
          name: "BrainBoxWorld",
          url: absoluteUrl(),
          publisher: { "@id": `${absoluteUrl()}/#organization` },
          inLanguage: "en",
          potentialAction: {
            "@type": "SearchAction",
            target: `${absoluteUrl()}/blog?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What services does BrainBoxWorld offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "BrainBoxWorld offers SEO (technical, on-page, ecommerce, local and international), custom web design and development, conversion rate optimization, paid media (Google Ads, Meta, TikTok, LinkedIn), content marketing, branding, AI systems and automation, and analytics and reporting.",
              },
            },
            {
              "@type": "Question",
              name: "Where is BrainBoxWorld based and who do you work with?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "BrainBoxWorld is a fully remote global agency with teams serving Nigeria and Africa (BrainBoxWorld Nigeria), the United Kingdom and Europe (BrainBoxWorld UK), and the United States and international clients (VANTIQ Creative). We work with clients worldwide, 24/7.",
              },
            },
            {
              "@type": "Question",
              name: "How can I get a free SEO or website audit from BrainBoxWorld?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can request a free Growth Foundations Audit at https://thebrainboxworld.lovable.app/audit or contact the team at hellobrainboxworld@gmail.com or +1 (331) 278-2900.",
              },
            },
            {
              "@type": "Question",
              name: "Is BrainBoxWorld a good agency for ecommerce SEO?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. BrainBoxWorld specializes in ecommerce SEO for Shopify, WooCommerce and custom stores — combining technical SEO, category and PDP optimization, content, digital PR and CRO to grow qualified organic revenue, not just rankings.",
              },
            },
          ],
        }),
      },
    ],

  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}
