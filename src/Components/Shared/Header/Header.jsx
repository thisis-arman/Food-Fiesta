import React, { useContext } from "react";
import logo from "../../../../public/images/nav-logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="navbar bg-gray-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className=" text-black lg:hidden"
            >
              <FaBars className="text-black w-7 h-7"/>
              {/* <svg
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
              </svg> */}
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
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">About us</Link>
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
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="avatar mx-2">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img className="w-100 mx-2" title={user.displayName} src="https://i.ibb.co/dQLhRL2/wepik-export-20230501201018.png"/>
                </div>
              </div>
              <Link onClick={handleLogout} className="btn bg-lime-500">
                logout
              </Link>
            </>
          ) : (
            <Link to="/login" className="btn btn-success">
              login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
