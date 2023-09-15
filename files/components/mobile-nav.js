import React from "react";
import closeIcon from "@images/shapes/close-1-1.png";
import NavLinks from "@components/header/nav-links";

const MobileNav = () => {
  return (
    <>
    <div className="side-menu__block">
      <div className="side-menu__block-overlay custom-cursor__overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      <div className="side-menu__block-inner ">
        <div className="side-menu__top justify-content-end">
          <a href="#" className="side-menu__toggler side-menu__close-btn">
            <img src={closeIcon} alt="" />
          </a>
        </div>

        <nav className="mobile-nav__container">
          <NavLinks />
        </nav>
        <div className="side-menu__sep"></div>
        <div className="side-menu__content">
          <p>
            Lorem Ipsum is simply dummy text the printing and setting industry.
            Lorm Ipsum has been the industry's stanard dummy text ever.{" "}
          </p>
          <p>
            <a href="mailto:needhelp@apton.com">needhelp@apton.com</a> <br />{" "}
            <a href="tel:888-999-0000">888 999 0000</a>
          </p>
          <div className="side-menu__social">
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MobileNav;
