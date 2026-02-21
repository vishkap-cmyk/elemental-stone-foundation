import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Resources — Elemental</title>
        <meta
          name="description"
          content="Frameworks and perspectives on institutional digital asset adoption."
        />
      </Helmet>

      <Layout>
        <section className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-section">
          <div className="max-w-2xl">
            <p className="text-caption uppercase tracking-widest text-muted-foreground mb-6 animate-fade-in">
              Resources
            </p>
            <p className="text-body-lg text-muted-foreground leading-relaxed animate-fade-in-delayed">
              Frameworks and perspectives on institutional digital asset adoption. Coming soon.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Resources;
