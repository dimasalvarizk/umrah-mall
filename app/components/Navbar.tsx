"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, User, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Umrah Packages", href: "#packages" },
  { name: "Train", href: "#train" },
  { name: "Hotels", href: "#hotels" },
];

const languages = [
  { code: "en", name: "English", flagUrl: "https://flagcdn.com/w40/gb.png" },
  { code: "id", name: "Indonesian", flagUrl: "https://flagcdn.com/w40/id.png" },
  { code: "ar", name: "العربية", flagUrl: "https://flagcdn.com/w40/sa.png" },
];

const Logo = ({ className = "h-10" }: { className?: string }) => (
  <img
    src="/Logo.png"
    alt="UMRAH Mall"
    className={`${className} w-auto object-contain transition-opacity duration-200 hover:opacity-90 cursor-pointer`}
  />
);

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy
      const scrollPosition = window.scrollY + 250;
      const sections = navLinks.map(link => {
        const el = document.querySelector(link.href);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.clientHeight;
          return { name: link.name, top, bottom: top + height };
        }
        return null;
      }).filter(Boolean) as { name: string; top: number; bottom: number }[];

      const currentSection = sections.find(
        sec => scrollPosition >= sec.top && scrollPosition <= sec.bottom
      );

      if (currentSection) {
        setActiveLink(currentSection.name);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 lg:top-8 left-0 right-0 z-50 px-4 md:px-10 xl:px-[133px] flex justify-center pointer-events-none"
      >
        <nav
          className={`w-full max-w-[1654px] h-[80px] lg:h-[92px] flex items-center justify-between px-8 py-3 transition-all duration-300 pointer-events-auto rounded-[15px] border font-cairo ${scrolled
            ? "bg-black/60 backdrop-blur-xl border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
            : "bg-[#00000033] backdrop-blur-md border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            }`}
        >
          {/* Logo & Vertical Divider */}
          <div className="flex items-center gap-5">
            <Link href="/">
              <Logo className="h-[28px] lg:h-[32px]" />
            </Link>
            <div className="h-6 w-px bg-white/20 self-center hidden sm:block"></div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center lg:gap-14 xl:gap-20 h-full relative">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`text-sm font-medium transition-all duration-200 relative h-full flex items-center group ${isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <>
                      {/* Soft ambient glow behind active link text */}
                      <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-12 h-6 bg-gold-default/25 rounded-full filter blur-md pointer-events-none z-0" />
                      
                      <motion.img
                        layoutId="activeNavIndicator"
                        src="/Navigasi.png"
                        alt="Active indicator"
                        className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 h-[12px] w-auto min-w-[48px] object-contain z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    </>
                  )}
                </Link>
              );
            })}
          </div>

          {/* User Controls - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold-default/30 transition-all text-xs font-semibold text-gray-200"
              >
                <img src={selectedLang.flagUrl} alt={selectedLang.name} className="w-4.5 h-3 object-cover rounded-[2px]" />
                <span className="tracking-wider uppercase">{selectedLang.name}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-36 bg-dark-card border border-dark-border rounded-xl shadow-2xl overflow-hidden z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangDropdownOpen(false);
                        }}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-xs font-semibold text-gray-300 hover:bg-gold-default hover:text-dark-bg transition-all"
                      >
                        <img src={lang.flagUrl} alt={lang.name} className="w-4 h-3 object-cover rounded-[2px]" />
                        <span>{lang.name.toUpperCase()}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile Button */}
            <Link
              href="#login"
              className="flex items-center justify-center p-2.5 rounded-xl bg-white/5 border border-white/10 text-gold-default hover:bg-gold-default hover:text-dark-bg hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <User className="w-4 h-4" />
            </Link>
          </div>

          {/* Hamburger Menu - Mobile */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:border-gold-default hover:text-gold-default transition-all"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </motion.div>

      {/* Side Menu Drawer - Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-dark-card border-l border-dark-border p-6 z-50 lg:hidden flex flex-col justify-between font-cairo"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-dark-border">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <Logo className="h-[34px]" />
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-gold-default hover:border-gold-default transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setActiveLink(link.name);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-base font-medium transition-colors py-1 ${activeLink === link.name ? "text-gold-default" : "text-gray-300 hover:text-gold-default"
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom Controls */}
              <div className="border-t border-dark-border pt-6 flex flex-col gap-4">
                {/* Language Select */}
                <div className="flex flex-col gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                  <span className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <Globe className="w-4 h-4" /> Language
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setSelectedLang(lang)}
                        className={`text-xs font-semibold px-3 py-2 rounded-lg border transition-all flex items-center justify-between ${selectedLang.code === lang.code
                          ? "bg-gold-default text-dark-bg border-gold-default"
                          : "bg-white/5 text-gray-300 border-white/10"
                          }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <img src={lang.flagUrl} alt={lang.name} className="w-4 h-3 object-cover rounded-[2px]" />
                          <span>{lang.name}</span>
                        </div>
                        {selectedLang.code === lang.code && <span className="text-[10px] uppercase font-bold tracking-wider opacity-85">(Active)</span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Profile Account */}
                <Link
                  href="#login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-gold-default hover:bg-gold-accent text-dark-bg text-sm font-semibold shadow-lg shadow-gold-default/10 hover:shadow-gold-default/20 transition-all"
                >
                  <User className="w-4 h-4" />
                  <span>My Account</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

