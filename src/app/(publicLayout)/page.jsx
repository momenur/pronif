import Home from "@/components/home";
import React from "react";
import {
  BarChart,
  Cloud,
  Globe,
  Monitor,
  Smartphone,
  UserCheck,
} from "react-feather";

const HomePage = () => {
  const cards = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Build modern, responsive websites with cutting-edge technologies and best practices.",
      icon: Globe,
    },
    {
      id: 2,
      title: "Mobile Apps",
      description:
        "Create native and cross-platform mobile applications for iOS and Android.",
      icon: Smartphone,
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Design beautiful, intuitive user interfaces that provide exceptional user experiences.",
      icon: Monitor,
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description:
        "Deploy and scale applications using modern cloud infrastructure and services.",
      icon: Cloud,
    },
    {
      id: 5,
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights with advanced analytics and visualization.",
      icon: BarChart,
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description:
        "Implement intelligent solutions using artificial intelligence and machine learning.",
      icon: UserCheck,
    },
  ];

  //   bg-gradient-to-br from-white via-primary/5 to-secondary/10
  return (
    <div>
      <Home />;
      <section className="px-4 py-16 bg-red-500">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-gray-900 text-32">
              Our Services
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-18">
              Discover our comprehensive range of digital solutions designed to
              help your business thrive in the modern world.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className="relative p-6 overflow-hidden transition-all duration-500 ease-out transform bg-white border shadow-lg group rounded-xl border-border-light hover:shadow-2xl hover:-translate-y-2 hover:scale-105 hover:border-primary/30"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-primary/8 to-secondary/8 group-hover:opacity-100"></div>

                  {/* Sliding border effect */}
                  <div className="absolute inset-0 rounded-xl">
                    <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-main group-hover:w-full transition-all duration-700 ease-out"></div>
                    <div className="absolute top-0 right-0 w-0.5 h-0 bg-gradient-to-b from-primary-main to-secondary group-hover:h-full transition-all duration-700 ease-out delay-200"></div>
                    <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-secondary to-primary group-hover:w-full transition-all duration-700 ease-out delay-400"></div>
                    <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-gradient-to-t from-primary to-secondary group-hover:h-full transition-all duration-700 ease-out delay-600"></div>
                  </div>

                  <div className="relative z-10">
                    {/* Icon with rotation animation */}
                    <div className="mb-4 transition-all duration-500 ease-out transform group-hover:rotate-12 group-hover:scale-110">
                      <IconComponent
                        size={48}
                        className="transition-colors duration-300 text-primary group-hover:text-secondary"
                      />
                    </div>

                    {/* Title with slide up animation */}
                    <h3 className="mb-3 font-semibold text-gray-900 transition-all duration-300 ease-out transform text-20 group-hover:translate-x-1">
                      {card.title}
                    </h3>

                    {/* Description with fade and slide animation */}
                    <p className="leading-relaxed transition-all ease-out delay-100 transform text-border-regular text-14 group-hover:translate-x-1 group-hover:text-gray-700 duration-400">
                      {card.description}
                    </p>

                    {/* Animated arrow that appears on hover */}
                    <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-400 ease-out delay-200">
                      <span className="mr-2 font-medium text-14">
                        Learn More
                      </span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute w-2 h-2 transition-opacity duration-500 delay-300 rounded-full opacity-0 top-4 right-4 bg-primary/30 group-hover:opacity-100 animate-ping"></div>
                  <div className="absolute w-1 h-1 transition-opacity duration-500 delay-500 rounded-full opacity-0 bottom-6 left-6 bg-secondary/40 group-hover:opacity-100 animate-pulse"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
