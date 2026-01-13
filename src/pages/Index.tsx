// src/pages/index.tsx

import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { home } from "@/content/copy";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Elemental - Digital Asset Strategy and Wealth Infrastructure</title>
        <meta
          name="description"
          content="Research-led advisory and execution for family offices, wealth managers, and funds navigating digital assets. Strategy, structure, and institutional-grade market infrastructure."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <h1 className="font-serif text-display text-balance animate-fade-in">
              {home.hero.headline}
            </h1>

            <p className="mt-10 md:mt-14 text-body-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-delayed">
              {home.hero.subhead}
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32">
          <div className="border-t border-border/50 pt-16 md:pt-20 animate-fade-in-delayed">
            <p className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
              What We Do
            </p>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {home.whatWeDo.map((item) => (
                <div key={item.title}>
                  <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Track Record */}
        <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32">
          <div className="border-t border-border/50 pt-16 md:pt-20 animate-fade-in-delayed">
            <p className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
              Track Record
            </p>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {home.trackRecord.map((item) => (
                <div key={item.metric}>
                  <p className="font-serif text-2xl md:text-3xl mb-2">{item.metric}</p>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32">
          <div className="border-t border-border/50 pt-16 md:pt-20 animate-fade-in-delayed-2">
            <p className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
              Why It Matters
            </p>

            <div className="max-w-2xl">
              <p className="text-body-lg leading-relaxed mb-6">
                {home.whyItMatters.lead}
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                {home.whyItMatters.body}
              </p>
            </div>
          </div>
        </section>

        {/* Selected Outcomes */}
        <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32">
          <div className="border-t border-border/50 pt-16 md:pt-20 animate-fade-in-delayed-2">
            <p className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
              Selected Outcomes
            </p>

            <ul className="space-y-4 max-w-2xl">
              {home.outcomes.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="container mx-auto px-6 md:px-12 pb-20 md:pb-32">
          <div className="border-t border-border/50 pt-16 md:pt-20 animate-fade-in-delayed-3">
            <p className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
              Who We Work With
            </p>

            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-3 max-w-2xl">
              {home.whoWeWorkWith.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" />
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 md:px-12 pb-section">
          <div className="border-t border-border/50 pt-16 md:pt-20 animate-fade-in-delayed-3">
            <div className="max-w-xl">
              <p className="font-serif text-title mb-6">{home.cta.title}</p>
              <p className="text-body text-muted-foreground leading-relaxed">
                {home.cta.body}
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;