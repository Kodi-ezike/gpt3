import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="/#whatgpt3">What is GPT-3</a>
    </p>
    <p>
      <a href="/#features">Case Studies</a>
    </p>
    <p>
      <a href="/#possibility">Open AI</a>
    </p>
    <p>
      <a href="/#blog">Library</a>
    </p>
    <p>
      <a href="/#contact">Contact</a>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3_navbar" id="home">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3_navbar-sign">
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
      <div className="gpt3_navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            className="menu-icon"
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            className="menu-icon"
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <div className="gpt3_navbar-menu-container scale-up-center">
            <div className="gpt3_navbar-menu-links">
              <Menu />
              <div className="gpt3_navbar-menu-container-links-sign">
                <p>Sign in</p>
                <button>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
