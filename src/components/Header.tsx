import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-serif text-xl tracking-tight transition-opacity hover:opacity-60"
        >
          Elemental
        </Link>
        
        <div className="flex items-center gap-8">
          <Link
            to="/approach"
            className={`text-caption uppercase tracking-widest transition-opacity hover:opacity-60 ${
              location.pathname === "/approach" ? "opacity-100" : "opacity-70"
            }`}
          >
            Approach
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
