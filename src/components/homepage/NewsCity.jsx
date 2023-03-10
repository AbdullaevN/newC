import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./newscity.css";
import cardLarge from "../../assets/images/card-large.png";
import eyes from "../../assets/images/eyes.png";
import share from "../../assets/images/share.png";
import message from "../../assets/images/message.png";

import NewsTab from "./Tabs";

export const NewsCity = () => {
  console.log(document);

  return (
    <>
      <Container>
        <Row className="news-home">
          <Col>
            <NewsTab />
          </Col>
          {/* <div className="news-home-responsive"> */}
          <Col className="col-7  news-home_large-card">
            {/* <div> */}
            {/* <div> */}
            <img src={cardLarge} alt="" />
            <div className="d-flex news_large-card_info">
              <div className="news_large-card_info_title">
                №1 в вкладке “Популярные”{" "}
              </div>
              <div className="d-flex news_large-card_share">
                <div className="card_share-info">
                  <img src={eyes} alt="" />
                  1.5 М
                </div>
                <div className="card_share-info">
                  <img src={message} alt="" />
                  35K
                </div>
                <div className="card_share-info">
                  <img src={share} alt="" />
                  35K
                </div>
              </div>
            </div>
            <div>
              <span className="news_large-card_title">
                Министерство труда намерено применить опыт Китая в борьбе с
                бедностью
              </span>
            </div>
            {/* </div> */}
            {/* </div> */}
          </Col>
          <Col className="col-3 news-home_large-small-cards">
            <div className="small-card-responsive">
              <Col className="news-small">
                <div className="news-minicard">
                  <div>
                    <img
                      className="news-minicard_image"
                      src={cardLarge}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="d-flex news_small-card_share">
                      <div>
                        <img className="news_small-image" src={eyes} alt="" />
                        1.5 М
                      </div>
                      <div>
                        <img
                          className="news_small-image"
                          src={message}
                          alt=""
                        />
                        35K
                      </div>
                      <div>
                        <img className="news_small-image" src={share} alt="" />
                        35K
                      </div>
                    </div>
                  </div>
                  <div className="news_small-title">
                    Министерство труда намерено применить опыт Китая в борьбе с
                    бедностью
                  </div>
                </div>
              </Col>

              {/*  */}
              <Col className="news-small">
                <div className="news-minicard">
                  <div>
                    <img
                      className="news-minicard_image"
                      src={cardLarge}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="d-flex news_small-card_share">
                      <div>
                        <img className="news_small-image" src={eyes} alt="" />
                        1.5 М
                      </div>
                      <div>
                        <img
                          className="news_small-image"
                          src={message}
                          alt=""
                        />
                        35K
                      </div>
                      <div>
                        <img className="news_small-image" src={share} alt="" />
                        35K
                      </div>
                    </div>
                  </div>
                  <div className="news_small-title">
                    Министерство труда намерено применить опыт Китая в борьбе с
                    бедностью
                  </div>
                </div>
              </Col>
            </div>
          </Col>
          {/* </div> */}
        </Row>
      </Container>
    </>
  );
};
