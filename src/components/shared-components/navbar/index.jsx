import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-16 px-16 bg-gray-50">
      <Image alt="logo" height={60} width={180} src="/logo.png" />
    </nav>
  );
};

export default Navbar;
