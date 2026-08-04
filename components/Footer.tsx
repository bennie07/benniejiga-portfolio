'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from './ThemeContext';

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const monogramSrc =
    mounted && resolvedTheme === 'dark'
      ? '/logo/monogram-dark-mode.png'
      : '/logo/monogram-light-mode.png';

  return (
    <footer className="py-16 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Monogram + Brand Information */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              {mounted ? (
                <Image
                  src={monogramSrc}
                  alt="BE Monogram"
                  width={56}
                  height={56}
                  className="h-12 w-auto object-contain"
                />
              ) : (
                <div className="h-12 w-12 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded" />
              )}
            </Link>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-main">Benjamin Ejiga</h3>
              <p className="text-xs font-semibold text-[var(--accent-sage)] uppercase tracking-wider">
                Learning Experience Architect
              </p>
              <p className="text-xs text-muted font-mono pt-1">
                Digital Address: <span className="text-main font-semibold">bennie.pro</span>
              </p>
            </div>
          </div>

          {/* Quick Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-medium text-muted">
            <div className="space-y-2">
              <div className="text-main font-bold uppercase tracking-wider text-[11px]">Navigation</div>
              <ul className="space-y-1.5">
                <li><a href="#approach" className="hover:text-[var(--accent-sage)] transition-colors">Approach</a></li>
                <li><a href="#engagements" className="hover:text-[var(--accent-sage)] transition-colors">Engagements</a></li>
                <li><a href="#experiences" className="hover:text-[var(--accent-sage)] transition-colors">Learning Experiences</a></li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-main font-bold uppercase tracking-wider text-[11px]">Practice & R&D</div>
              <ul className="space-y-1.5">
                <li><a href="#beyond-client-work" className="hover:text-[var(--accent-sage)] transition-colors">Beyond Client Work</a></li>
                <li><a href="#my-practice" className="hover:text-[var(--accent-sage)] transition-colors">My Practice</a></li>
                <li><a href="#who-i-work-with" className="hover:text-[var(--accent-sage)] transition-colors">Who I Work With</a></li>
                <li><a href="#contact" className="hover:text-[var(--accent-sage)] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-2 col-span-2 sm:col-span-1">
              <div className="text-main font-bold uppercase tracking-wider text-[11px]">Connect</div>
              <div className="flex space-x-3 text-base">
                <a
                  href="mailto:benjamin@bennie.pro"
                  className="w-8 h-8 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-muted hover:text-[var(--accent-sage)] hover:border-[var(--accent-sage)] transition-all"
                  aria-label="Email"
                >
                  <i className="fa-solid fa-envelope" />
                </a>
                <a
                  href="tel:+2347069589257"
                  className="w-8 h-8 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-muted hover:text-[var(--accent-sage)] hover:border-[var(--accent-sage)] transition-all"
                  aria-label="Phone"
                >
                  <i className="fa-solid fa-phone" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-muted hover:text-[var(--accent-sage)] hover:border-[var(--accent-sage)] transition-all"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-4">
          <p>© {new Date().getFullYear()} Benjamin Ejiga. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Designed with Systems Thinking • <span className="text-[var(--accent-sage)]">bennie.pro</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
