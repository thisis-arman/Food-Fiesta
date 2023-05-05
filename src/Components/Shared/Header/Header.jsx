import React, { useContext } from "react";
import logo from "../../../../public/images/nav-logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const { user, logOut, } = useContext(AuthContext);
  console.log('header page', user)

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="navbar bg-gray-100 md:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className=" text-black lg:hidden"
            >
              <FaBars className="text-black w-7 h-7"/>
              
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
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>
          <a className="normal-case text-xl">
            <Link to='/'><img className="md:w-60 w-64 " src={logo} alt="navbar logo" />
            </Link>
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
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          { user ? (
            <>
              <div className="avatar mx-2 " >
                <div className="w-12 rounded-full ">
                  <img className="w-100 " title={user.displayName} src={user.photoURL}/>
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
