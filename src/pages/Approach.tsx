// src/pages/approach.tsx

import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Approach = () => {
  return ( 
    <>
      <Helmet>
        <title>Approach — Elemental</title>
        <meta
          name="description"
          content="Research-led, senior advisory focused on institutional outcomes. Strategy, structure, and operating readiness for digital assets."
        />
      </Helmet>

      <Layout>
        {/* Our Approach */}
        <section className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-20 md:pb-32">
          <div className="max-w-2xl">
            <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6 animate-fade-in">
              Our Approach
            </p>

            <h1 className="font-serif text-title mb-10 animate-fade-in-delayed">
              Focused on outcomes, not outputs.
            </h1>

            <p className="text-body-lg text-muted-foreground leading-relaxed mb-10 animate-fade-in-delayed">
              Elemental works with a small number of organisations at a time.
              Engagements are retained, senior-led, and measured by institutional
              outcomes, not activity or tactical output.
            </p>

            <div className="animate-fade-in-delayed-2">
              <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6">
                We specialise in
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    Infrastructure and jurisdiction mapping across custody, fund
                    structure, governance, and reporting
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    Disciplined GTM frameworks built for institutional buyers,
                    not community adoption
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    Product and positioning aligned to compliance and
                    regulatory expectation
                  </span>
                </li>

                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    Partner engagement structured for commercial sustainability,
                    not volume
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="container mx-auto px-6 md:px-12 pb-section">
          <div className="border-t border-border/50 pt-16 md:pt-20 animate-fade-in-delayed-3">
            <div className="max-w-2xl">
              <p className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                How We Work
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    Respect confidentiality and institutional norms
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">Engage with ownership</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">Prioritise clarity over hype</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Approach;