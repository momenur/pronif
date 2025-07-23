"use client";

import { useEffect, useRef, useState } from "react";

const AnimationPage = () => {
  const [tick, setTick] = useState(0);
  const centerIndexRef = useRef(0);

  const COLS = 10;
  const ROWS = 5;
  const totalBoxes = ROWS * COLS;
  const boxes = Array.from({ length: totalBoxes }, (_, i) => i);

  const getDistance = (index1, index2) => {
    const row1 = Math.floor(index1 / COLS);
    const col1 = index1 % COLS;
    const row2 = Math.floor(index2 / COLS);
    const col2 = index2 % COLS;
    return Math.sqrt(Math.pow(row2 - row1, 2) + Math.pow(col2 - col1, 2));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      centerIndexRef.current = (centerIndexRef.current + 1) % totalBoxes;
      setTick((t) => t + 1); // trigger re-render
    }, 80); // update every 80ms for smoother pacing

    return () => clearInterval(interval);
  }, [totalBoxes]);

  const getWaveStyle = (index) => {
    const centerIndex = centerIndexRef.current;
    const distance = getDistance(centerIndex, index);
    const maxDistance = 5;

    if (distance > maxDistance) return {};

    const intensity = Math.max(0, 1 - distance / maxDistance);
    const scale = 1 + intensity * 0.4;

    return {
      transform: `scale(${scale})`,
      backgroundColor: `rgba(59, 130, 246, ${intensity * 0.6})`,
      zIndex: Math.round((1 - distance / maxDistance) * 10),
      transition: "transform 0.3s ease, background-color 0.3s ease",
      willChange: "transform, background-color",
    };
  };

  return (
    <section className="grid h-screen grid-cols-5 bg-gray-100 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
      {boxes.map((index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 h-[20vh] w-full"
          style={getWaveStyle(index)}
        />
      ))}
    </section>
  );
};

export default AnimationPage;
