import React from "react";
import { Container } from "react-bootstrap";

const PageHeader = ({ title, crumbTitle }) => {
  return (
    <section className="page-header">
      <Container>
        <h2>{title}</h2>
        <ul className="list-unstyled thm-breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <span>{crumbTitle}</span>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default PageHeader;
