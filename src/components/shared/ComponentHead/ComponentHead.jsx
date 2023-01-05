import React from "react";
import "./componenthead.css";
import arrow from "../../../assets/images/arrowOrange.png";

export const ComponentHead = () => {
  return (
    <>
      <div className="component-head container">
        <div>
          <span className="component-head_bold">БИЗНЕС-</span>ПРОФИЛИ
        </div>
        <div className="component-head_orange">
          <span className="component-head_text"> Все профили</span>
          <img className="component-head_image" src={arrow} alt="" />
        </div>
      </div>
    </>
  );
};
