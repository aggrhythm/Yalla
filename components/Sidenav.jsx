import { useState } from "react";

const navItems = ["Home", "Groups", "Jury"];

export default function SideNav({ selected = "Home" }) {
  const [active, setActive] = useState(selected);

  return (
    <div className="h-screen w-[300px] bg-[#645068] text-white flex flex-col items-center justify-between fixed top-0 left-0 overflow-hidden">
      
      {/* Logo Section */}
      <div className="mt-6 mb-4">
        <img
          src="/src/assets/yalla.png"
          alt="Yalla Logo"
          className="w-40 h-auto object-contain max-h-36"
          style={{ maxWidth: "180px" }}
        />
      </div>
      

      <div className="flex flex-col items-center gap-4"> 
        {navItems.map((item) => (
          <p
            key={item}
            onClick={() => setActive(item)}
            className={`text-2xl font-serif cursor-pointer transition-all duration-200 ${
              active === item
                ? "underline underline-offset-4 text-white"
                : "text-gray-300 hover:text-white hover:underline"
            }`}
          >
            {item}
          </p>
        ))}
      </div>

      <div className="flex flex-col items-center pb-6">
        <img
          src="/avatar.png"
          alt="User Avatar"
          className="w-14 h-14 rounded-full border-2 border-gray-400 mb-2"
        />
        <p className="text-sm font-serif">Mike Ross</p>
        <p className="text-xs font-mono text-gray-300">6xBD....1XZ</p>
      </div>
      
    </div>
    
  );
}
