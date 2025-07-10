import React from "react";

const AppCard = ({ children }) => (
  <div
    className="p-6 text-white bg-gradient-to-br from-primary to-primary-main rounded-2xl"
    style={{
      clipPath: "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 20% 100%, 0 80%)",
      width: "100%",
    }}
  >
    <div className="flex flex-col justify-between w-full min-h-full">
      {children}
    </div>
  </div>
);
export default AppCard;
