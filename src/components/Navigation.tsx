import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/creativity", label: "Творчество" },
    { path: "/story", label: "История" },
    { path: "/contacts", label: "Контакты" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-academia-brown/95 backdrop-blur-sm border-b border-academia-gold/30">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-playfair font-bold text-academia-gold hover:text-academia-cream transition-colors"
          >
            Academia Aesthetics
          </Link>

          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-colors hover:text-academia-gold ${
                  location.pathname === item.path
                    ? "text-academia-gold"
                    : "text-academia-cream"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-academia-gold rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
