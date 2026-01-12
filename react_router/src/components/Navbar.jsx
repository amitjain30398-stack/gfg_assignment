import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 px-6 py-4 flex justify-center gap-8">
      <NavLink
        to="/"
        className="text-white text-lg"
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className="text-white text-lg"
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className="text-white text-lg"
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;