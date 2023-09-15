import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import brandImage from "@images/resources/brand-1-1.png";
const Brands = () => {
  const CarouselOptions = {
    slidesPerView: 5,
    spaceBetween: 100,
    breakpoints: {
      0: { slidesPerView: 2, spaceBetween: 30 },
      480: { slidesPerView: 3, spaceBetween: 30 },
      991: { slidesPerView: 4, spaceBetween: 50 },
      1199: { slidesPerView: 5, spaceBetween: 100 }
    }
  };
  return (
    <section className="brand-one">
      <Container>
        <Swiper className="brand-one__carousel" {...CarouselOptions}>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={brandImage} alt="" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default Brands;
