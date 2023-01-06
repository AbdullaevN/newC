import React from "react";
import { BeginSearch } from "../../../components/shared/beginSearch/BeginSearch";

// import searchImage from "../../../assets/images/search.png";
import arrow from "../../../assets/images/arrowOrange.png";
// import { Popup } from "../../../components/shared/popup/Popup";

import "./services.css";

export const Services = () => {
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

      <div className="services-content px-20  flex py-10 bg-[#DCE1EB]">
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
    </>
  );
};
