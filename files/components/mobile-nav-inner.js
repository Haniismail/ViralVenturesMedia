import React from "react";
import closeIcon from "@images/shapes/close-1-1.png";
import NavLinksInner from "@components/header/nav-links-inner";

const MobileNavInner = () => {
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
            <NavLinksInner />
          </nav>
          <div className="side-menu__sep"></div>
          <div className="side-menu__content">
            <p>
              Viral Ventures Media offers both standard and customizable packs
              to meet your needs and more..
            </p>
            <p>
              <a href="mailto:contact.viralventuresmedia@gmail.com">
                contact.viralventuresmedia@gmail.com
              </a>{" "}
              <br /> <a href="tel:23878321">0021623878321</a>
            </p>
            <div className="side-menu__social">
              {/* <a href="#">
                <i className="fab fa-facebook-square"></i>
              </a> */}
              <a href="https://twitter.com/ViralVentures_" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/viralventures_media/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavInner;
