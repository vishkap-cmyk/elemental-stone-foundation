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
          content="I help digital asset platforms, family offices, and wealth managers navigate institutional adoption — custody, governance, MiCA compliance, and market entry."
        />
      </Helmet>

      <Layout>
        <article itemScope itemType="https://schema.org/WebPage">
          {/* Hero */}
          <header className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-16 md:pb-24">
            <div className="max-w-3xl">
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
                <p className="mt-10 text-body-lg text-muted-foreground max-w-2xl leading-relaxed" itemProp="description">
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

          {/* Proof — compact credibility + key results */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32">
            <ScrollReveal delay={0.2}>
              <div className="border-t border-border/50 pt-10">
                <div className="flex flex-wrap items-center gap-y-4 gap-x-3 md:gap-x-4 mb-10">
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

                <div className="grid md:grid-cols-3 gap-6 md:gap-10 max-w-4xl">
                  <p className="text-body text-muted-foreground">
                    <span className="text-foreground font-medium">Endaoment</span> — grew AUM from $25M to $130M by pivoting GTM toward HNW individuals and wealth managers.
                  </p>
                  <p className="text-body text-muted-foreground">
                    <span className="text-foreground font-medium">KlimaDAO</span> — $1B market cap at launch. Defined partner strategy and coined the term 'digital carbon'.
                  </p>
                  <p className="text-body text-muted-foreground">
                    <span className="text-foreground font-medium">Policy</span> — advisor to the United Nations and European Commission on digital asset adoption frameworks.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Three Services */}
          <section id="results" className="container mx-auto px-6 md:px-12 pb-20 md:pb-32" aria-labelledby="services-heading">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-16 md:pt-20">
                <h2 id="services-heading" className="text-caption uppercase tracking-widest text-muted-foreground mb-4">
                  {home.services.headline}
                </h2>
                <p className="text-body-lg text-muted-foreground mb-14 max-w-xl">
                  {home.services.subheadline}
                </p>

                <div className="grid md:grid-cols-3 gap-10 md:gap-14">
                  {home.services.items.map((service, i) => (
                    <ScrollReveal key={service.title} delay={0.1 * i}>
                      <article className="space-y-4">
                        <div>
                          <h3 className="font-serif text-xl md:text-2xl mb-1">{service.title}</h3>
                          <p className="text-caption uppercase tracking-widest text-muted-foreground">
                            {service.duration}
                          </p>
                        </div>
                        <p className="text-body text-muted-foreground leading-relaxed">
                          {service.body}
                        </p>
                        <p className="text-sm text-muted-foreground/70 italic">
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
                  <p className="mt-14 text-body text-muted-foreground max-w-2xl">
                    {home.services.note}
                  </p>
                </ScrollReveal>
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
