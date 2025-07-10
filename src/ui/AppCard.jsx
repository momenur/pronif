import React from "react";

import { Heart, MessageCircle, Star } from "react-feather";

const AppCard = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-gray-100">
      <div
        className="p-6 text-white bg-gradient-to-br from-primary to-primary-main"
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
};

export default AppCard;
