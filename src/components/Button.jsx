import React from "react";

const Button = ({ text,click}) => {
  return (
    <button onClick={click} className="border border-blue-500 rounded-full px-4 py-1 flex justify-center items-center hover:bg-blue-500 hover:text-white duration-150 transition-all">
      {text}
    </button>
  );
};

export default Button;
