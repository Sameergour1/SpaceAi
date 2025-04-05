import React from 'react'

const Button = ({ label, onClick, type = "button", variant = "primary" }) => {
  const baseStyle =
    "px-6 py-2 rounded-2xl font-semibold tracking-wide transition duration-300 ease-in-out backdrop-blur-md";

  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white shadow-lg hover:scale-105 hover:shadow-xl",
    secondary:
      "bg-white bg-opacity-10 border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white shadow-sm hover:scale-105",
    outline:
      "bg-transparent border border-white text-white hover:bg-white hover:text-black hover:scale-105",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;
