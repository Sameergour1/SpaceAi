import React from "react";

const stats = [
  {
    label: "AI Integrations",
    value: "1.2K+",
  },
  {
    label: "Global Users",
    value: "50K+",
  },
  {
    label: "APIs Supported",
    value: "300+",
  },
  {
    label: "Uptime",
    value: "99.9%",
  },
];

const Statistics = () => {
  return (
    <section className="bg-[#E6F4FA] py-20 px-6 text-gray-800"> {/* Changed background here */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-4">Our Statistics</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Here’s how <span className="text-indigo-700 font-semibold">AIHub</span> is empowering developers and teams across the globe.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="text-3xl font-bold text-indigo-600">{item.value}</div>
              <div className="mt-2 text-gray-600 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
