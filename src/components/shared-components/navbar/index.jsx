"use client";

import Image from "next/image";
import React from "react";
import { navItems } from "../helpers/uiData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  console.log({ pathName });
  return (
    <nav className="h-16 lg:px-16 bg-gray-50 ">
      <div className="flex items-center justify-between h-full">
        <Image
          alt="logo"
          height={60}
          width={180}
          src="/logo.png"
          className="lg:h-[60px] lg:w-[180px] h-12 w-32"
        />

        <div className="flex gap-6">
          {navItems?.map((item) => {
            const { id, path, name } = item;

            return (
              <Link
                key={id}
                href={path}
                className={`text-sm tracking-[3.5px] ${
                  pathName === path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-950"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>

        <button class="border-[#268AFF] border hover:bg-[#1f6fd4] text-[#1f6fd4] hover:text-white text-sm py-1.5 px-4 rounded-sm transition-colors duration-200">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
