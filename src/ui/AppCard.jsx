import React from "react";

const AppCard = ({ children }) => (
  <div
    className="p-6 text-white transition-all duration-500 hover:scale-105"
    style={{
      clipPath: "polygon(0 0, 90% 0, 100% 10%, 100% 100%, 100% 100%, 0 100%)",
      width: "100%",
      background:
        "radial-gradient(circle, rgba(82, 113, 255, 0.72) 0%, rgba(12, 192, 223, 0.54) 50%, rgba(92, 225, 230, 0.76) 100%)",
    }}
  >
    <div className="flex flex-col justify-between w-full min-h-full">
      {children}
    </div>
  </div>
);
export default AppCard;
