// src/pages/Index.tsx

import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { home } from "@/content/copy";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Elemental — Institutional Advisory for Digital Assets & Wealth Infrastructure</title>
        <meta
          name="description"
          content="I help digital asset platforms, family offices, and wealth managers navigate the operational reality of institutional adoption — custody, governance, MiCA compliance, and the relationships that make regulated institutions say yes."
        />
      </Helmet>

      <Layout>
        <article itemScope itemType="https://schema.org/WebPage">
          {/* Hero */}
          <header className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-12 md:pb-16">
            <div className="max-w-4xl">
              <ScrollReveal>
                <p className="text-body-lg mb-6">
                  <a
                    href="https://linkedin.com/in/vishkap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-foreground pb-0.5 transition-opacity hover:opacity-60"
                  >
                    I'm Vishal Kapadia.
                  </a>
                </p>
                <h1 className="font-serif text-display text-balance" itemProp="headline">
                  {home.hero.headline}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="mt-10 md:mt-14 text-body-lg text-muted-foreground max-w-2xl leading-relaxed" itemProp="description">
                  {home.hero.subhead}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  <a
                    href={home.heroCta.href}
                    className="inline-flex items-center gap-2 text-body font-medium border-b border-foreground pb-0.5 transition-opacity hover:opacity-60"
                  >
                    {home.heroCta.text}
                    <span aria-hidden="true">→</span>
                  </a>
                  <span className="text-body text-muted-foreground">
                    {home.heroSecondary}
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </header>

          {/* Credibility Bar */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32">
            <ScrollReveal delay={0.2}>
              <div className="border-t border-border/50 pt-10">
                <p className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                  Institutional Anchors
                </p>
                <div className="flex flex-wrap items-center gap-y-4 gap-x-3 md:gap-x-4">
                  {home.credibilityBar.map((name, i) => (
                    <span key={name} className="flex items-center gap-3 md:gap-4">
                      <span className="font-serif text-base md:text-lg tracking-tight text-foreground/70">
                        {name}
                      </span>
                      {i < home.credibilityBar.length - 1 && (
                        <span className="text-border text-xs" aria-hidden="true">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Why It Matters */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32" aria-labelledby="why-heading">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-16 md:pt-20">
                <h2 id="why-heading" className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                  Why It Matters
                </h2>

                <div className="max-w-3xl">
                  <p className="font-serif text-2xl md:text-3xl leading-snug mb-8 text-balance">
                    {home.whyItMatters.lead}
                  </p>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    {home.whyItMatters.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Track Record */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32" aria-labelledby="track-record-heading">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-16 md:pt-20">
                <h2 id="track-record-heading" className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                  Track Record
                </h2>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12" role="list">
                  {home.trackRecord.map((item, i) => (
                    <ScrollReveal key={item.metric} delay={0.1 * i}>
                      <article role="listitem">
                        <h3 className="font-serif text-2xl md:text-3xl mb-2">{item.metric}</h3>
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

          {/* Selected Outcomes */}
          <section id="results" className="container mx-auto px-6 md:px-12 pb-20 md:pb-32" aria-labelledby="outcomes-heading">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-16 md:pt-20">
                <h2 id="outcomes-heading" className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                  Selected Outcomes
                </h2>

                <ul className="space-y-4 max-w-2xl">
                  {home.outcomes.map((item, i) => (
                    <ScrollReveal key={i} delay={0.05 * i}>
                      <li className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-body-lg">{item}</span>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </section>

          {/* Services */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32" aria-labelledby="services-heading">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-16 md:pt-20">
                <h2 id="services-heading" className="text-caption uppercase tracking-widest text-muted-foreground mb-4">
                  {home.services.headline}
                </h2>
                <p className="text-body-lg text-muted-foreground mb-12">
                  {home.services.subheadline}
                </p>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  {home.services.items.map((service, i) => (
                    <ScrollReveal key={service.title} delay={0.1 * i}>
                      <article className="space-y-4">
                        <div>
                          <h3 className="font-serif text-xl mb-1">{service.title}</h3>
                          <p className="text-caption uppercase tracking-widest text-muted-foreground">
                            {service.duration}
                          </p>
                        </div>
                        <p className="text-body text-muted-foreground leading-relaxed">
                          {service.body}
                        </p>
                        <p className="text-body text-muted-foreground/70 italic">
                          {service.forLine}
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

                <ScrollReveal delay={0.3}>
                  <p className="mt-12 text-body text-muted-foreground max-w-2xl">
                    {home.services.note}
                  </p>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </section>

          {/* Who I Work With */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32" aria-labelledby="clients-heading">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-16 md:pt-20">
                <h2 id="clients-heading" className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                  Who I Work With
                </h2>

                <ul className="grid md:grid-cols-2 gap-x-12 gap-y-3 max-w-2xl">
                  {home.whoIWorkWith.map((item, i) => (
                    <ScrollReveal key={item} delay={0.03 * i}>
                      <li className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" aria-hidden="true" />
                        <span className="text-body">{item}</span>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </section>

          {/* How I Engage */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32" aria-labelledby="engagement-heading">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-16 md:pt-20">
                <h2 id="engagement-heading" className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                  How I Engage
                </h2>

                <ul className="space-y-4 max-w-2xl">
                  {home.howIEngage.map((item, i) => (
                    <ScrollReveal key={i} delay={0.05 * i}>
                      <li className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" aria-hidden="true" />
                        <span className="text-body-lg">{item}</span>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </section>

          {/* Footer CTA */}
          <section className="container mx-auto px-6 md:px-12 pb-section" aria-labelledby="cta-heading">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-16 md:pt-20">
                <div className="max-w-xl">
                  <h2 id="cta-heading" className="font-serif text-title mb-6">
                    {home.footerCta.headline}
                  </h2>
                  <p className="text-body text-muted-foreground leading-relaxed mb-8">
                    {home.footerCta.body}
                  </p>
                  <a
                    href={home.footerCta.ctaHref}
                    className="inline-flex items-center gap-2 text-body font-medium border-b border-foreground pb-0.5 transition-opacity hover:opacity-60"
                  >
                    {home.footerCta.ctaText}
                    <span aria-hidden="true">→</span>
                  </a>
                  <p className="mt-6 text-body text-muted-foreground">
                    {home.footerCta.secondary}
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
