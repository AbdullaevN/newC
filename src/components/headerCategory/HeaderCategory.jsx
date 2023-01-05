import React from "react";
import "./headercategory.css";

import spravochnik from "../../assets/images/foundation.png";
import uslugi from "../../assets/images/uslugi.png";
import ob from "../../assets/images/obyavlenie.png";
import avto from "../../assets/images/avto.png";
import nedvijimost from "../../assets/images/nedvijimost.png";
import rabota from "../../assets/images/rabota.png";
import novosti from "../../assets/images/novosti.png";
import { Link } from "react-router-dom";

export const HeaderCategory = () => {
  return (
    <>
      <div className="header-category">
        <Link to={"/directory"}>
          <div className="header-category_content">
            <span>Справочник</span>
            <img src={spravochnik} alt="" />
          </div>
        </Link>
        <Link to={"/services"}>
          <div className="header-category_content">
            <span>Услуги</span>
            <img src={uslugi} alt="" />
          </div>
        </Link>
        <Link to={"/ads"}>
          <div className="header-category_content">
            <span>Объявления</span>
            <img src={ob} alt="" />
          </div>
        </Link>
        <Link to={"/avto"}>
          <div className="header-category_content">
            <span>Авто</span>
            <img src={avto} alt="" />
          </div>
        </Link>
        <Link to={"/realty"}>
          <div className="header-category_content">
            <span>Недвижимость</span>
            <img src={nedvijimost} alt="" />
          </div>
        </Link>
        <Link to={"/job"}>
          <div className="header-category_content">
            <span>Работа</span>
            <img src={rabota} alt="" />
          </div>
        </Link>
        <Link to={"/news"}>
          <div className="header-category_content">
            <span>Новости</span>
            <img src={novosti} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};
