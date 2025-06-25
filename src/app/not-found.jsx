import Link from "next/link";
import React from "react";
import { ArrowLeft, Home } from "react-feather";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-primary/10 via-white to-secondary/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-20 h-20 rounded-full top-20 left-10 bg-primary/20 blur-xl" />
        <div className="absolute w-32 h-32 rounded-full top-40 right-20 bg-secondary/30 blur-xl" />
        <div className="absolute w-16 h-16 rounded-full bottom-20 left-1/4 bg-primary-main/25 blur-xl" />
        <div className="absolute w-24 h-24 rounded-full top-1/2 right-1/4 bg-primary/15 blur-xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="relative mb-4 font-bold text-8xl md:text-9xl text-primary">
            4<span className="text-primary-main">0</span>4
          </h1>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 font-bold text-8xl md:text-9xl text-primary blur-sm opacity-20">
            4<span className="text-primary-main">0</span>4
          </div>
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800 md:text-3xl">
            Oops! Page Not Found
          </h2>
          <p className="max-w-md mx-auto text-lg leading-relaxed text-gray-600">
            The page you're looking for seems to have wandered off into the
            digital void. Don't worry, it happens to the best of us!
          </p>
        </div>

        {/* Decorative dots */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-3 h-3 rounded-full bg-secondary" />
          <div className="w-3 h-3 rounded-full bg-secondary" />
          <div className="w-3 h-3 rounded-full bg-secondary" />
        </div>

        {/* Back to Home button */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 rounded-full bg-primary hover:bg-primary/90 hover:shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <div
          className="w-full h-full bg-gradient-to-r from-primary via-primary-main to-secondary"
          style={{
            clipPath:
              "polygon(0 60%, 25% 40%, 50% 60%, 75% 40%, 100% 60%, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* Static particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-2 h-2 rounded-full top-1/4 left-1/3 bg-primary/40" />
        <div className="absolute w-1 h-1 rounded-full top-3/4 right-1/3 bg-secondary/60" />
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-primary-main/50 rounded-full" />
        <div className="absolute w-2 h-2 rounded-full bottom-1/3 right-1/4 bg-primary/30" />
      </div>
    </div>
  );
};

export default NotFoundPage;
