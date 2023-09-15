import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "@images/shapes/pricing-1-shape-1.png";
import { PRICING_DATA } from "@data/index";
import PriceCard from "./price-card";

const PriceHome = () => {
  const [plan, setPlan] = useState({
    name: "monthly"
  });
  const { sectionTitle, monthly, yearly } = PRICING_DATA;
  const handleClickMonthly = (e) => {
    e.preventDefault();
    setPlan({
      name: "monthly"
    });
  };
  const handleClickYearly = (e) => {
    e.preventDefault();
    setPlan({
      name: "yearly"
    });
  };
  return (
    <section id="pricing" className="pricing-one">
      <div
        className="pricing-one-shape-1"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <Container>
        <div className="block-title text-center">
          <p>{sectionTitle.text}</p>
          <h3>{sectionTitle.title}</h3>
        </div>
        {/* <ul
          className="list-inline text-center switch-toggler-list"
          id="switch-toggle-tab"
        >
          <li className={`month ${plan.name === "monthly" ? "active" : null}`}>
            <a href="#" onClick={handleClickMonthly}>
              Monthly
            </a>
          </li>
          <li>
            <label
              className={`switch ${plan.name === "monthly" ? "on" : "off"}`}
            >
              <span className="slider round"></span>
            </label>
          </li>
          <li className={`year ${plan.name === "yearly" ? "active" : null}`}>
            <a href="#" onClick={handleClickYearly}>
              Annualy
            </a>
          </li>
        </ul> */}

        <div className="tabed-content">
          {plan.name === "monthly" ? (
            <div id="month">
              <Row>
                {monthly.map(
                  (
                    { count, amount, name, extraClassName, options, button },
                    index
                  ) => (
                    <Col
                      className="animated fadeInUp"
                      key={`pricing-card-key-${index}`}
                      xl={4}
                    >
                      <PriceCard
                        count={count}
                        amount={amount}
                        name={name}
                        extraClassName={extraClassName}
                        options={options}
                        button={button}
                      />
                    </Col>
                  )
                )}
              </Row>
            </div>
          ) : null}

          {plan.name === "yearly" ? (
            <div id="yearly">
              <Row>
                {yearly.map(
                  (
                    { count, amount, name, extraClassName, options, button },
                    index
                  ) => (
                    <Col
                      className="animated fadeInUp"
                      key={`pricing-card-key-${index}`}
                      xl={4}
                    >
                      <PriceCard
                        count={count}
                        amount={amount}
                        name={name}
                        extraClassName={extraClassName}
                        options={options}
                        button={button}
                      />
                    </Col>
                  )
                )}
              </Row>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
};

export default PriceHome;
