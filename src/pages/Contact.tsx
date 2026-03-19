// src/pages/Contact.tsx

import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact — Elemental</title>
        <meta
          name="description"
          content="Book a scoped conversation about institutional digital asset market entry in Europe."
        />
      </Helmet>

      <Layout>
        <section className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-section">
          <div className="max-w-xl">
            <ScrollReveal>
              <h1 className="font-serif text-display mb-8">Get in touch</h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-10">
                If you are evaluating institutional market entry in Europe, I can help map the structural, regulatory, and commercial decisions that matter first.
              </p>

              <a
                href="mailto:vishal@elemental.so"
                className="inline-flex items-center gap-2 text-body font-medium border-b border-foreground pb-0.5 transition-opacity hover:opacity-60"
              >
                Book a scoped conversation
                <span aria-hidden="true">→</span>
              </a>

              <p className="mt-6 text-body text-muted-foreground">
                vishal@elemental.so
              </p>

              <p className="mt-12 text-body text-muted-foreground/60">
                <a
                  href="https://linkedin.com/in/vishkap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-muted-foreground/30 pb-0.5 transition-all hover:border-foreground hover:text-foreground"
                >
                  LinkedIn
                </a>
              </p>
            </ScrollReveal>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
