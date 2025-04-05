import React from "react";
import { Sparkles, ShieldCheck, Cpu, Settings2 } from "lucide-react";

const features = [
  {
    title: "Smart AI Algorithms",
    icon: <Cpu size={32} className="text-cyan-600" />,
    desc: "Advanced machine learning models for fast, accurate, and scalable decisions.",
  },
  {
    title: "Data Security",
    icon: <ShieldCheck size={32} className="text-cyan-600" />,
    desc: "Top-level encryption and privacy features to keep your data safe and confidential.",
  },
  {
    title: "Easy Integration",
    icon: <Settings2 size={32} className="text-cyan-600" />,
    desc: "Quickly plug into your existing systems with minimal setup and full API support.",
  },
  {
    title: "Innovative UX",
    icon: <Sparkles size={32} className="text-cyan-600" />,
    desc: "A seamless user experience with intuitive design and beautiful interactions.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-gradient-to-br from-[#f7faff] to-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          ✨ Core Features
        </h2>
        <p className="text-gray-500 mb-12 max-w-xl mx-auto">
          Discover how AIHub empowers your workflows and revolutionizes intelligence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl transition hover:scale-[1.03] duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
