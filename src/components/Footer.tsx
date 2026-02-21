const Footer = () => {
  return (
    <footer className="border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-xl">
          <a 
            href="mailto:vishal@elemental.so"
            className="inline-block text-body text-muted-foreground border-b border-muted-foreground/30 pb-0.5 transition-all hover:border-foreground hover:text-foreground"
          >
            vishal@elemental.so
          </a>
        </div>
        
        <div className="mt-24 pt-8 border-t border-border/30">
          <p className="text-caption text-muted-foreground/60">
            © {new Date().getFullYear()} Elemental
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
