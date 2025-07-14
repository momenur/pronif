import Link from "next/link";

const AppLogo = ({ className }) => (
  <Link href="/" className={`flex items-center space-x-3 group ${className}`}>
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
);

export default AppLogo;
