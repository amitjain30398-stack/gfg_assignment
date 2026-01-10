import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 px-6 py-4 flex justify-center gap-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-white text-lg ${
            isActive ? "font-bold underline" : "hover:underline"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-white text-lg ${
            isActive ? "font-bold underline" : "hover:underline"
          }`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-white text-lg ${
            isActive ? "font-bold underline" : "hover:underline"
          }`
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;