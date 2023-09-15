import React from "react";
import { Container } from "react-bootstrap";
import FaqCard from "@components/faq-card";
import faqShape from "@images/shapes/faq-1-shape-1.png";
import { FAQ_DATA } from "@data/index";
const FAQ = () => {
  const { sectionTitle, posts } = FAQ_DATA;
  return (
    <section className="faq-one">
      <img src={faqShape} className="faq-one-shape-1" alt="" />
      <Container>
        <div className="block-title text-center">
          <p>{sectionTitle.text}</p>
          <h3>{sectionTitle.title}</h3>
        </div>
        <div className="accrodion-grp faq-accrodion">
          {posts.map(({ status, title, text }, index) => (
            <FaqCard
              key={`faq-posts-key-${index}`}
              status={status}
              title={title}
              text={text}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
