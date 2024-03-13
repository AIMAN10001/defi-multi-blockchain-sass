import React from "react";
import { SiHiveBlockchain } from "react-icons/si";
import { RiMenuUnfoldFill } from "react-icons/ri";
import index from "../pages";

const Header = ({ setActiveComponent, activeNetwork }) => {
  //Menu List
  const navMenu = [
    "Home",
    "Liquidity",
    "Pool History",
    "Liquidity History",
    "Networks",
  ];
  return (
    <header id="navbar-sticky" className="navbar">
      <div className="container">
        <nav className="">
          <a className="logo" href="/">
            <img src="assets/images/logo.png" alt="webAI" className="h-10" />
          </a>

          <div className="lg:hidden flex items-center ms-auto px-2.5">
            <button
              className="hs-collapse-toggle inline-flex items-center justify-center h-9 w-12 rounded-md border border-white/20 bg-default-100/5"
              type="button"
              id="hs-unstyled-collapse"
              data-hs-collapse="#mobileMenu"
              data-hs-type="collapse"
            >
              <RiMenuUnfoldFill />
            </button>
          </div>

          <div
            id="mobileMenu"
            className="hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0"
          >
            <ul id="navbar-navlist" className="navbar-nav">
              {navMenu.map((list, index) => (
                <li
                  key={index}
                  onClick={() => setActiveComponent(list)}
                  className="nav-item text-default-200 hover:text-primary-hover"
                >
                  <a className="nav-link text-default-200 hover:text-primary-hover">
                    {list}
                  </a>
                </li>
              ))}
            </ul>

            <div className="lg:hidden flex items-center pt-4 mt-4 lg:pt-0 lg:mt-0 border-t border-white/10 lg:border-none ">
              <a
                href="#"
                className=" inline-flex items-center justify-center gap-2 bg-primary font-semibold text-blue-950 py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300 "
              >
                <SiHiveBlockchain />
                {activeNetwork || "Select Network"}
              </a>
            </div>
          </div>

          <div className=" hidden lg:flex items-center">
            <a
              href="#"
              className=" inline-flex items-center justify-center gap-2 bg-primary font-semibold text-blue-950 py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300 "
            >
              <SiHiveBlockchain />
              {activeNetwork || "Select Network"}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
