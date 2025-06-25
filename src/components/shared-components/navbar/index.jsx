"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "react-feather";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/components/shared-components/helpers/uiData";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 h-[85px]">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image alt="logo" height={60} width={180} src="/logo.png" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {navItems?.map((item) => {
              const { id, path, name } = item;
              const isActive = pathname === path;
              return (
                <Link
                  key={id}
                  href={path}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-1000 ease-in-out ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {name}

                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-main transform transition-all duration-1000 ease-in-out ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />

                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-main transform transition-all duration-300 ease-in-out ${
                      isActive ? "scale-x-0" : "scale-x-0 hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <button className="border-primary border hover:bg-primary text-primary hover:text-white text-sm py-1.5 px-4 rounded-sm transition-colors duration-200 hidden md:block">
            Login
          </button>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 transition-all duration-200 rounded-md"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="text-red-500 transition-transform duration-200 transform size-7" />
              ) : (
                <Menu className="transition-transform duration-200 transform size-7 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[calc(90vh-85px)] opacity-100 overflow-y-auto"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 ">
          {navItems.map((item) => {
            const { id, path, name } = item;
            const isActive = pathname === path;
            return (
              <Link
                key={id}
                href={path}
                onClick={() => setIsOpen(false)}
                className={`relative block px-3 py-2 text-base font-medium transition-all duration-200 ease-in-out ${
                  isActive
                    ? "text-primary bg-blue-50 border-l-4 border-primary-main"
                    : "text-gray-700 hover:text-primary hover:bg-gray-100"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <div className="mx-6">
          <button className="border-primary border hover:bg-primary text-primary hover:text-white text-sm py-1.5 rounded-sm transition-colors duration-200 md:hidden mb-8 w-full">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
