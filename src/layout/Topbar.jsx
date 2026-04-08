const contacts = [
  {
    icon: <img className="h-6" src="/Quote_Icon.png" alt="icon" />,
    label: "Call Us 24/7",
    value: "+91 9742075252",
    href: "tel:+919742075252",
  },
  {
    icon: <img className="h-6" src="/Quote_Icon.png" alt="icon" />,
    label: "Send Us Mail",
    value: "info@addlifecoating.com",
    href: "mailto:info@addlifecoating.com",
  },
  {
    icon: <img className="h-6" src="/Quote_Icon.png" alt="icon" />,
    label: "Our Location",
    value: "Bommasandra Industrial Area",
    href: "#",
  },
];

export default function Topbar() {
  return (
    <div className="hidden md:flex fixed top-0 left-0 w-full z-50 dark bg-background border-b border-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-14">
          {/* Contact Items */}
          <div className="hidden md:flex items-center divide-x divide-base">
            {contacts.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-3 px-6 group"
              >
                <span>{item.icon}</span>

                <div className="leading-tight">
                  <div className="text-xs-custom text-muted uppercase tracking-widest">
                    {item.label}
                  </div>

                  <div className="text-text font-semibold group-hover:text-primary transition-colors duration-200">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
