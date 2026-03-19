// src/pages/Engagements.tsx

import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { home } from "@/content/copy";
import ScrollReveal from "@/components/ScrollReveal";

const Engagements = () => {
  return (
    <>
      <Helmet>
        <title>Engagements — Elemental</title>
        <meta
          name="description"
          content="Three scoped advisory engagements for digital asset platforms, wealth managers, and family offices entering institutional markets in Europe."
        />
      </Helmet>

      <Layout>
        <section className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h1 className="font-serif text-display mb-6">Engagements</h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl">
                Three scoped engagements. Fixed outputs. Senior-led.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="container mx-auto px-6 md:px-12 pb-section">
          <div className="space-y-0">
            {home.services.items.map((service, i) => (
              <ScrollReveal key={service.title} delay={0.1 * i}>
                <article className="border-t border-border/50 pt-12 md:pt-16 pb-12 md:pb-16 max-w-3xl">
                  <h2 className="font-serif text-2xl md:text-3xl mb-4">{service.title}</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <p className="text-body text-muted-foreground">
                      <span className="font-medium text-foreground/70">Best for:</span> {service.bestFor}
                    </p>
                    <p className="text-body text-muted-foreground">
                      <span className="font-medium text-foreground/70">Output:</span> {service.output}
                    </p>
                  </div>

                  <a
                    href={service.ctaHref}
                    className="inline-flex items-center gap-2 text-body font-medium border-b border-foreground pb-0.5 transition-opacity hover:opacity-60"
                  >
                    {service.ctaText}
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="border-t border-border/50 pt-12 md:pt-16 max-w-2xl">
              <p className="text-body text-muted-foreground leading-relaxed">
                All engagements are retained, senior-led, and measured by institutional outcomes. I work with 3–4 organisations at a time.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </Layout>
    </>
  );
};

export default Engagements;
