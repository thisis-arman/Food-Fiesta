import React from "react";
import logo from "../../../../public/images/nav-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-gray-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-primary text-black lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-300 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <a className="normal-case text-xl">
            <img className="md:w-60 w-64 " src={logo} alt="navbar logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label tabIndex={0} className="btn border mr-2 btn-circle avatar">
            <div className="w-10 rounded-full">
              <img title="" src="https://lh3.googleusercontent.com/a/AEdFTp6y-P_4G2zCaEg1zJ4ij2OIjAXcV_N5atJAwAly7Q=s96-c" />
            </div>
          </label>
          <Link to='/login' className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
