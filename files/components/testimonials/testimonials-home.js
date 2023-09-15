import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import testimonial1 from "@images/testimonials/testimonials-1-shape-3.png";
import testimonial2 from "@images/testimonials/testimonials-1-shape-4.png";
import testimonial3 from "@images/testimonials/testimonials-1-shape-5.png";
import TestimonialsCard from "@components/testimonials/testimonials-card";
import { TESTIMONIALS_DATA } from "@data/index";

SwiperCore.use([Pagination, Autoplay]);

const TestimonialsHome = () => {
  const { sectionTitle, posts } = TESTIMONIALS_DATA;
  const CarouselOptions = {
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: "#testimonials-swiper-pagination",
      type: "bullets",
      clickable: "true"
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      1199: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30
      }
    }
  };
  return (
    <>
    {/* <section id="testimonials" className="testimonials-one">
      <div
        className="testimonials-1-shape-3"
        style={{ backgroundImage: `url(${testimonial1})` }}
      ></div>
      <div
        className="testimonials-1-shape-4"
        style={{ backgroundImage: `url(${testimonial2})` }}
      ></div>
      <div
        className="testimonials-1-shape-5"
        style={{ backgroundImage: `url(${testimonial3})` }}
      ></div>
      <Container>
        <div className="block-title text-center">
          <p>{sectionTitle.text}</p>
          <h3>{sectionTitle.title}</h3>
        </div>
        <Row>
          <Col xl={12}>
            <Swiper
              {...CarouselOptions}
              className="testmonials__carousel owl-dot-type1"
            >
              {posts.map(
                (
                  { extraClassName, shape, image, title, text, designation },
                  index
                ) => (
                  <SwiperSlide key={`testimonials-card-key-${index}`}>
                    <TestimonialsCard
                      image={image}
                      shape={shape}
                      extraClassName={extraClassName}
                      title={title}
                      text={text}
                      designation={designation}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
            <div
              className="swiper-pagination"
              id="testimonials-swiper-pagination"
            ></div>
          </Col>
        </Row>
      </Container>
    </section> */}
    </>
  );
};

export default TestimonialsHome;
