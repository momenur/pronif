import React from "react";
import { Globe, Mail, MapPin, Phone } from "react-feather";
import {
  footerLinks,
  partners,
} from "@/components/shared-components/helpers/uiData";

const Footer = () => {
  return (
    <footer className="text-white bg-dark">
      {/* Newsletter Section */}
      <div className="border-b border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="px-4 py-8 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="mb-2 font-semibold text-20 text-secondary">
                Stay Updated
              </h3>
              <p className="font text-border text-14">
                Subscribe to our newsletter for the latest updates
              </p>
            </div>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 px-4 py-3 text-gray-900 bg-white border rounded-l-lg text-14 border-border-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 font-medium text-white transition-all duration-300 rounded-r-lg text-14 bg-gradient-to-r from-primary to-primary-main hover:from-primary-main hover:to-secondary">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <div className="gap-8 lg:flex">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 font-bold text-24 text-secondary">
              YOURCOMPANY.COM
            </h2>
            <p className="mb-4 leading-relaxed text-gray-400 text-14">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <button className="font-medium transition-colors duration-300 text-14 text-primary hover:text-secondary">
              read more →
            </button>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-14">
                <Mail size={16} className="text-secondary" />
                <span>hello@yourcompany.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-14">
                <Phone size={16} className="text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-14">
                <MapPin size={16} className="text-secondary" />
                <span>123 Business St, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Discover */}
          <div className="grid justify-between w-full grid-cols-2 gap-5 mt-6 md:grid-cols-4 md:mt-10 lg:mt-0">
            <div>
              <h3 className="mb-4 font-semibold text-18 text-primary">
                Discover
              </h3>
              <ul className="space-y-2">
                {footerLinks.discover.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 transition-colors duration-300 text-14 hover:text-primary"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="mb-4 font-semibold text-18 text-primary">About</h3>
              <ul className="space-y-2">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 transition-colors duration-300 text-14 hover:text-primary"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 font-semibold text-18 text-primary">
                Resources
              </h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 transition-colors duration-300 text-14 hover:text-primary"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="mb-4 font-semibold text-18 text-primary">
                Social
              </h3>
              <ul className="space-y-2">
                {footerLinks.social.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-gray-400 transition-colors duration-300 text-14 hover:text-primary"
                      >
                        <IconComponent size={16} />
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="p-6 pt-8 mt-12 border-t rounded-lg border-primary/30 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <span className="font-medium text-14 text-secondary">
              Our Partners:
            </span>
            <div className="flex flex-wrap items-center gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-500 transition-colors duration-300 cursor-pointer text-12 hover:text-primary"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  {partner}
                </div>
              ))}
              <button className="font-medium transition-colors duration-300 text-12 text-primary hover:text-secondary">
                See All →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-primary/20 bg-gradient-to-r from-secondary/5 to-primary/5">
        <div className="px-4 py-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="flex items-center gap-1 text-gray-500 text-12">
              Copyright ©2024 All rights reserved | This template is made with{" "}
              <span className="text-primary">
                <Globe size={14} />
              </span>{" "}
              by{" "}
              <span className="font-medium text-primary text-14">pronif</span>
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-500 transition-colors duration-300 text-12 hover:text-primary"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-500 transition-colors duration-300 text-12 hover:text-primary"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-500 transition-colors duration-300 text-12 hover:text-primary"
              >
                Compliances
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
