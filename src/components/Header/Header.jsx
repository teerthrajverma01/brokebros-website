import React from "react";

import classes from "./Header.module.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={classes.headerContainer}>
          <h5>Hello, We're</h5>
          <h1>BrokeBros</h1>
          <h5 className="textLight">MERN Stack Developer</h5>
          <CTA />

          <HeaderSocials />

          <div className={classes.me}>
            <img src={ME} alt="" />
          </div>

          <a href="#contact" className={classes.scrollDown}>
            {" "}
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
