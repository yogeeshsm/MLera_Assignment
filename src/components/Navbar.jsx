"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const links = [
    { label: "Home",        href: "#hero",         id: "hero" },
    { label: "Features",    href: "#features",     id: "features" },
    { label: "About",       href: "#about",        id: "about" },
    { label: "How It Works",href: "#how-it-works", id: "how-it-works" },
  ];

  /* Scroll-aware background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section detection */
  useEffect(() => {
    const sectionIds = links.map((l) => l.id);
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm shadow-gray-100/80 border-gray-100"
          : "bg-white/80 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <Image
              src="/logo-light.png"
              alt="MLera"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-medium transition duration-200 group ${
                    isActive ? "text-violet-600" : "text-gray-600 hover:text-violet-600"
                  }`}
                >
                  {link.label}
                  {/* Active indicator dot */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-500 transition-all duration-300 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#cta"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-violet-600 rounded-full hover:bg-violet-700 hover:scale-105 transition-all duration-300 ease-out shadow-sm hover:shadow-lg hover:shadow-violet-200"
            >
              Get Started
              <svg className="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-violet-600 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 bg-white/95 backdrop-blur-md border-t border-gray-100 space-y-1">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 text-sm font-medium transition py-2 px-3 rounded-lg ${
                  isActive
                    ? "text-violet-600 bg-violet-50"
                    : "text-gray-600 hover:text-violet-600 hover:bg-gray-50"
                }`}
              >
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />}
                {link.label}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-5 py-2.5 text-sm font-semibold text-white bg-violet-600 rounded-full hover:bg-violet-700 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
