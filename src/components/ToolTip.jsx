import React from "react";

const Tooltip = ({ text }) => {
  return (
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max max-w-xs px-3 py-1 text-sm text-white bg-gray-800 rounded-md shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {text}
    </div>
  );
};

export default Tooltip;
