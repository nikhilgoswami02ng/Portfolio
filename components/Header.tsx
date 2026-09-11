"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-space-bg/85 backdrop-blur-md border-b border-space-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5 sm:px-8 py-4">
        <a
          href="#top"
          className="font-display text-sm sm:text-base font-semibold tracking-tight text-text-primary"
        >
          Nikhil Goswami
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-space-borderStrong bg-space-panel/70 px-4 py-2 text-sm text-text-primary transition-colors hover:border-accent-blue/60 hover:bg-space-panel"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-space-border text-text-primary"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-space-border bg-space-bg/97 backdrop-blur-md">
          <nav className="flex flex-col px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-text-muted border-b border-space-border/60 last:border-none transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-space-borderStrong bg-space-panel px-4 py-3 text-sm text-text-primary"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
