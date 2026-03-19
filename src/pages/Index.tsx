// src/pages/Index.tsx

import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { home } from "@/content/copy";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Elemental — Institutional Digital Asset Advisory for Europe</title>
        <meta
          name="description"
          content="I help digital asset platforms, wealth managers, and family offices navigate custody, governance, MiCA readiness, and institutional go-to-market in Europe."
        />
      </Helmet>

      <Layout>
        <article itemScope itemType="https://schema.org/WebPage">
          {/* Hero */}
          <header className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-16 md:pb-24">
            <div className="max-w-3xl">
              <ScrollReveal>
                <h1 className="font-serif text-display text-balance" itemProp="headline">
                  {home.hero.headline}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="mt-8 text-body-lg text-muted-foreground max-w-2xl leading-relaxed" itemProp="description">
                  {home.hero.subhead}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="mt-4 text-body text-muted-foreground/70">
                  {home.hero.credibility}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="mt-10">
                  <a
                    href={home.heroCta.href}
                    className="inline-flex items-center gap-2 text-body font-medium border-b border-foreground pb-0.5 transition-opacity hover:opacity-60"
                  >
                    {home.heroCta.text}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </header>

          {/* Where clients get stuck */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-28">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-14 md:pt-18">
                <h2 className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                  Where clients get stuck
                </h2>

                <ul className="space-y-4 max-w-2xl">
                  {home.problems.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-body-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </section>

          {/* Selected work */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-28">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-14 md:pt-18">
                <h2 className="text-caption uppercase tracking-widest text-muted-foreground mb-10">
                  Selected work
                </h2>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl">
                  {home.proof.map((item, i) => (
                    <ScrollReveal key={item.title} delay={0.08 * i}>
                      <article>
                        <h3 className="font-serif text-xl md:text-2xl mb-2">{item.title}</h3>
                        <p className="text-body text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </article>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Engagements */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-28">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-14 md:pt-18">
                <h2 className="text-caption uppercase tracking-widest text-muted-foreground mb-10">
                  {home.services.headline}
                </h2>

                <div className="grid md:grid-cols-3 gap-10 md:gap-14">
                  {home.services.items.map((service, i) => (
                    <ScrollReveal key={service.title} delay={0.1 * i}>
                      <article className="space-y-4">
                        <h3 className="font-serif text-xl md:text-2xl">{service.title}</h3>
                        <p className="text-body text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                        <p className="text-sm text-muted-foreground/80">
                          <span className="font-medium text-foreground/70">Best for:</span> {service.bestFor}
                        </p>
                        <p className="text-sm text-muted-foreground/80">
                          <span className="font-medium text-foreground/70">Output:</span> {service.output}
                        </p>
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
              </div>
            </ScrollReveal>
          </section>

          {/* Who I work with */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-28">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-14 md:pt-18">
                <h2 className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                  Who I work with
                </h2>

                <ul className="space-y-3 max-w-2xl">
                  {home.whoIWorkWith.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" aria-hidden="true" />
                      <span className="text-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </section>

          {/* How I work */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-28">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-14 md:pt-18">
                <h2 className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                  How I work
                </h2>

                <ul className="space-y-3 max-w-2xl">
                  {home.howIWork.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" aria-hidden="true" />
                      <span className="text-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </section>

          {/* CTA */}
          <section className="container mx-auto px-6 md:px-12 pb-section">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-14 md:pt-18">
                <div className="max-w-xl">
                  <p className="text-body-lg leading-relaxed mb-8">
                    {home.footerCta.body}
                  </p>
                  <a
                    href={home.footerCta.ctaHref}
                    className="inline-flex items-center gap-2 text-body font-medium border-b border-foreground pb-0.5 transition-opacity hover:opacity-60"
                  >
                    {home.footerCta.ctaText}
                    <span aria-hidden="true">→</span>
                  </a>
                  <p className="mt-4 text-body text-muted-foreground">
                    {home.footerCta.email}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>
        </article>
      </Layout>
    </>
  );
};

export default Index;
