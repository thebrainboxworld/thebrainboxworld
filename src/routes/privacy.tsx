import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CONTACT_EMAIL } from "@/components/site/SiteLayout";
import { absoluteUrl } from "@/lib/site";

const DESC =
  "How BrainBoxWorld collects, uses and protects the information you submit through our website forms, audits and enquiries.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BrainBoxWorld" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Privacy Policy — BrainBoxWorld" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/privacy") },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/privacy") }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero title="Privacy Policy" subtitle="What we collect, why we collect it, and how you can have it removed." />
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-8 text-slate-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white font-display">Information we collect</h2>
            <p className="mt-3 text-slate-400">
              We collect only the information you choose to send us through our contact form, audit request form or
              direct messages: your name, business name, email address, phone or WhatsApp number, website URL, the
              service you are interested in, an indicative budget and any project details you provide.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white font-display">How we use it</h2>
            <p className="mt-3 text-slate-400">
              We use your details to respond to your enquiry, prepare an audit or proposal, and follow up about the work
              you asked us about. We do not sell your data and we do not share it with third parties for marketing.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white font-display">Where it is stored</h2>
            <p className="mt-3 text-slate-400">
              Submissions are stored in our managed database and are also sent to our team inbox and internal
              notification channel so that we can respond quickly. Access is limited to the BrainBoxWorld team.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white font-display">Analytics and cookies</h2>
            <p className="mt-3 text-slate-400">
              We may use standard web analytics to understand which pages are useful. This data is aggregated and is not
              used to identify individual visitors.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white font-display">Your choices</h2>
            <p className="mt-3 text-slate-400">
              You can ask us at any time to send you a copy of the information we hold about you, correct it, or delete
              it entirely. Email <a className="text-indigo-300 hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
              and we will action the request.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
