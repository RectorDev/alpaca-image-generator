import React from "react";

const Button = ({ text,click}) => {
  return (
    <button onClick={click} className="flex items-center justify-center px-4 py-1 transition-all duration-150 border border-blue-500 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white">
      {text}
    </button>
  );
};

export default Button;
