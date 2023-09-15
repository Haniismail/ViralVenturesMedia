import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { APP_SHOT_DATA } from "@data/index";
SwiperCore.use([Pagination, Autoplay]);

const AppShot = () => {
  const CarouselOptions = {
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: "#app-shot-swiper-pagination",
      type: "bullets",
      clickable: "true"
    },
    slidesPerView: 5,
    slidesPerGroup: 5,
    // Responsive breakpoints
    breakpoints: {
      0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 30 },
      480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 30 },
      600: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 30 },
      991: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 30 },
      1000: { slidesPerView: 5, slidesPerGroup: 4, spaceBetween: 30 },
      1200: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 30 }
    }
  };
  const { sectionTitle, posts } = APP_SHOT_DATA;
  return (
    <section className="app-shot-one" id="screens">
      <Container fluid>
        <div className="block-title text-center">
          <p>{sectionTitle.text}</p>
          <h3>{sectionTitle.title}</h3>
        </div>

        <Swiper
          className="app-shot-one__carousel owl-dot-type1"
          {...CarouselOptions}
        >
          {posts.map(({ image }, index) => (
            <SwiperSlide className="item" key={`app-shot-key-${index}`}>
              <img src={image} alt="Awesome Image" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="swiper-pagination"
          id="app-shot-swiper-pagination"
        ></div>
      </Container>
    </section>
  );
};

export default AppShot;
