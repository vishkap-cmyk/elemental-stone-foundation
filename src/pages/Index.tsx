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
        <section className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-20 md:pb-32">
          <div className="max-w-4xl">
            <h1 className="font-serif text-display text-balance animate-fade-in">
              Institutional GTM & Commercial Strategy for Digital Asset and Wealth Infrastructure
            </h1>
            
            <p className="mt-10 md:mt-14 text-body-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-delayed">
              Advisory for regulated platforms, custodians, and wealth infrastructure providers navigating institutional adoption.
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
              <div>
                <h3 className="font-serif text-xl mb-3">Institutional adoption</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  GTM strategy aligned to regulated buyer expectations and institutional due diligence.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl mb-3">Partnership acceleration</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Commercial engagement with wealth managers, custodians, and market infrastructure providers.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-xl mb-3">Market entry & positioning</h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Positioning and compliance alignment for regulated or regulation-adjacent markets.
                </p>
              </div>
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
                Institutional buyers assess trust, regulatory alignment, and execution discipline before product.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                Elemental works where technical complexity meets institutional scrutiny — structuring adoption, not selling it.
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
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                <span className="text-body-lg">
                  ~$95m in net AUM growth led in institutional channels
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                <span className="text-body-lg">
                  Early-market scaling to seven-figure ARR in year one
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                <span className="text-body-lg">
                  Institutional adoption of publicly-used data platforms
                </span>
              </li>
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
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" />
                <span className="text-body">Digital asset platforms</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" />
                <span className="text-body">Wealth infrastructure providers</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" />
                <span className="text-body">Custody and regulated financial institutions</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" />
                <span className="text-body">Market infrastructure partners</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" />
                <span className="text-body">Institutional investor channels</span>
              </li>
            </ul>
          </div>
        </section>
        
        {/* CTA */}
        <section className="container mx-auto px-6 md:px-12 pb-section">
          <div className="border-t border-border/50 pt-16 md:pt-20 animate-fade-in-delayed-3">
            <div className="max-w-xl">
              <p className="font-serif text-title mb-6">
                Private introductions only.
              </p>
              <p className="text-body text-muted-foreground leading-relaxed">
                Engagements are selective. If you operate at the intersection of regulated markets and institutional adoption, we should speak.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
