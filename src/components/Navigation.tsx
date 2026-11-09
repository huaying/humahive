"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { donationUrl } from "@/data/links";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    // Let browser handle navigation naturally for /#anchor links
    // This works both from same page and from other pages
    setIsMenuOpen(false);
  };

  return (
    <nav className={`nav ${isScrolled ? "nav-scrolled" : ""}`}>
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
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Donation Button */}
          <div className="hidden md:block">
            <a
              href={donationUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Donate on GoFundMe (opens in a new tab)"
              className="btn btn-primary btn-sm nav-support-btn"
            >
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="md:hidden p-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="md:hidden absolute top-20 left-0 right-0 shadow-lg"
            style={{ backgroundColor: "var(--color-background)" }}
          >
            <div className="container py-8">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="block body-base py-2"
                    style={{ color: "var(--color-text-secondary)" }}
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
