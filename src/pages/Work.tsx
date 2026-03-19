// src/pages/Work.tsx

import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { home } from "@/content/copy";
import ScrollReveal from "@/components/ScrollReveal";

const Work = () => {
  return (
    <>
      <Helmet>
        <title>Work — Elemental</title>
        <meta
          name="description"
          content="Selected advisory work across institutional digital asset adoption, custody, governance, and market entry in Europe."
        />
      </Helmet>

      <Layout>
        <section className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-section">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h1 className="font-serif text-display mb-6">Selected work</h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl">
                A summary of advisory engagements across institutional digital asset adoption, market entry, and policy.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-16 md:mt-24 space-y-0">
            {home.caseStudies.map((study, i) => (
              <ScrollReveal key={study.title} delay={0.08 * i}>
                <article className="border-t border-border/50 pt-12 md:pt-16 pb-12 md:pb-16 max-w-3xl">
                  <h2 className="font-serif text-2xl md:text-3xl mb-4">{study.title}</h2>

                  <div className="space-y-4">
                    <div>
                      <p className="text-caption uppercase tracking-widest text-muted-foreground mb-1.5">Context</p>
                      <p className="text-body text-muted-foreground leading-relaxed">{study.context}</p>
                    </div>

                    <div>
                      <p className="text-caption uppercase tracking-widest text-muted-foreground mb-1.5">Work</p>
                      <p className="text-body text-muted-foreground leading-relaxed">{study.work}</p>
                    </div>

                    <div>
                      <p className="text-caption uppercase tracking-widest text-muted-foreground mb-1.5">Outcome</p>
                      <p className="text-body leading-relaxed">{study.outcome}</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Work;
