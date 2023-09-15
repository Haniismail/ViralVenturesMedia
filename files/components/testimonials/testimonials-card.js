import React from "react";
const TestimonialsCard = ({
  extraClassName,
  image,
  title,
  shape,
  designation,
  text
}) => {
  return (
    <>
      {/* <div className={`testimonials-one__single ${extraClassName}`}>
        <p className="testimonials-one__text">{text}</p>
        <div className="testimonials-one__icon">
          <i className="fa fa-quote-left"></i>
        </div>
        <div className="testimonial-one-shape-1">
          <img src={shape} alt="Testimonial Shape1 Image" />
        </div>
      </div>
      <div className="testimonials-one-client-info">
        <div className="testimonials-one__image">
          <img src={image} alt="Testimonials Image" />
        </div>
        <div className="text">
          <h3>{title}</h3>
          <p>{designation}</p>
        </div>
      </div> */}
    </>
  );
};

export default TestimonialsCard;
