import React, { useState } from "react";

const FaqCard = ({ status, title, text }) => {
  const [active, setActive] = useState(status);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className={`accrodion ${active === true ? "active" : " "}`}>
      <div className="accrodion-inner">
        <div className="accrodion-title">
          <h4 onClick={handleClick}>{title}</h4>
        </div>
        {active == true ? (
          <div className="accrodion-content animated fadeInUp">
            <div className="inner">
              <p>{text}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FaqCard;
