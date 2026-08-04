'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from './ThemeContext';

export default function Header() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Approach', href: '#approach' },
    { name: 'Engagements', href: '#engagements' },
    { name: 'Learning Experiences', href: '#experiences' },
    { name: 'Contact', href: '#contact' },
  ];

  const logoSrc =
    mounted && resolvedTheme === 'dark'
      ? '/logo/logo-dark-mode.png'
      : '/logo/logo-light-mode.png';

  const cycleTheme = () => {
    if (theme === 'auto') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('auto');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-header py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {mounted ? (
            <Image
              src={logoSrc}
              alt="Benjamin Ejiga Logo"
              width={190}
              height={42}
              className="h-9 w-auto object-contain transition-opacity duration-200"
              priority
            />
          ) : (
            <div className="h-9 w-40 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded" />
          )}
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted hover:text-[var(--accent-sage)] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Controls (Theme switch + CTA) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={cycleTheme}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent-sage)] transition-all cursor-pointer"
            title={`Current mode: ${theme}. Click to switch theme.`}
            aria-label="Toggle theme"
          >
            {theme === 'auto' && (
              <>
                <i className="fa-solid fa-wand-magic-sparkles text-[var(--accent-sage)]" />
                <span>Auto</span>
              </>
            )}
            {theme === 'light' && (
              <>
                <i className="fa-solid fa-sun text-amber-500" />
                <span>Light</span>
              </>
            )}
            {theme === 'dark' && (
              <>
                <i className="fa-solid fa-moon text-indigo-400" />
                <span>Dark</span>
              </>
            )}
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="btn-sage px-4 py-2 rounded-lg text-xs tracking-wide uppercase font-semibold"
          >
            Discuss Your Project
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={cycleTheme}
            className="p-2 rounded-full border border-[var(--border-color)] text-xs"
            aria-label="Toggle theme"
          >
            {theme === 'auto' ? '⚡ Auto' : theme === 'light' ? '☀︎' : '🌙'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--text-main)]"
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-header border-b border-[var(--border-color)] px-4 pt-4 pb-6 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3 font-medium text-base">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-muted hover:text-[var(--accent-sage)] py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[var(--border-color)]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-sage w-full block text-center py-3 rounded-lg font-semibold text-sm"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
