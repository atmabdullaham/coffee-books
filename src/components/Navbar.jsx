import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar backdrop-blur-2xl shadow-sm z-50 fixed bg-white/30">
      <div className="navbar-start flex justify-between md:block  w-full">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-md font-medium"
          >
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-warning font-semibold" : "hover:text-warning"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? " text-warning font-semibold"
                    : "hover:text-warning"
                }`
              }
              to="/coffees"
            >
              Coffees
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive
                    ? " text-warning font-semibold"
                    : "hover:text-warning"
                }`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <a className="btn  text-xl">COFFEE-BOOKS</a>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-8 text-base font-medium">
          <NavLink
            className={({ isActive }) =>
              ` ${
                isActive ? "text-warning font-semibold" : "hover:text-warning"
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` ${
                isActive ? " text-warning font-semibold" : "hover:text-warning"
              }`
            }
            to="/coffees"
          >
            Coffees
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive ? " text-warning font-semibold" : "hover:text-warning"
              }`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
