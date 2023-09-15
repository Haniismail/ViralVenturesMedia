import React from "react";
import Link from "next/link";

const BlogCard = ({
  extraClassName,
  image,
  date,
  commentCount,
  title,
  text,
  link
}) => {
  return (
    <div className={`blog-one__single ${extraClassName}`}>
      <div className="blog-one__image">
        <img src={image} alt="" />
        <div className="blog-hover-box">
          <div className="box">
            <div className="icon-box">
              <Link href={link.path}>
                <a>
                  <i className="far fa-link"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-one__content">
        <div className="blog-one__meta">
          <a href="#">
            <i className="far fa-calendar-alt"></i> {date}
          </a>
          <a href="#">
            <i className="far fa-comments"></i> {commentCount} comments
          </a>
        </div>
        <h3>
          <Link href={link.path}>
            <a>{title}</a>
          </Link>
        </h3>
        <div className="blog-one__text">
          <p>{text}</p>
        </div>
        <Link href={link.path}>
          <a className="thm-btn blog-one__btn">
            <span>{link.label}</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
