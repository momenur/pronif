"use client";

import { useState } from "react";

const AnimationPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Grid dimensions
  const COLS = 10;
  const ROWS = 8;
  const totalBoxes = ROWS * COLS;

  // Create array of boxes
  const boxes = Array.from({ length: totalBoxes }, (_, i) => i);

  // Calculate distance between two boxes
  const getDistance = (index1, index2) => {
    const row1 = Math.floor(index1 / COLS);
    const col1 = index1 % COLS;
    const row2 = Math.floor(index2 / COLS);
    const col2 = index2 % COLS;
    return Math.sqrt(Math.pow(row2 - row1, 2) + Math.pow(col2 - col1, 2));
  };

  // Get wave effect style for each box
  const getWaveStyle = (index) => {
    if (hoveredIndex === null) return {};

    const distance = getDistance(hoveredIndex, index);
    const maxDistance = 5;

    if (distance > maxDistance) return {};

    const delay = distance * 50; // 50ms per unit distance
    const intensity = Math.max(0, 1 - distance / maxDistance);
    const scale = 1 + intensity * 0.3;

    return {
      transform: `scale(${scale})`,
      backgroundColor:
        distance === 0 ? "#3b82f6" : `rgba(59, 130, 246, ${intensity * 0.7})`,
      transitionDelay: `${delay}ms`,
      zIndex: Math.round((1 - distance / maxDistance) * 10),
    };
  };

  return (
    <section className="grid grid-cols-5 gap-1 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
      {boxes.map((index) => (
        <div
          key={index}
          className="transition-all duration-300 ease-out bg-white border border-gray-300 cursor-pointer aspect-square"
          style={getWaveStyle(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </section>
  );
};

export default AnimationPage;
