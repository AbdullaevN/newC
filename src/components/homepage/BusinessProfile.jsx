import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./businessprofile.css";

import arrow from "../../assets/images/arrow.png";
import sturbucks from "../../assets/images/starbucks.png";

export const BusinessProfile = () => {
  return (
    <>
      <div className="container ">
        {/* <Card style={{ width: "18rem" }} className=" business-card">
          <Card.Body className="business-card_body">
            <div className="d-flex business-card-body">
              <Card.Title className="business-card_title">
                Card Title
              </Card.Title>
              <Card.Img
                variant="top"
                className="business-card_image"
                src={arrow}
              />
            </div>
          </Card.Body>
        </Card> */}

        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <hr />
              <div class="profile-card-2">
                <img src={sturbucks} class="img img-responsive" />
                <div class="profile-name">
                  STURBUCKS
                  <img src={arrow} alt="" />
                </div>
                {/* <div class="profile-username">@johndoesurname</div> */}
              </div>
            </div>

            {/*  */}
            <div class="col-md-3">
              {/* <h4 class="text-center">
                <strong>STYLE 1</strong>
              </h4> */}
              <hr />
              <div class="profile-card-2">
                <img src={sturbucks} class="img img-responsive" />
                <div class="profile-name">
                  CALTIKE
                  <img src={arrow} alt="" />
                </div>
                {/* <div class="profile-username">@johndoesurname</div> */}
              </div>
            </div>

            {/*  */}
            <div class="col-md-3">
              <hr />
              <div class="profile-card-2">
                <img src={sturbucks} class="img img-responsive" />
                <div class="profile-name">
                  BUGATTI
                  <img src={arrow} alt="" />
                </div>
                {/* <div class="profile-username">@johndoesurname</div> */}
              </div>
            </div>
            {/*  */}
            <div class="col-md-3">
              <hr />
              <div class="profile-card-2">
                <img src={sturbucks} class="img img-responsive" />
                <div class="profile-name">
                  BUGATTI
                  <img src={arrow} alt="" />
                </div>
                {/* <div class="profile-username">@johndoesurname</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
