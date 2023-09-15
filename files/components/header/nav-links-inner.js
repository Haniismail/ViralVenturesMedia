import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
const NavLinksInner = () => {
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
        <Link href="/#features">
          <a>Features</a>
        </Link>
      </li>
      <li>
        <Link href="/#pricing">
          <a>Pricing</a>
        </Link>
      </li>
      <li>
        <Link href="/#testimonials">
          <a>Testimonials</a>
        </Link>
      </li>
      <li>
        <Link href="/#screens">
          <a>Screens</a>
        </Link>
      </li>
      {/* <li className="dropdown">
        <Link href="/#blog">
          <a>News</a>
        </Link>
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

export default NavLinksInner;
