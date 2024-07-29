import { NavLink } from "react-router-dom";

const activeStyles = "text-gray-500";
const inactiveStyles = "text-black";

export const NavBar = () => {
  return (
    <nav className="space-x-2">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to={"/login"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Login
      </NavLink>

      <NavLink
        to={"/sign-up"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        SignUp
      </NavLink>
    </nav>
  );
};
