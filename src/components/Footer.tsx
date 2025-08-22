"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--orange-50)",
        color: "var(--neutral-800)",
      }}
    >
      <div className="container section-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <Image
                src="/logo.png"
                alt="HumAhive Logo"
                width={413}
                height={384}
                className="w-12"
              />
              <span
                className="heading-3"
                style={{ color: "var(--neutral-800)" }}
              >
                HumAhive
              </span>
            </div>

            <p
              className="body-lg mb-8 max-w-sm"
              style={{ color: "var(--neutral-600)" }}
            >
              Empowering vulnerable communities in Kakuma refugee camp through
              education, livelihood training, and social support.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail size={20} style={{ color: "var(--orange-600)" }} />
                <a
                  href="mailto:humanafricanhive@gmail.com"
                  className="body-base hover:underline"
                  style={{ color: "var(--neutral-700)" }}
                >
                  humanafricanhive@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <Phone size={20} style={{ color: "var(--orange-600)" }} />
                <a
                  href="tel:+254708566780"
                  className="body-base hover:underline"
                  style={{ color: "var(--neutral-700)" }}
                >
                  +254 708 566 780
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin size={20} style={{ color: "var(--orange-600)" }} />
                <span
                  className="body-base"
                  style={{ color: "var(--neutral-700)" }}
                >
                  Kakuma Refugee Camp, Turkana County, Kenya
                </span>
              </div>
            </div>
          </div>

          {/* Links & Social */}
          <div className="space-y-8">
            <div>
              <h3
                className="heading-4 mb-6"
                style={{ color: "var(--neutral-800)" }}
              >
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/#programs"
                      className="body-base hover:underline"
                      style={{ color: "var(--neutral-700)" }}
                    >
                      Programs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#about"
                      className="body-base hover:underline"
                      style={{ color: "var(--neutral-700)" }}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#achievements"
                      className="body-base hover:underline"
                      style={{ color: "var(--neutral-700)" }}
                    >
                      Achievements
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/#get-involved"
                      className="body-base hover:underline"
                      style={{ color: "var(--neutral-700)" }}
                    >
                      Get Involved
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gallery"
                      className="body-base hover:underline"
                      style={{ color: "var(--neutral-700)" }}
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3
                className="heading-4 mb-6"
                style={{ color: "var(--neutral-800)" }}
              >
                Get in Touch
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/254708566780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border rounded-xl flex items-center justify-center transition-colors hover:bg-orange-100"
                  style={{
                    borderColor: "var(--orange-300)",
                  }}
                >
                  <svg
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    viewBox="0 0 30.667 30.667"
                    fill="currentColor"
                    style={{ color: "var(--orange-600)" }}
                    role="img"
                    aria-label="WhatsApp"
                  >
                    <path
                      d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017
                      c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382
                      c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076
                      c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427
                      c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437
                      c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536
                      c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609
                      c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611
                      c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787
                      c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739
                      C23.307,19.268,23.307,18.533,23.214,18.38z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/humahive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border rounded-xl flex items-center justify-center transition-colors hover:bg-orange-100"
                  style={{
                    borderColor: "var(--orange-300)",
                    color: "var(--orange-600)",
                  }}
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-4 pt-4"
          style={{ borderTop: "1px solid var(--orange-200)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className="body-sm mb-4 md:mb-0"
              style={{ color: "var(--neutral-600)" }}
            >
              © {new Date().getFullYear()} HumAhive. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 body-sm hover:underline"
              style={{ color: "var(--neutral-600)" }}
            >
              <ArrowUp size={16} />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
