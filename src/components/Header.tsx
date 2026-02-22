import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Approach", to: "/approach" },
  { label: "Results", to: "/#results" },
  { label: "Resources", to: "/resources" },
];

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-xl tracking-tight transition-opacity hover:opacity-60"
        >
          Elemental
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`text-caption uppercase tracking-widest transition-opacity hover:opacity-60 ${
                location.pathname === item.to ? "opacity-100" : "opacity-60"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-foreground transition-transform duration-300 ${
              open ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-foreground transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-foreground transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background/95 backdrop-blur-sm ${
          open ? "max-h-60 border-b border-border/50" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-6 pb-6 pt-2 flex flex-col gap-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`text-caption uppercase tracking-widest transition-opacity hover:opacity-60 ${
                location.pathname === item.to ? "opacity-100" : "opacity-60"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
