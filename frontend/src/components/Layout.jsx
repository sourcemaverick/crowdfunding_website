import { useState } from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, X, Facebook, Globe, ChevronDown } from "lucide-react";
import { useLang, languages } from "@/i18n";

const navItems = [
  { to: "/", key: "nav.home", id: "home" },
  { to: "/download", key: "nav.download", id: "download-app" },
  { to: "/donate", key: "nav.donate", id: "donate" },
];

const LangSwitcher = () => {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const current = languages.find((l) => l.code === lang);
  return (
    <div className="relative">
      <button
        data-testid="language-switcher-button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full border bg-white px-3.5 py-2 text-sm font-semibold hover:border-[var(--gold)] transition-colors"
        style={{ borderColor: "var(--line)", color: "var(--ink-2)" }}
      >
        <Globe size={16} style={{ color: "var(--gold)" }} />
        {current?.label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 mt-2 w-40 rounded-xl border bg-white shadow-lg overflow-hidden z-50"
            style={{ borderColor: "var(--line)" }}
            data-testid="language-switcher-menu"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                data-testid={`language-option-${l.code}`}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-base hover:bg-[var(--bg-2)] transition-colors"
                style={{ color: l.code === lang ? "var(--gold)" : "var(--ink)", fontWeight: l.code === lang ? 700 : 500 }}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  return (
    <header
      className="sticky top-0 z-40 border-b bg-white/85 backdrop-blur-md"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-2.5">
          <span className="hidden md:inline font-serif-d text-2xl font-semibold tracking-wide" style={{ color: "var(--ink)" }}>
            Gururaj AI App Crowdfunding
          </span>
          <span className="md:hidden font-serif-d text-lg font-semibold tracking-wide" style={{ color: "var(--ink)" }}>
            Gururaj AI App
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              data-testid={`nav-link-${item.id}`}
              className={({ isActive }) => `nav-link text-base font-medium ${isActive ? "active" : ""}`}
              style={{ color: "var(--ink-2)" }}
            >
              {t(item.key)}
            </NavLink>
          ))}
          <LangSwitcher />
          <Link
            to="/donate"
            data-testid="nav-donate-cta"
            className="btn-gold rounded-full px-6 py-2.5 text-base font-semibold"
          >
            {t("nav.donateNow")}
          </Link>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <LangSwitcher />
          <button
            data-testid="mobile-menu-toggle"
            className="p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
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
                  data-testid={`mobile-nav-link-${item.id}`}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium py-1"
                  style={{ color: "var(--ink)" }}
                >
                  {t(item.key)}
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
  const { t } = useLang();
  if (pathname === "/donate") return null;
  return (
    <Link
      to="/donate"
      data-testid="floating-donate-button"
      className="float-donate btn-gold fixed bottom-32 right-6 z-50 flex items-center gap-2 rounded-full px-6 py-3.5 text-lg font-bold"
    >
      <Heart size={20} fill="currentColor" />
      {t("floating.donate")}
    </Link>
  );
};

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="border-t" style={{ background: "var(--sage)", borderColor: "var(--line)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-white/85">
        <div>
          <span className="font-serif-d text-2xl font-semibold text-white">Gururaj AI App Crowdfunding Campaign</span>
          <p className="text-base leading-relaxed mt-4">{t("footer.mission")}</p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">{t("footer.about")}</h4>
          <ul className="space-y-3 text-base">
            <li>
              <a href="https://www.americanmeditationsociety.org/about/ams-history-2/" target="_blank" rel="noopener noreferrer" data-testid="footer-link-gururaj-info" className="hover:text-white transition-colors">
                {t("footer.info")}
              </a>
            </li>
            <li>
              <Link to="/download" data-testid="footer-link-download" className="hover:text-white transition-colors">
                {t("footer.downloadApp")}
              </Link>
            </li>
            <li>
              <Link to="/donate" data-testid="footer-link-donate" className="hover:text-white transition-colors">
                {t("footer.support")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-4">{t("footer.community")}</h4>
          <a
            href="https://www.facebook.com/profile.php?id=61593989761784"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-link-facebook"
            className="inline-flex items-center gap-2.5 text-base hover:text-white transition-colors"
          >
            <Facebook size={20} />
            {t("footer.fb")}
          </a>
          <p className="mt-6 text-sm text-white/60">
            © {new Date().getFullYear()} The Source. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

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
