import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer p-10 bg-base-200 text-base-content md:px-20">
        <div>
          <img
            width="130"
            height="130"
           /*  viewBox="0 0 24 24" */
            src="https://i.ibb.co/PNpM5Gv/wepik-export-20230502092038.png"
            className="fill-current"
         />
          <p>
            Food Fiesta Ltd.
            <br />
            Providing reliable tech since 1992. 
          </p>
        </div>
        <div>
          <span className="footer-title">Chefs</span>
          <Link className="link link-hover">Thomas Keller</Link>
          <Link className="link link-hover">Anthony Bourdain</Link>
          <Link className="link link-hover">Ree Drummond</Link>
          <Link className="link link-hover">Christopher Kostow</Link>
        </div>
        <div>
          <span className="footer-title">Pages</span>
          <Link to='/'  className="link link-hover">Home</Link>
          <Link to='/blog' className="link link-hover">Blog</Link>
          <Link to='/login' className="link link-hover">Login</Link>
          <Link to='/register' className="link link-hover">Register</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
