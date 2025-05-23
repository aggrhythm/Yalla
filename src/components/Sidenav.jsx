import { NavLink } from "react-router-dom";

const navItems = ["Home", "Upload", "Jury"];

export default function SideNav() {
  return (
    <div className="h-screen w-[260px] bg-[#645068] text-white flex flex-col items-center justify-between fixed top-0 left-0 overflow-hidden">
      
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
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `text-2xl font-serif transition-all duration-200 cursor-pointer ${
                isActive
                  ? "underline underline-offset-4 text-white"
                  : "text-gray-300 hover:text-white hover:underline"
              }`
            }
          >
            {item}
          </NavLink>
        ))}
      </div>

      <div className="flex flex-col items-center pb-6">
        <img src="/src/assets/avatar.png" alt="User Avatar" className="w-24 h-28 mb-2" />
        <p className="text-sm font-serif">Mike Ross</p>
        <p className="text-xs font-mono text-gray-300">6xBD....1XZ</p>
      </div>
    </div>
  );
}
