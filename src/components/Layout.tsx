import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  CarFront,
  BookOpen,
  CalendarCheck,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useLanguage, LANGUAGES } from "../context/LanguageContext";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, cycleLanguage, t } = useLanguage();

  const currentLang =
    LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const navLinks = [
    { name: t.nav.home, path: "/", icon: <CarFront size={18} /> },
    { name: t.nav.blog, path: "/blog", icon: <BookOpen size={18} /> },
    { name: t.nav.book, path: "/prenota", icon: <CalendarCheck size={18} /> },
    { name: t.nav.quiz, path: "/quiz", icon: <HelpCircle size={18} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass-panel border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-[var(--color-neon-yellow)] flex items-center justify-center text-black font-bold text-xl group-hover:scale-110 transition-transform">
                  N
                </div>
                <span className="font-display text-2xl tracking-wide uppercase">
                  Next
                  <span className="text-[var(--color-neon-yellow)]">Gen</span>
                </span>
              </Link>

              <button
                type="button"
                onClick={cycleLanguage}
                title={t.nav.switchLang}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold tracking-widest uppercase border border-white/20 bg-white/10 text-white hover:border-[var(--color-neon-yellow)] hover:text-[var(--color-neon-yellow)] transition-all cursor-pointer"
              >
                <img
                  src={currentLang.flag}
                  alt={currentLang.name}
                  className="w-4 h-3 object-cover rounded-[2px]"
                />
                <span>{currentLang.label}</span>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => {
                  const isActive =
                    location.pathname === link.path ||
                    (link.path !== "/" &&
                      location.pathname.startsWith(link.path));
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-white/10 text-[var(--color-neon-yellow)]"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-panel border-t border-white/10"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => {
                  const isActive =
                    location.pathname === link.path ||
                    (link.path !== "/" &&
                      location.pathname.startsWith(link.path));
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium ${
                        isActive
                          ? "bg-white/10 text-[var(--color-neon-yellow)]"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  );
                })}
                <div className="flex items-center gap-2 px-3 pt-2 pb-1">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => setLanguage(l.code)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold uppercase border transition-all ${
                        language === l.code
                          ? "bg-[var(--color-neon-yellow)] text-black border-[var(--color-neon-yellow)]"
                          : "bg-white/5 text-gray-300 border-white/15"
                      }`}
                    >
                      <img
                        src={l.flag}
                        alt={l.name}
                        className="w-4 h-3 object-cover rounded-[2px]"
                      />
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[var(--color-neon-yellow)] flex items-center justify-center text-black font-bold text-xs">
              N
            </div>
            <span className="font-display text-xl tracking-wide uppercase">
              Next<span className="text-[var(--color-neon-yellow)]">Gen</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm font-mono">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-[var(--color-neon-yellow)] transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[var(--color-neon-yellow)] transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
