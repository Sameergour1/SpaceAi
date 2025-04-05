import React from "react";
import "../styles/hero.css";

const Hero = ({ id }) => {
  return (
    <section
      id={id}
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden text-white"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/v.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay and Stars */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>
      <div className="absolute inset-0 stars-layer z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 animate-fade-in-down py-20">
        {/* Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-glow">
            Welcome to <span className="text-yellow-300">AIHub</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6 tracking-wide">
            Your centralized platform for cutting-edge AI solutions built with <span className="text-blue-400">Gemini</span> & <span className="text-pink-400">OpenAI</span>.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="hero-btn bg-white text-indigo-600 hover:bg-gray-100">
              Get Started
            </button>
            <button className="hero-btn border border-white hover:bg-white hover:text-indigo-600">
              Learn More
            </button>
          </div>
        </div>

      {/* AI Illustration with Glow */}
<div className="lg:w-1/2 relative flex items-center justify-center">
  <div className="glow-frame relative w-full max-w-md">
    <img
      src="/e.jpeg"
      alt="AI Illustration"
      className="w-full rounded-xl relative z-10 animate-fade-in-up"
    />
    {/* Glow Ring */}
    <div className="absolute inset-0 z-0 glow-ring"></div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;
