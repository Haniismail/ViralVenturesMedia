import React from "react";

const ServiceCard = ({ extraClassName, icon, title, text }) => {
  return (
    <div className="service-one__single">
      <div className={`service-icon icon-${extraClassName}`}>
        <div className={`icon-box icon-box-${extraClassName}`}>
          <i className={icon}></i>
        </div>
      </div>
      <div className="text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
