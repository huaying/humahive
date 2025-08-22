"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Let browser handle navigation naturally for /#anchor links
    // This works both from same page and from other pages
    setIsMenuOpen(false);
  };

  const supportMailto =
    "mailto:humanafricanhive@gmail.com?subject=Support HumAhive&body=Dear HumAhive Team,%0D%0A%0D%0AI would like to support your work in Kakuma refugee camp.%0D%0A%0D%0APlease provide information about how to contribute.%0D%0A%0D%0AThank you.%0D%0A%0D%0ABest regards";

  return (
    <nav className={`nav ${isScrolled ? "nav-scrolled" : ""}`}>
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="HumAhive Logo"
              width={424}
              height={385}
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
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Support Button */}
          <div className="hidden md:block">
            <a
              href={supportMailto}
              className="btn btn-primary btn-sm nav-support-btn"
            >
              Support
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block body-base py-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={supportMailto}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full btn btn-primary mt-4"
                >
                  Support
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
