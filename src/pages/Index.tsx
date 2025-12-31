import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Elemental — Institutional GTM & Commercial Strategy</title>
        <meta 
          name="description" 
          content="Institutional GTM and commercial strategy for digital asset and wealth infrastructure. Market entry, partnerships, and go-to-market execution." 
        />
      </Helmet>
      
      <Layout>
        {/* Hero Section */}
        <section className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-section">
          <div className="max-w-4xl">
            <h1 className="font-serif text-display text-balance animate-fade-in">
              Institutional GTM & Commercial Strategy for Digital Asset and Wealth Infrastructure
            </h1>
            
            <p className="mt-10 md:mt-14 text-body-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-delayed">
              Elemental works with a small number of organisations operating at the intersection of digital assets, wealth, and regulated market infrastructure. The focus is on institutional adoption: market entry, partnerships, and go-to-market execution in compliance-aware environments.
            </p>
          </div>
        </section>
        
        {/* Focus Areas */}
        <section className="container mx-auto px-6 md:px-12 pb-section">
          <div className="border-t border-border/50 pt-16 md:pt-24 animate-fade-in-delayed-2">
            <p className="text-caption uppercase tracking-widest text-muted-foreground mb-10">
              Focus Areas
            </p>
            
            <ul className="space-y-5 max-w-2xl">
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                <span className="text-body-lg">
                  Institutional GTM & distribution strategy
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                <span className="text-body-lg">
                  Partnerships across wealth, custody, and market infrastructure
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                <span className="text-body-lg">
                  Market entry and positioning in regulated or regulation-adjacent contexts
                </span>
              </li>
            </ul>
          </div>
        </section>
        
        {/* Subtle divider element */}
        <div className="container mx-auto px-6 md:px-12 pb-section animate-fade-in-delayed-3">
          <div className="h-px w-24 bg-border" />
        </div>
      </Layout>
    </>
  );
};

export default Index;
