import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Approach = () => {
  return (
    <>
      <Helmet>
        <title>Approach — Elemental</title>
        <meta 
          name="description" 
          content="Focused on outcomes, not outputs. Advisory work anchored in measurable institutional engagement." 
        />
      </Helmet>
      
      <Layout>
        {/* Our Approach */}
        <section className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-20 md:pb-32">
          <div className="max-w-2xl">
            <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6 animate-fade-in">
              Our Approach
            </p>
            
            <h1 className="font-serif text-title mb-10 animate-fade-in-delayed">
              Focused on outcomes, not outputs.
            </h1>
            
            <p className="text-body-lg text-muted-foreground leading-relaxed mb-10 animate-fade-in-delayed">
              Elemental works with a small number of organisations at a time. Work is collaborative, retained, and anchored in measurable institutional engagement — not quick hits or tactical experiments.
            </p>
            
            <div className="animate-fade-in-delayed-2">
              <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6">
                We specialise in
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    Building disciplined GTM frameworks that reflect the realities of institutions, not communities
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    Aligning product strategy with compliance and regulatory expectation
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 flex-shrink-0" />
                  <span className="text-body-lg">
                    Facilitating partner engagement that scales commercially and sustainably
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* How We Work */}
        <section className="container mx-auto px-6 md:px-12 pb-section">
          <div className="border-t border-border/50 pt-16 md:pt-20 animate-fade-in-delayed-3">
            <div className="max-w-2xl">
              <p className="text-caption uppercase tracking-widest text-muted-foreground mb-8">
                How We Work
              </p>
              
              <ul className="space-y-6">
                <li>
                  <h3 className="font-serif text-xl mb-2">Respect confidentiality and institutional norms</h3>
                  <p className="text-body text-muted-foreground">
                    Work is conducted with discretion appropriate to regulated environments.
                  </p>
                </li>
                <li>
                  <h3 className="font-serif text-xl mb-2">Engage with ownership</h3>
                  <p className="text-body text-muted-foreground">
                    We work with senior leadership, not task managers.
                  </p>
                </li>
                <li>
                  <h3 className="font-serif text-xl mb-2">Prioritise clarity over hype</h3>
                  <p className="text-body text-muted-foreground">
                    Swiss and UK audiences read restraint as credibility.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Approach;
