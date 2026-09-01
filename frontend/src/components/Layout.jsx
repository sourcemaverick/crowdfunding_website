import { useState } from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, X, Facebook } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/download", label: "Download App" },
  { to: "/donate", label: "Donate" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-40 border-b bg-white/85 backdrop-blur-md"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-2.5">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-serif-d text-xl font-semibold"
            style={{ background: "var(--sage)" }}
          >
            ॐ
          </span>
          <span className="font-serif-d text-2xl font-semibold tracking-wide" style={{ color: "var(--ink)" }}>
            SOURCE
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-testid={`nav-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
              className={({ isActive }) => `nav-link text-base font-medium ${isActive ? "active" : ""}`}
              style={{ color: "var(--ink-2)" }}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            data-testid="nav-donate-cta"
            className="btn-gold rounded-full px-6 py-2.5 text-base font-semibold"
          >
            Donate Now
          </Link>
        </nav>
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t"
            style={{ borderColor: "var(--line)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium py-1"
                  style={{ color: "var(--ink)" }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

const FloatingDonate = () => {
  const { pathname } = useLocation();
  if (pathname === "/donate") return null;
  return (
    <Link
      to="/donate"
      data-testid="floating-donate-button"
      className="float-donate btn-gold fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-6 py-3.5 text-lg font-bold"
    >
      <Heart size={20} fill="currentColor" />
      Donate
    </Link>
  );
};

const Footer = () => (
  <footer className="border-t" style={{ background: "var(--sage)", borderColor: "var(--line)" }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-white/85">
      <div>
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-9 h-9 rounded-full flex items-center justify-center bg-white/15 font-serif-d text-xl">ॐ</span>
          <span className="font-serif-d text-2xl font-semibold text-white">SOURCE</span>
        </div>
        <p className="text-base leading-relaxed">
          A mission to bring Gururaj Ananda Yogi's spiritual teachings and presence to the world through mindful technology.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">About Gururaj</h4>
        <ul className="space-y-3 text-base">
          <li>
            <a href="#gururaj-info" data-testid="footer-link-gururaj-info" className="hover:text-white transition-colors">
              General information about Gururaj
            </a>
          </li>
          <li>
            <Link to="/download" data-testid="footer-link-download" className="hover:text-white transition-colors">
              Download the App
            </Link>
          </li>
          <li>
            <Link to="/donate" data-testid="footer-link-donate" className="hover:text-white transition-colors">
              Support the Mission
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">Community</h4>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="footer-link-facebook"
          className="inline-flex items-center gap-2.5 text-base hover:text-white transition-colors"
        >
          <Facebook size={20} />
          AI Gururaj Support — Facebook
        </a>
        <p className="mt-6 text-sm text-white/60">
          © {new Date().getFullYear()} SOURCE. Bringing the light of true spirituality to the world.
        </p>
      </div>
    </div>
  </footer>
);

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingDonate />
    </div>
  );
}
