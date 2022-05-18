import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  let width = window.innerWidth

// useEffect(() => {
//   if(width<701) {
//     setNavbarOpen(false)
//   }
// }, [width])



console.log(width,"width")


  return (
    <>
      <nav   className={`navBar ${navbarOpen ? " showMenu" : "hideMenu"}`} >

        <button className="navbarClose" onClick={handleToggle}>
          {/* {navbarOpen ? "X" : "V"} */}
          {/* <HamburgerIcon/> */}
          <img src={require("../../assets/hamburger.svg").default} alt="React Logo" />
        </button>
      

        <NavLink to="/home"  onClick={closeMenu} className={`navbarItem ${navbarOpen ? "" : "hideItem"}`}>
          HOME
        </NavLink>
        <NavLink to="/boards"  onClick={closeMenu} className={`navbarItem ${navbarOpen ? "" : "hideItem"}`}>
          BOARDS
        </NavLink>
        <NavLink to="/users"  onClick={closeMenu} className={`navbarItem ${navbarOpen ? "" : "hideItem"}`}>
          USERS
        </NavLink>
        {/* <NavLink to="/board"  onClick={closeMenu} className={`navbarItem ${navbarOpen ? "" : "hideItem"}`}>
          BOARD
        </NavLink> */}
      </nav>
    </>
  );
}

export default Navbar;
