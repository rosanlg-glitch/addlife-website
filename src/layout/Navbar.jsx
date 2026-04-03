import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Who We Are", path: "/who-we-are" },
    { label: "What We Do", path: "/what-we-do" },
    { label: "Knowledge", path: "/knowledge" },
    { label: "Career", path: "/career" },
  ];

  return (
    <nav className="dark bg-surface text-text border-b border-base">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-6">
        {/* LOGO */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img className="h-10 cursor-pointer" src="/logo.png" alt="Logo" />
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium

  after:content-[''] after:block
  after:absolute after:-top-3 after:bottom-0 after:left-1/2 after:-translate-x-1/2
  after:h-[4px] after:bg-primary
  after:transition-all after:duration-300

  ${
    isActive
      ? "text-text after:w-8"
      : "text-muted hover:text-text after:w-0 hover:after:w-8"
  }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link to="/contact">
            <Button size="sm">Contact Us</Button>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden dark bg-surface border-t border-base">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 text-sm border-b border-base text-muted hover:text-text"
            >
              {item.label}
            </NavLink>
          ))}

          <div className="p-4">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="w-full ">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
