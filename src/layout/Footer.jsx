import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Terms of Service", path: "/terms" },
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Cookies", path: "/cookies" },
];

const socialLinks = [
  { label: "LinkedIn", icon: "/linkedin.png", href: "https://linkedin.com" },
  { label: "YouTube", icon: "/youtube.png", href: "https://youtube.com" },
  { label: "Pinterest", icon: "/pinterest.png", href: "https://pinterest.com" },
];

export default function Footer() {
  return (
    <footer className="dark bg-background">
      <div className="py-16 flex flex-col items-center gap-8 px-6">
        <img
          src="/primarylogo.png"
          alt="AddLife"
          className="h-24 md:h-32 lg:h-40"
        />

        <div className="flex flex-wrap justify-center items-center gap-4">
          {footerLinks.map((link, index) => (
            <div key={link.path} className="flex items-center gap-4">
              <Link
                to={link.path}
                className="text-white font-semibold text-sm hover:text-primary transition"
              >
                {link.label}
              </Link>
              {index < footerLinks.length - 1 && (
                <span className="text-gray-500">|</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {socialLinks.map((social, index) => (
            <div key={social.label} className="flex items-center gap-4">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-primary transition"
              >
                <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition">
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-4 h-4 object-contain"
                  />
                </span>
                <span className="font-semibold text-sm">{social.label}</span>
              </a>
              {index < socialLinks.length - 1 && (
                <span className="text-gray-500">|</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary py-3 text-center">
        <p className="text-black text-sm font-medium">
          © Copyright 2026 Addlife Coating System. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
