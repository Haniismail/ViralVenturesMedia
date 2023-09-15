import React from "react";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import shape1 from "@images/shapes/cta-1-shape-1.png";
import shape2 from "@images/shapes/cta-1-shape-2.png";
import shape3 from "@images/shapes/cta-1-shape-3.png";
import moc from "../../documentation/assets/img/automation.jpg";

import { CALL_TO_ACTION_DATA } from "@data/index";

const CallToAction = () => {
  const { sectionTitle, paragraph, posts, button } = CALL_TO_ACTION_DATA;
  return (
    <section className="cta-one">
      <img src={shape1} className="cta-one__bg-shape-1" alt="" />
      <img src={shape2} className="cta-one__bg-shape-2" alt="" />
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div
              className="cat_one_moc wow fadeInUp"
              data-wow-duration="1500ms"
            >
              <div
                className="cat_one_moc-bg"
                style={{ backgroundImage: `url(${shape3})` }}
              ></div>
              <img src={moc} alt="Cat-1-Moc-1 Image" />
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="cat_one_content">
              <div className="block-title">
                <p>{sectionTitle.text}</p>
                <h3>{sectionTitle.title}</h3>
              </div>
              <div className="cat_one_icon-wrap">
                {posts.map(({ icon, title, extraClassName }, index) => (
                  <div
                    className="cta-one__icon-single"
                    key={`cta-one-key-${index}`}
                  >
                    <div className="cta-one__icon">
                      <i className={`${icon} ${extraClassName}`}></i>
                    </div>
                    <h3>{title}</h3>
                  </div>
                ))}
              </div>
              <div className="cta-one__text">
                <p>{paragraph}</p>
              </div>
              <Link href={button.link}>
                <a className="thm-btn cta-one__btn">
                  <span>{button.label}</span>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToAction;
