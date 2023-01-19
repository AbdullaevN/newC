import React, { useState } from "react";
import { BeginSearch } from "../../../components/shared/beginSearch/BeginSearch";

// import searchImage from "../../../assets/images/search.png";
import arrow from "../../../assets/images/arrowOrange.png";
// import { Popup } from "../../../components/shared/popup/Popup";

import "./services.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalSlider from "../../../components/shared/modalSlider/ModalSlider";

import map from "../../../assets/images/services/foundation_map.png";
import share from "../../../assets/images/services/charm_share.png";
import save from "../../../assets/images/services/save.png";
import instagram from "../../../assets/images/services/bi_instagram.png";
import call from "../../../assets/images/services/call.png";

import mapOrange from "../../../assets/images/services/map-orange.png";
import time from "../../../assets/images/services/time.png";
import callOrange from "../../../assets/images/services/call-orange.png";
import { Pagination } from "../../../components/shared/pagination/Pagination";

export const Services = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="">
        <div className="">
          <div className="img-wrap">
            <img
              src="https://fotorelax.ru/wp-content/uploads/2020/06/bishkek-s-vysoty-stolica-u-podnozhja-gor-9856615.jpg"
              className="img-responsive w-full object-cover"
            />
            <h1 className="content-main_text font-bold text-3xl font-montserrat">
              КАТАЛОГ
            </h1>
          </div>
        </div>
      </div>
      <BeginSearch />

      <div
        className="services-content px-20  flex py-10 bg-[#DCE1EB]"
        onClick={handleShow}
      >
        <div className="services-content-main w-8/12 ">
          <div className="services-content-main_description flex rounded-2xl bg-white p-3 md:flex  justify-center items-center ">
            <div>
              <img
                className="services-content-main_img  "
                src="https://39.img.avito.st/avatar/social/256x256/5769562439.jpg"
                alt=""
              />
            </div>
            <div className="services-content-main_info ">
              <h3>Art Clinic Бишкек - Пластическая хиррургия </h3>
              <div className="d-flex">
                <div>4,9 ⭐</div>
                <div>(32 отзыва)</div>

                <div>Клиника пластической х...</div>
              </div>
              <div className="d-flex">
                <div>4,3 км</div>
                <div>21 ул. Ахунбаева</div>

                <div>0(555)-020-202</div>
              </div>
              <div className="d-flex">
                <div>Открыто</div>&#183;
                <div>Закроется в 18:00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-content-right w-4/12 px-3   ">
          <div className="services-content-right_main ">
            <div className="services-content-right_main-title flex gap-3 border-b-2 border-[#b9b9b9] items-center py-2">
              <h3 className=" font-bold ">КАТАЛОГ</h3> КОМПАНИЙ
            </div>

            {/* first */}
            <div className="services-content-right_main-block flex justify-between py-2 items-center">
              <div>
                <h3 className="font-bold right-text">Магазины</h3>
                <span className="text-[#999999]" style={{ color: "#999999" }}>
                  все товары города
                </span>
              </div>

              <button className=" services-content-right_main-button shadow drop-shadow-2xl border-[1px] border-stone-400   shadow-orange-600  rounded-full flex justify-center items-center h-7 w-7 ">
                <img src={arrow} className="right-arrow" alt="" />
              </button>
            </div>

            {/* second */}
            <div className="services-content-right_main-block flex justify-between py-2 items-center">
              <div>
                <h3 className="font-bold right-text">Авто</h3>
                <span className="text-[#999999]">авто-мото услуги</span>
              </div>

              <button className=" services-content-right_main-button drop-shadow-2xl border-[1px] border-stone-400   shadow-orange-600  rounded-full flex justify-center items-center h-7 w-7 ">
                <img src={arrow} className="right-arrow" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Pagination />
      </div>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Art Clinic Бишкек - Пластическая хиррургия</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex modal-body">
            <div className="d-flex ">
              <span>4.9</span>
              <img
                src="https://banner2.cleanpng.com/20180411/oqq/kisspng-computer-icons-star-5-star-5acdd9ec67db40.8458493715234401084254.jpg"
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                }}
              />
              <span>(32 отзыва)</span>
            </div>
            <div>Клиника пластической хиррургии</div>
          </div>

          <div className="d-flex">
            <p className="modal-body_paragraph">
              Представляя действительно лучшие клиники мира, рейтинг возглавляют
              две израильские больницы — Ихилов и Ассута. Центр Ихилов
              располагается в Тель-Авиве, из аэропорта на автомобиле сюда можно
              доехать за 20-30 минут. Это один из крупнейших в Израиле
              больничных комплексов, общая площадь клиники превышает 150 тысяч
              квадратных метров. Ихилов входит в топ-10 лучших клиник Израиля
              еще...{" "}
            </p>
          </div>

          <div>
            <ModalSlider />
          </div>
          <div className="d-flex modal-body_share ">
            <div className="col-3 modal-body_share-block">
              <img src={map} alt="" />
              <span>Проложить маршрут</span>
            </div>
            <div className="col-3 modal-body_share-block">
              <img src={share} alt="" />
              <span>Поделиться</span>
            </div>

            <div className="col-3 modal-body_share-block">
              <img src={save} alt="" />
              <span>Сохранить</span>
            </div>

            <div className="col-3 modal-body_share-block">
              <img src={instagram} alt="" />
              <span>Соц.сети</span>
            </div>

            <div className="col-3 modal-body_share-block">
              <img src={call} alt="" />
              <span>Связаться</span>
            </div>
          </div>
          {/*  */}
          <div className="modal-body_time">
            <div className="modal-body_time-block">
              <img src={mapOrange} alt="" />
              <span>155 просп. Чуй, Бишкек</span>
            </div>
            <div className="modal-body_time-block">
              <img src={time} alt="" />
              <span>Открыто</span>
              <span>Закроется в 22:00</span>
            </div>

            <div className="modal-body_time-block">
              <img src={callOrange} alt="" />
              <span>0(555)-555-555</span>
            </div>
          </div>

          {/*  */}
          <div className="d-flex modal-body_uslugi">
            <div>Услуги в этой организации (34)</div>
            <div>
              <div className="d-flex modal-body_uslugi-content">
                <div className="col-2">
                  <img
                    className="modal-body_uslugi-image"
                    src="https://avatars.mds.yandex.net/i?id=53caacb6ce47485648fdc851e3045fda-3798236-images-thumbs&n=13"
                    alt=""
                  />
                </div>
                <div className="col-7 modal-body_uslugi-content_info">
                  <div>
                    {" "}
                    <span>Строительство и ремонт</span>
                    Сварка
                  </div>
                  <span>Сварка, Трубы, Монтаж, Гарантия, Демонтаж</span>
                  <p>
                    Сделаем все быстро, качественно и дешево, обращайтесь по
                    номеру ...
                  </p>
                  <img src="" alt="" />
                  <h1>450 KGS</h1>
                </div>

                <div className="d-flex modal-body_uslugi-share col-3">
                  <div>связаться</div>
                  <div>Отзывы</div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
