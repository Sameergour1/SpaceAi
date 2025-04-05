// import React from "react";

// const teamMembers = [
//   {
//     name: "Dr. Aisha Verma",
//     role: "AI Research Lead",
//     image: "https://i.pravatar.cc/150?img=1",
//   },
//   {
//     name: "Samuel Park",
//     role: "Full Stack Developer",
//     image: "https://i.pravatar.cc/150?img=2",
//   },
//   {
//     name: "Lena Rodriguez",
//     role: "UX/UI Designer",
//     image: "https://i.pravatar.cc/150?img=3",
//   },
//   {
//     name: "Kai Tanaka",
//     role: "Data Scientist",
//     image: "https://i.pravatar.cc/150?img=4",
//   },
// ];

// const Team = () => {
//   return (
//     <section className="py-16 px-6 bg-white" id="team">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
//         <p className="text-gray-500 mb-12">The innovators behind AIHub</p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//           {teamMembers.map((member, idx) => (
//             <div key={idx} className="flex flex-col items-center text-center">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-32 h-32 rounded-full object-cover shadow-md mb-4"
//               />
//               <h3 className="text-xl font-semibold text-gray-700">{member.name}</h3>
//               <p className="text-sm text-indigo-600">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;


import React, { useState } from "react";

const teamMembers = [
  {
    name: "Dr. Aisha Verma",
    role: "AI Research Lead",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Samuel Park",
    role: "Full Stack Developer",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Lena Rodriguez",
    role: "UX/UI Designer",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Kai Tanaka",
    role: "Data Scientist",
    image: "https://i.pravatar.cc/150?img=4",
  },
];

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 px-6 bg-white" id="team">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
        <p className="text-gray-500 mb-12">The innovators behind AIHub</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative">
              {/* Floating Image */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-32 h-32 rounded-full object-cover shadow-md mb-4 transition-transform duration-500 ${
                    hoveredIndex === idx ? "animate-float" : ""
                  }`}
                />
                {hoveredIndex === idx && (
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-3 py-1 text-xs rounded-full z-10">
                    {member.name}
                  </div>
                )}
              </div>

              {/* Name (Hover/Drag area) */}
              <h3
                className="text-xl font-semibold text-gray-700 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                draggable
                onDragStart={() => setHoveredIndex(idx)}
                onDragEnd={() => setHoveredIndex(null)}
              >
                {member.name}
              </h3>

              <p className="text-sm text-indigo-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
