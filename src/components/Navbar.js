import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";

const Navbar = () => {
  const [navbarTransparent, setNavbarTransparent] = useState(true);
  const navItems = (
    <>
      <li>
        <CustomLink to="/">Home</CustomLink>
      </li>
      <li>
        <CustomLink to="/about">About Me</CustomLink>
      </li>
      <li>
        <CustomLink to="/blogs">Blogs</CustomLink>
      </li>
      <li>
        <a href="/#skills"
        >
          Skills
        </a>
      </li>
      <li>
        <a href="/#projects"
        >
          Projects
        </a>
      </li>
      <li>
        <a href="/#contact"
        >
          Contact Me
        </a>
      </li>
    </>
  );
  const changeNavbarTransparency = () => {
    if (window.scrollY < 100) {
      setNavbarTransparent(true);
    } else {
      setNavbarTransparent(false);
    }
  };
  window.addEventListener("scroll", changeNavbarTransparency);
  return (
    <div
      className={`navbar z-50 lg:px-16 duration-500 fixed top-0 ${
        navbarTransparent ? "bg-transparent" : "bg-[#00283A] shadow-md"
      } text-white`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu w-screen bg-secondary m-0 left-[-9px] dropdown-content mt-3 p-2 shadow rounded-box"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="normal-case font-bold text-xl lg:text-3xl font-lobster">
          Mun<span className="text-primary">na</span>
        </Link>
      </div>
      <div className="navbar-end align-middle hidden lg:flex">
        <ul className="menu menu-horizontal p-0 gap-x-2">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
