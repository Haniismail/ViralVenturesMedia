import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "@components/services/service-card";
import { SERVICE_DATA } from "@data/index";
const ServicesHome = () => {
  const { sectionTitle, posts } = SERVICE_DATA;
  return (
    <section id="features" className="service-one">
      <Container>
        <div className="block-title text-center">
          <p>{sectionTitle.text}</p>
          <h3>{sectionTitle.title}</h3>
        </div>
        <Row>
          {posts.map(({ extraClassName, icon, title, text }, index) => (
            <Col xl={3} lg={3} md={6} key={`service-card-key-${index}`}>
              <ServiceCard
                extraClassName={extraClassName}
                icon={icon}
                title={title}
                text={text}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesHome;
