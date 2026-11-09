import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="site-footer">
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
              <span className="heading-3">
                HumAhive
              </span>
            </div>

            <p className="body-lg mb-8 max-w-sm">
              Empowering vulnerable communities in Kakuma refugee camp through
              education, livelihood training, and social support.
            </p>

            <div className="space-y-4">
              <div className="footer-contact">
                <Mail size={20} aria-hidden="true" />
                <a
                  href="mailto:humanafricanhive@gmail.com"
                  className="footer-link body-base"
                >
                  humanafricanhive@gmail.com
                </a>
              </div>

              <div className="footer-contact">
                <Phone size={20} aria-hidden="true" />
                <a
                  href="tel:+254708566780"
                  className="footer-link body-base"
                >
                  +254 708 566 780
                </a>
              </div>

              <div className="footer-contact">
                <MapPin size={20} aria-hidden="true" />
                <span className="body-base">
                  Kakuma Refugee Camp, Turkana County, Kenya
                </span>
              </div>
            </div>
          </div>

          {/* Links & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-4 mb-4">
                Quick Links
              </h3>
              <ul className="footer-links">
                {[
                  { href: "/#programs", label: "Programs" },
                  { href: "/#about", label: "About" },
                  { href: "/#achievements", label: "Achievements" },
                  { href: "/#get-involved", label: "Get Involved" },
                  { href: "/gallery", label: "Gallery" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link body-base">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="heading-4 mb-4">
                Get in Touch
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/254708566780"
                  aria-label="Chat on WhatsApp (opens in a new tab)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-button"
                >
                  <svg
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    viewBox="0 0 30.667 30.667"
                    fill="currentColor"
                    aria-hidden="true"
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
                  aria-label="HumAhive on LinkedIn (opens in a new tab)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-button"
                >
                  <Linkedin size={24} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom mt-4 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="body-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} HumAhive. All rights reserved.
            </p>

            <a
              href="#top"
              className="footer-link gap-2 body-sm"
            >
              <ArrowUp size={16} aria-hidden="true" />
              <span>Back to top</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
