import React from "react";

const AppCard = ({ children }) => (
  <div className="flex items-center justify-center p-8 bg-gray-100">
    <div
      className="p-6 text-white bg-gradient-to-br from-primary to-primary-main rounded-2xl"
      style={{
        clipPath: "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)",
        height: "500px",
        width: "350px",
      }}
    >
      <div className="flex flex-col justify-between h-full">{children}</div>
    </div>
  </div>
);
export default AppCard;
