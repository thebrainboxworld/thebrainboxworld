import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CONTACT_EMAIL } from "@/components/site/SiteLayout";
import { absoluteUrl } from "@/lib/site";

const DESC =
  "The terms that apply to using the BrainBoxWorld website and to engagements for design, development, automation and growth work.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — BrainBoxWorld" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Terms of Use — BrainBoxWorld" },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/terms") },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/terms") }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero title="Terms of Use" subtitle="The basics of working with us and using this website." />
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-8 text-slate-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white font-display">Using this website</h2>
            <p className="mt-3 text-slate-400">
              Content on this site is provided for information. We keep it accurate and up to date, but it does not
              constitute a guarantee of any particular commercial outcome.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white font-display">Quotes and engagements</h2>
            <p className="mt-3 text-slate-400">
              Pricing shown on this site is indicative. Final scope, deliverables, timelines and fees are confirmed in a
              written proposal or agreement before work begins. Where a project varies from the agreed scope, we confirm
              the change and any cost impact in writing first.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white font-display">Ownership</h2>
            <p className="mt-3 text-slate-400">
              On completion and settlement of agreed fees, deliverables produced for a client — code, designs and
              accounts created for the project — belong to that client. Third-party software remains under its own
              licence.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white font-display">Confidentiality</h2>
            <p className="mt-3 text-slate-400">
              We treat client information as confidential. We only reference a client publicly, including in case
              studies, with their permission; otherwise the work is described anonymously.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white font-display">Questions</h2>
            <p className="mt-3 text-slate-400">
              Email <a className="text-indigo-300 hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and
              we will clarify anything on this page.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
