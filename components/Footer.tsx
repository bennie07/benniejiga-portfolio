export default function Footer() {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#methodology', label: 'Methodology' },
    { href: '#documents', label: 'Documents' },
    { href: '#projects', label: 'Projects' },
    { href: '#contributions', label: 'Contributions' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-navy text-white">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-raleway mb-3 text-white">Bennie Ejiga</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Learning Experience Designer &amp; E-Learning Developer crafting impactful learning solutions.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-semibold mb-4 text-white/70 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white/70 text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: 'fa-linkedin', label: 'LinkedIn' },
                { icon: 'fa-twitter', label: 'Twitter' },
                { icon: 'fa-behance', label: 'Behance' },
                { icon: 'fa-github', label: 'GitHub' },
              ].map((social) => (
                <a
                  key={social.icon}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 border border-white/20 text-white/60 rounded-full flex items-center justify-center hover:bg-white/10 hover:text-white transition"
                >
                  <i className={`fab ${social.icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/30 text-sm">
            &copy; 2025 Bennie Ejiga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
