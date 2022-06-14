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
        <Link
          to="/"
          onClick={() =>
            window.scrollTo({
              top: 550,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="/"
          onClick={() =>
            window.scrollTo({
              top: 1375,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="/"
          onClick={() =>
            window.scrollTo({
              top: 2200,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          Contact Me
        </Link>
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
      class={`navbar z-50 lg:px-16 duration-500 fixed top-0 ${
        navbarTransparent ? "bg-transparent" : "bg-[#00283A] shadow-md"
      } text-white`}
    >
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu w-screen bg-secondary m-0 left-[-9px] dropdown-content mt-3 p-2 shadow rounded-box"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" class="normal-case font-bold text-xl lg:text-3xl font-lobster">
          Mun<span className="text-primary">na</span>
        </Link>
      </div>
      <div class="navbar-end align-middle hidden lg:flex">
        <ul class="menu menu-horizontal p-0 gap-x-2">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
