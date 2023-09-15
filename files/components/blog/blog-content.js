import React from "react";
import image from "@images/blog/blog-d-1-1.jpg";
import author from "@images/blog/author-1-1.jpg";
const BlogContent = () => {
  return (
    <>
      <div className="blog-details__main">
        <div className="blog-details__image">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="blog-details__content">
          <div className="blog-one__meta">
            <a href="#">
              <i className="far fa-calendar-alt"></i> 20 Feb
            </a>
            <a href="#">
              <i className="far fa-comments"></i> 2 comments
            </a>
          </div>
          <h3>Launch New Mobile App Marketing Pitfalls To Avoid</h3>
          <p>
            There are many variations of passages of available but majority have
            alteration in some by inject humour or random words. There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet. It uses a dictionary of over 200 Latin words, combined
            with a handful of model sentence structures, to generate Lorem Ipsum
            which looks reasonable. The generated Lorem Ipsum is therefore
            always free from repetition, injected humour, or non-characteristic
            words etc.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose injected humour
            and the like.
          </p>
        </div>
        <div className="blog-details__meta">
          <div className="blog-details__tags">
            <span>Tags:</span>
            <a href="#">Business,</a>
            <a href="#">Agency,</a>
            <a href="#">Technology</a>
          </div>
          <div className="blog-details__share">
            <a href="#">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" className="color-1">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="color-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="color-3">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="blog-author">
        <div className="blog-author__image">
          <img src={author} alt="" />
        </div>
        <div className="blog-author__content">
          <h3>Christine Eve </h3>
          <p>
            Lorem Ipsum is simply dummy text of the rinting and typesetting been
            the industry dummy text ever sincer condimentum purus.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
