"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Home, User, Briefcase, Mail } from "react-feather";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-border-light"
            : "bg-transparent"
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo with Animation */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="flex items-center justify-center w-10 h-10 transition-transform duration-300 transform bg-gradient-to-br from-primary to-primary-main rounded-xl group-hover:rotate-12">
                  <span className="font-bold text-white text-18">P</span>
                </div>
                <div className="absolute w-4 h-4 rounded-full -top-1 -right-1 bg-secondary animate-pulse"></div>
              </div>
              <span className="font-bold text-transparent text-20 lg:text-24 bg-gradient-to-r from-primary to-primary-main bg-clip-text">
                Pronif
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="items-center hidden space-x-1 lg:flex">
              {navigation.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-2 transition-all duration-300 group rounded-xl"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon
                        size={18}
                        className="transition-colors duration-300 transform text-border-dark group-hover:text-primary group-hover:scale-110"
                      />
                      <span className="font-medium text-border-dark transition-colors duration-300 text-14 group-hover:text-primary tracking-[2px]">
                        {item.name}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-main transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="items-center hidden space-x-4 lg:flex">
              <button className="relative px-4 py-2 font-medium text-gray-700 transition-colors duration-300 text-14 hover:text-primary group tracking-[2px]">
                Sign In
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-main text-white text-14 font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-primary-main to-secondary group-hover:opacity-100"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 transition-colors duration-300 lg:hidden rounded-xl"
            >
              <div className="relative w-6 h-6">
                <Menu
                  strokeWidth={2}
                  size={24}
                  className={`absolute inset-0 text-primary transition-all duration-300 ${
                    isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 text-red transition-all duration-300 ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="border-t bg-white/95 backdrop-blur-md border-border-light">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center p-3 space-x-3 transition-all duration-300 rounded-xl hover:bg-primary/10 group"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                      transition: `all 300ms ease-out ${index * 50}ms`,
                    }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 transition-transform duration-300 rounded-lg bg-gradient-to-br from-primary/10 to-primary-main/10 group-hover:scale-110">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <span className="font-medium text-border-dark transition-colors duration-300 text-16 group-hover:text-primary tracking-[1.5px]">
                      {item.name}
                    </span>
                  </Link>
                );
              })}

              <div className="pt-4 space-y-3 border-t border-border-light">
                <button className="w-full p-3 font-medium text-left text-gray-700 transition-colors duration-300 text-16 hover:text-primary tracking-[2px]">
                  Sign In
                </button>
                <button className="w-full p-3 bg-gradient-to-r from-primary to-primary-main text-white text-16 font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transform hover:-translate-y-0.5 transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Navbar;
