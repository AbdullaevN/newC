import React from "react";
import "./myfooter.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export const MyFooter = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="widget company-intro-widget">
                  <Link to={"/"} className="site-logo">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-3  col-md-6 col-sm-6">
                <div className="widget course-links-widget">
                  <h5 className="widget-title">О ПОРТАЛЕ</h5>
                  <ul className="courses-link-list">
                    <li>
                      <Link to={"/about"}>
                        <i className="fas fa-long-arrow-alt-right"></i>О НАС
                      </Link>
                    </li>
                    <li>
                      <Link to={"/privacy-policy"}>
                        <i className="fas fa-long-arrow-alt-right"></i>ПОЛИТИКА
                        КОНФИДЕНЦИАЛЬНОСТИ
                      </Link>
                    </li>
                    <li>
                      <Link to={"/proceccing-data"}>
                        <i className="fas fa-long-arrow-alt-right"></i>ОБРАБОТКА
                        ПЕРСОНАЛЬНЫХ ДАННЫХ
                      </Link>
                    </li>
                    <li>
                      <Link to={"/about-portal"}>
                        <i className="fas fa-long-arrow-alt-right"></i>О ПОРТАЛЕ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3  col-md-6 col-sm-6">
                <div className="widget course-links-widget">
                  <h5 className="widget-title">ПОЛЬЗОВАТЕЛЯМ</h5>
                  <ul className="courses-link-list">
                    <li>
                      <Link to={"/city-organization"}>
                        <i className="fas fa-long-arrow-alt-right"></i>
                        ОРГАНИЗАЦИЯ ГОРОДА
                      </Link>
                    </li>
                    <li>
                      <Link to={"/article"}>
                        <i className="fas fa-long-arrow-alt-right"></i>
                        ИНТЕРЕСНЫЕ СТАТЬИ
                      </Link>
                    </li>
                    <li>
                      <Link to={"/news"}>
                        <i className="fas fa-long-arrow-alt-right"></i>НОВОСТИ
                        ГОРОДА
                      </Link>
                    </li>
                    <li>
                      <Link to={"/attractions"}>
                        <i className="fas fa-long-arrow-alt-right"></i>{" "}
                        ДОСТОПРИМЕЧАТЕЛЬНОСТИ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2  col-md-6 col-sm-6">
                <div className="widget course-links-widget">
                  <h5 className="widget-title">ПАРТНЕРАМ</h5>
                  <ul className="courses-link-list">
                    <li>
                      <Link to={"/paid"}>
                        <i className="fas fa-long-arrow-alt-right"></i>ПЛАТНОЕ
                        РАЗМЕЩЕНИЕ
                      </Link>
                    </li>
                    <li>
                      <Link to={"/advertising"}>
                        <i className="fas fa-long-arrow-alt-right"></i>РЕКЛАМА
                        НА САЙТЕ
                      </Link>
                    </li>
                    <li>
                      <Link to={"/cooperation"}>
                        <i className="fas fa-long-arrow-alt-right"></i>
                        СОТРУДНИЧЕСТВО
                      </Link>
                    </li>
                    <li>
                      <Link to={"/contacts"}>
                        <i className="fas fa-long-arrow-alt-right"></i>КОНТАКТЫ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2  col-md-6 col-sm-6">
                <div className="widget course-links-widget">
                  <h5 className="widget-title ">МЫ В СОЦ.СЕТЯХ</h5>
                  <ul className="courses-link-list">
                    <li>
                      <Link to={"/"}>
                        <i className="fas fa-long-arrow-alt-right"></i>INSTAGRAM
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <i className="fas fa-long-arrow-alt-right"></i>FACEBOOK
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
