import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { MapPin, Gift, Home, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function SiteHeader() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // quando a rota mudar, se tiver hash #presentes faz scroll
  useEffect(() => {
    if (hash === "#presentes") {
      const el = document.getElementById("presentes");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const navigationItems = [
    {
      label: "Início",
      path: "/",
      icon: Home,
      isActive: pathname === "/"
    },
    {
      label: "Como chegar",
      path: "/local",
      icon: MapPin,
      isActive: pathname === "/local"
    },
    {
      label: "Presentes",
      action: () => {
        if (pathname === "/") {
          // já está no home → só scrolla
          const el = document.getElementById("presentes");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        } else {
          // força navegação para home com hash
          navigate("/#presentes");
        }
      },
      icon: Gift,
      isActive: false
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 z-50" onClick={closeMenu}>
          <img src="/bk.png" alt="Monograma Beatriz & Kenidy" className="h-9 w-9 object-contain" />
          <span className="font-display text-xl md:text-2xl tracking-tight">
            Beatriz <span className="mx-1">&</span> Kenidy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const commonClasses = "inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary";
            const activeClasses = item.isActive ? "text-primary" : "";

            if (item.action) {
              return (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`${commonClasses} ${activeClasses}`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`${commonClasses} ${activeClasses}`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Botão Mobile */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={closeMenu} />
            <nav className="fixed top-16 left-0 right-0 bg-background border-b border-border p-6">
              <div className="flex flex-col gap-4">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const commonClasses = "inline-flex items-center gap-3 text-base font-medium py-2 transition-colors hover:text-primary";
                  const activeClasses = item.isActive ? "text-primary" : "";

                  if (item.action) {
                    return (
                      <button
                        key={item.label}
                        onClick={() => {
                          item.action?.();
                          closeMenu();
                        }}
                        className={`${commonClasses} ${activeClasses}`}
                      >
                        <Icon className="w-5 h-5" />
                        {item.label}
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      className={`${commonClasses} ${activeClasses}`}
                      onClick={closeMenu}
                    >
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
