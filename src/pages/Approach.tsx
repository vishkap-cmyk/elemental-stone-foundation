// src/pages/Approach.tsx

import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Approach = () => {
  return (
    <>
      <Helmet>
        <title>Approach — Elemental</title>
        <meta
          name="description"
          content="I help digital asset platforms get taken seriously by institutional buyers. Custody, governance, MiCA compliance, and the relationships that matter."
        />
      </Helmet>

      <Layout>
        {/* Approach */}
        <section className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-20 md:pb-32">
          <div className="max-w-2xl">
            <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6 animate-fade-in">
              Approach
            </p>

            <p className="text-body-lg text-muted-foreground leading-relaxed mb-10 animate-fade-in-delayed">
              I help digital asset platforms get taken seriously by institutional buyers. That means
              building the infrastructure, the positioning, and the relationships that make a
              regulated institution say yes. I've done this at the intersection of on-chain
              infrastructure and institutional finance — where the trust bar is highest and the
              playbook doesn't exist yet.
            </p>

            <div className="animate-fade-in-delayed-2">
              <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6">
                I specialise in
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    Custody, fund structure, and jurisdiction decisions that don't create regulatory problems later
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    GTM frameworks that work with institutional procurement, not against it
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    Positioning that translates digital asset capability into language compliance teams approve
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    Partner relationships built for revenue, not announcements
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    MiCA compliance and FINMA regulatory posture for platforms entering Switzerland and the EU
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How I Work */}
        <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32">
          <div className="border-t border-border/50 pt-16 md:pt-20 animate-fade-in-delayed-3">
            <div className="max-w-2xl">
              <p className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                How I Work
              </p>
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                I work with 3–4 organisations at a time. Engagements are scoped, senior-led, and
                measured by institutional outcomes — not activity or tactical output. I engage with
                ownership, prioritise clarity over hype, and operate within institutional norms of
                confidentiality and discretion.
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32">
          <div className="border-t border-border/50 pt-16 md:pt-20">
            <div className="max-w-2xl">
              <p className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                Results
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    Defined the operating model for a family office's first digital asset allocation
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    Mapped jurisdictional options for a wealth manager evaluating MiCA-compliant fund structures — decision framework adopted by their investment committee
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    Designed the GTM playbook that drove Endaoment from $25M to $130M AUM
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg italic text-muted-foreground">
                    Client testimonial placeholder — "A Zurich-based family office CIO said..."
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What This Is Not */}
        <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32">
          <div className="border-t border-border/50 pt-16 md:pt-20">
            <div className="max-w-2xl">
              <p className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                What This Is Not
              </p>
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                I don't do retainers that produce slide decks. I don't advise on token launches,
                community growth, or retail distribution. I don't take on engagements where the ask
                is to make something sound institutional without doing the structural work.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 md:px-12 pb-section">
          <div className="border-t border-border/50 pt-16 md:pt-20">
            <div className="max-w-xl">
              <p className="text-body-lg mb-8">
                If you're preparing for institutional market entry in Europe, I'm available for a scoped conversation.
              </p>
              <a
                href="mailto:vishal@elemental.so"
                className="inline-flex items-center gap-2 text-body font-medium border-b border-foreground pb-0.5 transition-opacity hover:opacity-60"
              >
                Get in touch
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Approach;
