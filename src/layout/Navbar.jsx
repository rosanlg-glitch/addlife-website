import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";

const navItems = [
  {
    label: "Who We Are",
    path: "/who-we-are",
    description: "Learn about AddLife, our mission and our team.",
    cta: { label: "Discover More →", path: "/who-we-are" },
    dropdown: [
      { label: "About Us", path: "/who-we-are/about" },
      { label: "Our Team", path: "/who-we-are/team" },
      { label: "Our Vision", path: "/who-we-are/vision" },
    ],
  },
  {
    label: "What We Do",
    path: "/what-we-do",
    description: "We provide world-class HiPIMS PVD coating solutions.",
    cta: { label: "Explore Services →", path: "/what-we-do" },
    dropdown: [
      { label: "PVD Coating", path: "/what-we-do/pvd-coating" },
      { label: "Grinding", path: "/what-we-do/grinding" },
      { label: "AMC Service", path: "/what-we-do/amc-service" },
      { label: "PVD Coating Machine", path: "/what-we-do/pvd-machine" },
    ],
  },
  {
    label: "Knowledge",
    path: "/knowledge",
    description: "Stay updated with our latest insights and resources.",
    cta: { label: "Read More →", path: "/knowledge" },
    dropdown: [
      { label: "Blogs", path: "/knowledge/blogs" },
      { label: "Case Studies", path: "/knowledge/case-studies" },
      { label: "FAQs", path: "/knowledge/faqs" },
    ],
  },
  {
    label: "Career",
    path: "/career",
    description: "Join our growing team and build your future with AddLife.",
    cta: { label: "Apply Now →", path: "/career" },
    dropdown: [
      { label: "Open Positions", path: "/career/positions" },
      { label: "Life at AddLife", path: "/career/life" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="fixed top-0 md:top-14 left-0 w-full z-40 bg-black text-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-6">
        {/* LOGO */}
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <img className="h-10 cursor-pointer" src="/logo.png" alt="Logo" />
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.path}
              onMouseEnter={() => setActiveDropdown(item.path)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative flex items-center gap-1 px-3 py-5 text-sm font-medium
                  after:content-[''] after:block
                  after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                  after:h-[3px] after:bg-primary
                  after:transition-all after:duration-300
                  ${
                    isActive
                      ? "text-white after:w-full"
                      : "text-muted hover:text-white after:w-0 hover:after:w-full"
                  }`
                }
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === item.path ? "rotate-180" : ""
                    }`}
                  />
                )}
              </NavLink>
            </div>
          ))}

          <Link to="/contact">
            <Button size="sm">Contact Us</Button>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* FULL WIDTH DROPDOWN */}
      {activeDropdown && (
        <div
          className="absolute left-0 w-full dark bg-card border-t border-base z-50 shadow-2xl"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          {navItems.map((item) =>
            item.path === activeDropdown ? (
              <div
                key={item.path}
                className="max-w-7xl mx-auto px-6 py-10 flex gap-16"
              >
                {/* Left - Description */}
                <div className="w-[280px] flex-shrink-0 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-3">
                      {item.label}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <Link
                    to={item.cta.path}
                    onClick={() => setActiveDropdown(null)}
                    className="text-white font-semibold text-sm hover:text-primary transition mt-6 inline-block"
                  >
                    {item.cta.label}
                  </Link>
                </div>

                {/* Divider */}
                <div className="w-[1px] bg-gray-700 flex-shrink-0" />

                {/* Right - Links */}
                <div className="flex flex-col gap-0 flex-1">
                  {item.dropdown.map((sub, i) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => setActiveDropdown(null)}
                      className={`flex items-center justify-between py-4 text-sm text-muted hover:text-white transition group
                        ${i < item.dropdown.length - 1 ? "border-b border-gray-700" : ""}
                      `}
                    >
                      {sub.label}
                      <span className="text-muted group-hover:text-primary transition">
                        ›
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null,
          )}
        </div>
      )}

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden dark bg-surface border-t border-base">
          {navItems.map((item) => (
            <div key={item.path}>
              <div className="flex items-center justify-between px-6 py-3 border-b border-base">
                <NavLink
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted hover:text-text flex-1"
                >
                  {item.label}
                </NavLink>
                {item.dropdown && (
                  <button
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.path ? null : item.path,
                      )
                    }
                    className="text-muted p-1"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileExpanded === item.path ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {item.dropdown && mobileExpanded === item.path && (
                <div className="bg-card">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileExpanded(null);
                      }}
                      className="block px-10 py-3 text-sm text-muted hover:text-text border-b border-base"
                    >
                      › {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="p-4">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="w-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
