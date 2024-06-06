import React, { useState } from "react";
import { data } from "../../restApi.json";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">
          {" "}
          <img src="logo.png" alt="logo" width="300" height="80" />
        </div>
        {/* <div className="logo"> logo</div> */}
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"} onClick={() => setShow(false)}>
              HOME
            </Link>

            <Link to={"/aboutus"} onClick={() => setShow(false)}>
              ABOUT US
            </Link>
            <Link to={"/services"} onClick={() => setShow(false)}>
              SERVICES
            </Link>
            <Link to={"/teams"} onClick={() => setShow(false)}>
              TEAM
            </Link>
            <Link to={"/gallery"} onClick={() => setShow(false)}>
              GALLERY
            </Link>
            <Link to={"/contact"} onClick={() => setShow(false)}>
              CONTACT US
            </Link>
          </div>
          {/* <button className="menuBtn">Blogs</button> */}
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
