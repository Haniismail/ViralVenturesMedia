import React from "react";

const Subscribe = () => {
  return (
    <section className="mailchimp-one">
      <div className="container wow fadeInUp" data-wow-duration="1500ms">
        <div className="inner-container">
          <div className="mailchimp-one-title">
            <h2>Newsletter coming soon...</h2>
          </div>
          <form action="#" className="mailchimp-one__form">
            <input
              type="text"
              placeholder="Enter your email address"
              name="email"
            />
            <button className="thm-btn mailchimp-one__btn" type="submit">
              <span>Register Now</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
