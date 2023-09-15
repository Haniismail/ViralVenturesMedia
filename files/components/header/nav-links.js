import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
const NavLinks = () => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };
  return (
    <ul className="main-nav__navigation-box one-page-scroll-menu">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Services
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Packs
        </ScrollLink>
      </li>
      {/* <li>
        <ScrollLink
          activeClass="current"
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Testimonials
        </ScrollLink>
      </li> */}
      {/* <li>
        <ScrollLink
          activeClass="current"
          to="screens"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Screens
        </ScrollLink>
      </li> */}
      {/* <li className="dropdown">
        <ScrollLink
          activeClass="current"
          to="blog"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          News
        </ScrollLink>
        <button className="dropdown-btn" onClick={handleDropdownStatus}>
          <i className="fa fa-angle-right"></i>
        </button>
        <ul className="dropdown-list">
          <li>
            <Link href="/blog">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/blog-details">
              <a>News Details</a>
            </Link>
          </li>
        </ul>
      </li> */}
    </ul>
  );
};

export default NavLinks;
