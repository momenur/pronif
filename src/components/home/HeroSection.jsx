"use client";

import { useState, useEffect } from "react";
import { ChevronRight, Play, Star, Users, Zap } from "react-feather";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <section
      className="relative flex items-center justify-center min-h-[calc(100vh-85px)] overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/10 to-primary-main/15"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div
          className="absolute rounded-full w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/25 blur-3xl animate-pulse"
          style={{
            top: "10%",
            left: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-secondary/35 to-primary-main/30 blur-2xl animate-pulse"
          style={{
            top: "60%",
            right: "15%",
            transform: `translate(${mousePosition.x * -0.015}px, ${
              mousePosition.y * -0.015
            }px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "1s",
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(82,113,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(82,113,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/15 backdrop-blur-sm border border-primary/20 shadow-lg mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary-main animate-pulse" />
          <span className="font-medium text-14 text-primary">
            New features available
          </span>
          <ChevronRight className="w-4 h-4 text-primary-main" />
        </div>

        {/* Main Heading */}
        <h1
          className={`text-32 sm:text-48 lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Build the Future with{" "}
          <span className="text-transparent bg-gradient-to-r from-primary via-primary-main to-secondary bg-clip-text">
            Innovation
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-16 sm:text-18 lg:text-20 text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Transform your ideas into reality with our cutting-edge platform.
          Experience seamless integration, powerful tools, and unlimited
          possibilities.
        </p>

        {/* Stats */}
        <div
          className={`flex flex-wrap justify-center gap-8 mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { icon: Users, value: "10K+", label: "Active Users" },
            { icon: Star, value: "4.9", label: "Rating" },
            { icon: Zap, value: "99.9%", label: "Uptime" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-2 transition-all duration-300 border rounded-lg bg-gradient-to-r from-white/80 to-primary/5 backdrop-blur-sm border-primary/15 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:scale-105 hover:shadow-lg"
            >
              <stat.icon className="w-5 h-5 text-primary-main" />
              <div className="text-left">
                <div className="font-bold text-18 text-primary">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-12">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="flex items-center px-8 py-4 font-semibold text-white transition-all duration-300 border rounded-lg shadow-lg bg-gradient-to-r from-primary to-primary-main hover:from-primary/90 hover:to-primary-main/90 text-16 hover:shadow-xl hover:shadow-primary/25 hover:scale-105 group border-primary/20">
            <span> Get Started Free</span>
            <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            variant="outline"
            className="flex items-center px-8 py-4 font-semibold transition-all duration-300 border-2 rounded-lg shadow-lg bg-gradient-to-r from-white/90 to-secondary/10 backdrop-blur-sm border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary-main hover:text-white text-16 hover:shadow-xl hover:shadow-secondary/25 hover:scale-105 group"
          >
            <Play className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Feature Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            {
              title: "Lightning Fast",
              description: "Built for speed and performance",
              gradient: "from-primary/15 to-primary-main/10",
              border: "border-primary/30",
              iconColor: "text-primary",
            },
            {
              title: "Secure & Reliable",
              description: "Enterprise-grade security",
              gradient: "from-secondary/15 to-primary/10",
              border: "border-secondary/30",
              iconColor: "text-secondary",
            },
            {
              title: "Easy Integration",
              description: "Seamless setup in minutes",
              gradient: "from-primary-main/15 to-secondary/10",
              border: "border-primary-main/30",
              iconColor: "text-primary-main",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`p-6 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm rounded-xl border ${feature.border} hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group`}
            >
              <h3
                className={`text-18 font-semibold text-gray-900 mb-2 group-hover:${feature.iconColor} transition-colors duration-300`}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 transition-colors duration-300 text-14 group-hover:text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex justify-center w-6 h-10 border-2 rounded-full border-primary/40">
          <div className="w-1 h-3 mt-2 rounded-full bg-gradient-to-b from-primary to-primary-main animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
