"use client";

import { useState, useRef } from "react";
import { Layers } from "react-feather";

const InteractiveCard = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="py-24 flex items-center justify-center bg-gradient-to-b from-background to-gray-50 perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Interactive Experience</h2>
          <p className="text-gray-500">Hover over the card to see the 3D effect.</p>
        </div>

        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-md aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary to-secondary p-1 shadow-2xl transition-transform duration-200 ease-out transform-style-3d"
          style={{
            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          }}
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl" />
          
          <div className="relative h-full bg-card rounded-xl p-8 flex flex-col items-center justify-center text-center border border-white/20 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent animate-spin-slow" />
            </div>

            <div className="relative z-10 transform translate-z-10">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
                <Layers className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Depth & Dimension</h3>
              <p className="text-gray-500 leading-relaxed">
                Add depth to your user interface with 3D transforms and interactive hover states.
                Make every interaction feel tangible.
              </p>
            </div>

            {/* Floating Elements */}
            <div 
              className="absolute top-10 right-10 w-12 h-12 bg-secondary/20 rounded-full blur-xl animate-pulse" 
              style={{ transform: 'translateZ(20px)' }}
            />
            <div 
              className="absolute bottom-10 left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse delay-700" 
              style={{ transform: 'translateZ(30px)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCard;
