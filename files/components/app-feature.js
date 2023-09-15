import React from "react";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import shape from "@images/shapes/cta-2-shape-1.png";
import { APP_FEATURE_DATA } from "@data/index";
const AppFeature = () => {
  const { sectionTitle, image, paragraph, options, button } = APP_FEATURE_DATA;
  return (
    <section className="cta-two">
      <img src={shape} className="cta-two__bg-shape-1" alt="" />
      <Container>
        <Row>
          <Col xl={6} className="col-xl-6">
            <div className="cta-two__content">
              <div className="block-title cus-pb">
                <p>{sectionTitle.text}</p>
                <h3>{sectionTitle.title}</h3>
              </div>
              <div className="cta-two__text">
                <p>{paragraph}</p>
              </div>
              <ul className="list-unstyled cta-two__list">
                {options.map(({ label }, index) => (
                  <li key={`options-key-${index}`}>
                    <i className="fa fa-check-circle"></i>
                    {label}
                  </li>
                ))}
              </ul>
              <Link href={button.link}>
                <a className="thm-btn cta-two__btn">
                  <span>{button.label}</span>
                </a>
              </Link>
            </div>
          </Col>
          <Col xl={6}>
            <div
              className="cta-two__moc wow fadeInLeft"
              data-wow-duration="1500ms"
            >
              <img src={image} className="cta-one__moc-img" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppFeature;
