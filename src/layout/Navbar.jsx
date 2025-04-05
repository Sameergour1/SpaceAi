


// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const navItems = [
//     { name: "Home", to: "hero" },
//     { name: "AI Hub", to: "aihub" },
//     { name: "Features", to: "features" },
//     { name: "Apps", to: "applications" },
//     { name: "Team", to: "team" },
//     { name: "Reviews", to: "reviews" },
//     { name: "Contact", to: "contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#0f0c29]/70 via-[#302b63]/70 to-[#24243e]/70 shadow-xl border-b border-cyan-500/20 animate-fade-in-down text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         {/* Brand Logo */}
//         <div className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] animate-glow">
//           AI World
//         </div>

//         {/* Mobile Toggle */}
//         <div className="lg:hidden">
//           <button onClick={() => setOpen(!open)} className="text-cyan-300 transition-transform transform hover:scale-110">
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Nav Links */}
//         <ul
//           className={`${
//             open ? "block" : "hidden"
//           } absolute lg:static top-16 left-0 w-full lg:w-auto lg:flex bg-black/80 lg:bg-transparent backdrop-blur-xl p-6 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-10 text-center transition-all duration-500 ease-in-out rounded-xl shadow-lg lg:shadow-none`}
//         >
//           {navItems.map((item, index) => (
//             <li key={index} className="relative group">
//               <Link
//                 to={item.to}
//                 spy={true}
//                 smooth={true}
//                 offset={-70}
//                 duration={500}
//                 onClick={() => setOpen(false)}
//                 className="cursor-pointer text-white font-medium tracking-wide transition-all duration-300 hover:text-cyan-300"
//               >
//                 {item.name}
//               </Link>
//               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "AI Hub", to: "aihub" },
    { name: "Features", to: "features" },
    { name: "Apps", to: "applications" },
    { name: "Team", to: "team" },
    { name: "Reviews", to: "reviews" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-r from-[#0f0c29]/70 via-[#302b63]/70 to-[#24243e]/70 shadow-xl border-b border-cyan-500/20 animate-fade-in-down text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(0,255,255,0.4)] animate-glow">
          AI World
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)} className="text-cyan-300 transition-transform transform hover:scale-110">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`${
            open ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full lg:w-auto lg:flex bg-black/80 lg:bg-transparent backdrop-blur-xl p-6 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-10 text-center transition-all duration-500 ease-in-out rounded-xl shadow-lg lg:shadow-none`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative group animate-fade-in-down"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "backwards" }}
            >
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setOpen(false)}
                className="cursor-pointer font-medium tracking-wide text-white hover:text-cyan-300 transition duration-300"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_6px_#00ffff]"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
