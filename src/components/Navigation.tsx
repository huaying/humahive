"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { donationUrl } from "@/data/links";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const navItems = [
    { href: "/#programs", label: "Programs" },
    { href: "/#about", label: "About" },
    { href: "/#achievements", label: "Achievements" },
    { href: "/#get-involved", label: "Get Involved" },
    { href: "/gallery", label: "Gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleDesktop = () => {
      if (desktop.matches) setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleDesktop);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleDesktop);
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    // Let browser handle navigation naturally for /#anchor links
    // This works both from same page and from other pages
    setIsMenuOpen(false);
  };

  return (
    <nav aria-label="Main navigation" className={`nav ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="HumAhive Logo"
              width={413}
              height={384}
              className="w-12"
            />
            <span className="heading-4">HumAhive</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="nav-link"
                aria-current={item.href === pathname ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Donation Button */}
          <div className="hidden lg:block">
            <a
              href={donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Donate on GoFundMe (opens in a new tab)"
              className="btn btn-primary btn-sm"
            >
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="icon-button lg:hidden"
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="nav-mobile lg:hidden"
          >
            <div className="container py-8">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="nav-link"
                    aria-current={item.href === pathname ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={donationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Donate on GoFundMe (opens in a new tab)"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full btn btn-primary mt-4"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
