"use client";

import Image from "next/image";
import { Menu, X } from "react-feather";
import React, { useState } from "react";
import { navItems } from "../helpers/uiData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                alt="logo"
                height={60}
                width={180}
                src="/logoIcon.png"
                className=""
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-1000 ease-in-out ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-all duration-1000 ease-in-out ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                  {/* Hover indicator */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform transition-all duration-300 ease-in-out ${
                      isActive ? "scale-x-0" : "scale-x-0 hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-700 transition-all duration-200 rounded-md hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block w-6 h-6 transition-transform duration-200 transform" />
              ) : (
                <Menu className="block w-6 h-6 transition-transform duration-200 transform" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`relative block px-3 py-2 text-base font-medium transition-all duration-200 ease-in-out ${
                  isActive
                    ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//  <nav className="h-16 lg:px-16 bg-gray-50 ">
//       <div className="flex items-center justify-between h-full">
//         <Image
//           alt="logo"
//           height={60}
//           width={180}
//           src="/logo.png"
//           className="lg:h-[60px] lg:w-[180px] h-12 w-32"
//         />

//         <div className="flex gap-6">
//           {navItems?.map((item) => {
//             const { id, path, name } = item;

//             return (
//               <Link
//                 key={id}
//                 href={path}
//                 className={`text-sm tracking-[3.5px] ${
//                   pathName === path
//                     ? "text-blue-600 font-semibold"
//                     : "text-gray-950"
//                 }`}
//               >
//                 {name}
//               </Link>
//             );
//           })}
//         </div>

//         <button class="border-[#268AFF] border hover:bg-[#1f6fd4] text-[#1f6fd4] hover:text-white text-sm py-1.5 px-4 rounded-sm transition-colors duration-200">
//           Login
//         </button>
//       </div>
//     </nav>
