import React from "react";
import comment1 from "@images/blog/comment-1-1.jpg";
import comment2 from "@images/blog/comment-1-2.jpg";

const Comments = () => {
  return (
    <>
      <div className="comment-one">
        <h3 className="comment-one__block-title">2 Comments</h3>
        <div className="comment-one__single">
          <div className="comment-one__image">
            <img src={comment1} alt="" />
          </div>
          <div className="comment-one__content">
            <h3>Eugenia Floyd</h3>
            <p className="comment-one__date">
              20 Mar, 2020 <span>.</span> 4:00 pm
            </p>
            <p>
              Lorem Ipsum is simply dummy free text of the available printing
              and typesetting been the industry standard dummy text ever sincer
              condimentum purus.
            </p>
          </div>
          <a href="#" className="thm-btn comment-one__btn">
            <span>Reply</span>
          </a>
        </div>
        <div className="comment-one__single">
          <div className="comment-one__image">
            <img src={comment2} alt="" />
          </div>
          <div className="comment-one__content">
            <h3>Nellie Hanson</h3>
            <p className="comment-one__date">
              20 Mar, 2020 <span>.</span> 4:00 pm
            </p>
            <p>
              Lorem Ipsum is simply dummy free text of the available printing
              and typesetting been the industry standard dummy text ever sincer
              condimentum purus.
            </p>
          </div>
          <a href="#" className="thm-btn comment-one__btn">
            <span>Reply</span>
          </a>
        </div>
      </div>
      <div className="comment-form">
        <h3 className="comment-one__block-title">Leave a Comment</h3>
        <form
          action="inc/sendemail.php"
          className="contact-form-validated contact-one__form"
        >
          <div className="row">
            <div className="col-lg-6">
              <input type="text" placeholder="Your name" name="name" />
            </div>
            <div className="col-lg-6">
              <input type="text" placeholder="Email Address" name="email" />
            </div>
            <div className="col-lg-6">
              <input type="text" placeholder="Phone number" name="website" />
            </div>
            <div className="col-lg-6">
              <input type="text" placeholder="Subject" name="subject" />
            </div>
            <div className="col-lg-12">
              <textarea placeholder="Write Message" name="message"></textarea>
            </div>
            <div className="col-lg-12 text-left">
              <button type="submit" className="thm-btn contact-one__btn">
                <span>Submit Comment</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Comments;
