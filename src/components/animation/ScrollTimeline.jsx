"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "react-feather";

const steps = [
  {
    title: "Planning",
    description: "We start by understanding your goals and requirements.",
    date: "Step 1",
  },
  {
    title: "Design",
    description: "Creating beautiful, intuitive interfaces that users love.",
    date: "Step 2",
  },
  {
    title: "Development",
    description: "Building robust, scalable solutions with modern tech.",
    date: "Step 3",
  },
  {
    title: "Launch",
    description: "Deploying your application to the world.",
    date: "Step 4",
  },
];

const ScrollTimeline = () => {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const stepsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleSteps((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.5 }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-500">A simple, transparent process.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                data-index={index}
                className={`relative flex items-center justify-between ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div
                    className={`transition-all duration-700 transform ${
                      visibleSteps.has(index)
                        ? "opacity-100 translate-x-0"
                        : index % 2 === 0
                        ? "opacity-0 -translate-x-20"
                        : "opacity-0 translate-x-20"
                    }`}
                  >
                    <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
                      {step.date}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </div>

                {/* Center Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-500 delay-300 ${
                      visibleSteps.has(index) ? "bg-primary scale-100" : "bg-gray-200 scale-0"
                    }`}
                  >
                    {visibleSteps.has(index) && <Check className="w-4 h-4 text-white" />}
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollTimeline;
