export default function Navbar() {
    const links = [
      { label: "Home", href: "#" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" }, 
    ];
  
    return (
      <nav className="fixed top-0 inset-x-0 backdrop-blur-lg bg-slate-900/70 border-b border-slate-800 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="font-bold text-lg tracking-wide">AX</span>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }