import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Approach = () => {
  return (
    <>
      <Helmet>
        <title>Approach — Elemental</title>
        <meta 
          name="description" 
          content="Advisory, hands-on, and limited in scope. Focus on clarity of positioning, partner strategy, and execution discipline." 
        />
      </Helmet>
      
      <Layout>
        <section className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-section">
          <div className="max-w-2xl">
            <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6 animate-fade-in">
              Approach
            </p>
            
            <h1 className="font-serif text-title mb-12 animate-fade-in-delayed">
              Selective, senior-level advisory
            </h1>
            
            <div className="space-y-8 animate-fade-in-delayed-2">
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                Work is typically advisory, hands-on, and limited in scope. Engagements focus on clarity of positioning, partner strategy, and execution discipline rather than volume or scale consulting.
              </p>
              
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                Most work is retained, senior, and collaborative with leadership, product, and compliance stakeholders. Elemental does not operate as an agency and does not take on open-ended mandates.
              </p>
            </div>
            
            {/* Divider */}
            <div className="h-px w-16 bg-border mt-16 mb-16 animate-fade-in-delayed-3" />
            
            <div className="animate-fade-in-delayed-3">
              <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6">
                Background
              </p>
              
              <p className="text-body text-muted-foreground/80 leading-relaxed max-w-xl">
                Experience across senior GTM and commercial strategy roles in digital assets, real-world asset platforms, and high-growth technology companies. This includes leadership roles in on-chain wealth platforms, early-stage market expansion, and advisory work with organisations navigating institutional adoption and regulatory complexity.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Approach;
