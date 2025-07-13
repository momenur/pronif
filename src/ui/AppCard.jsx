import React from "react";

const AppCard = ({ children }) => (
  <div
    className="p-6 text-white bg-gradient-to-br from-primary/30 via-red to-primary-main"
    style={{
      clipPath: "polygon(0 0, 90% 0, 100% 10%, 100% 100%, 100% 100%, 0 100%)",
      width: "100%",
    }}
  >
    <div className="flex flex-col justify-between w-full min-h-full">
      {children}
    </div>
  </div>
);
export default AppCard;
