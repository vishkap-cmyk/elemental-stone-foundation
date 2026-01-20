// src/pages/index.tsx

import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { home } from "@/content/copy";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Elemental — Institutional GTM & Commercial Strategy for Digital Assets</title>
        <meta
          name="description"
          content="Elemental is an institutional GTM and commercial strategy advisory for digital asset and wealth infrastructure companies. We advise family offices, wealth managers, and funds on custody, governance, reporting, and market access."
        />
      </Helmet>

      <Layout>
        <article itemScope itemType="https://schema.org/WebPage">
          {/* Hero Section */}
          <header className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-20 md:pb-32">
            <div className="max-w-4xl">
              <ScrollReveal>
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
                <p className="mt-6 text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
                  {home.hero.subhead2}
                </p>
              </ScrollReveal>
            </div>
          </header>

          {/* What We Do */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32" aria-labelledby="services-heading">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-16 md:pt-20">
                <h2 id="services-heading" className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                  What We Do
                </h2>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12" role="list">
                  {home.whatWeDo.map((item, i) => (
                    <ScrollReveal key={item.title} delay={0.1 * i}>
                      <article role="listitem">
                        <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                        <p className="text-body text-muted-foreground leading-relaxed">
                          {item.body}
                        </p>
                      </article>
                    </ScrollReveal>
                  ))}
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

          {/* Why It Matters */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32" aria-labelledby="why-heading">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-16 md:pt-20">
                <h2 id="why-heading" className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                  Why It Matters
                </h2>

                <div className="max-w-2xl">
                  <p className="text-body-lg leading-relaxed mb-6">
                    {home.whyItMatters.lead}
                  </p>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {home.whyItMatters.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Selected Outcomes */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32" aria-labelledby="outcomes-heading">
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

          {/* How Elemental Engages */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32" aria-labelledby="engagement-heading">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-16 md:pt-20">
                <h2 id="engagement-heading" className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                  How Elemental Engages
                </h2>

                <ul className="space-y-4 max-w-2xl">
                  {home.howWeEngage.map((item, i) => (
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

          {/* Who We Work With */}
          <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32" aria-labelledby="clients-heading">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-16 md:pt-20">
                <h2 id="clients-heading" className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                  Who We Work With
                </h2>

                <ul className="grid md:grid-cols-2 gap-x-12 gap-y-3 max-w-2xl">
                  {home.whoWeWorkWith.map((item, i) => (
                    <ScrollReveal key={item} delay={0.03 * i}>
                      <li className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" aria-hidden="true" />
                        <span className="text-body">{item}</span>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>

                <ScrollReveal delay={0.2}>
                  <p className="mt-8 text-body text-muted-foreground max-w-2xl leading-relaxed">
                    {home.whoWeWorkWithClarifier}
                  </p>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </section>

          {/* CTA */}
          <section className="container mx-auto px-6 md:px-12 pb-section" aria-labelledby="cta-heading">
            <ScrollReveal>
              <div className="border-t border-border/50 pt-16 md:pt-20">
                <div className="max-w-xl">
                  <h2 id="cta-heading" className="font-serif text-title mb-6">{home.cta.title}</h2>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {home.cta.body}
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