import React from "react";
import searchImage from "../../../assets/images/search.png";
import arrow from "../../../assets/images/arrowOrange.png";

import "./beginsearch.css";

export const BeginSearch = () => {
  return (
    <>
      <div className="component-search flex flex-col justify-center p-3 px-7 bg-[#DCE1EB]">
        <h3 className="font-nunito ">
          {" "}
          <span className="component-search_title-bold">Начать</span> поиск
        </h3>
        {/* <div> */}
        <label className="component-search-label">
          <input
            className="search-input  placeholder:text-[#999999] block bg-[#F5F8F9] sm:w-[100%] md:w-[30rem]  border-none rounded-full py-2 pl-4 !pr-0 shadow-sm focus:outline-none  sm:text-sm text-[#999999]"
            placeholder="Поиск..."
            type="text"
            name="search"
          />
          <img className="search-image " src={searchImage} alt="" />
        </label>
        {/* </div> */}
        {/* 
        <div className="px-20  flex py-10">
          <div className="w-8/12">
            <div className="flex rounded-2xl bg-white p-3 md:flex  justify-center items-center ">
              <div>
                <img
                  className="flex rounded-xl w-40"
                  src="https://39.img.avito.st/avatar/social/256x256/5769562439.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center px-5 w-full">
                <h3>Art Clinic Бишкек - Пластическая хиррургия </h3>
                <div className="flex">
                  <div>4,9 ⭐</div>
                  <div>(32 отзыва)</div>

                  <div>Клиника пластической х...</div>
                </div>
                <div className="flex">
                  <div>4,3 км</div>
                  <div>21 ул. Ахунбаева</div>

                  <div>0(555)-020-202</div>
                </div>
                <div className="flex">
                  <div>Открыто</div>&#183;
                  <div>Закроется в 18:00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/12 px-3   ">
            <div className=" bg-white p-3 rounded-2xl">
              <div className="flex gap-3 border-b-2 border-[#b9b9b9] items-center py-2">
                <h3 className="font-bold ">КАТАЛОГ</h3> КОМПАНИЙ
              </div>

               <div className="flex justify-between py-2 items-center">
                <div>
                  <h3 className="font-bold">Магазины</h3>
                  <span className="text-[#999999]">все товары города</span>
                </div>

                <button className="drop-shadow-2xl border-[1px] border-stone-400   shadow-orange-600  rounded-full flex justify-center items-center h-7 w-7 ">
                  <img src={arrow} className="object-contain" alt="" />
                </button>
              </div>

               <div className="flex justify-between py-2 items-center">
                <div>
                  <h3 className="font-bold">Авто</h3>
                  <span className="text-[#999999]">авто-мото услуги</span>
                </div>

                <button className="drop-shadow-2xl border-[1px] border-stone-400   shadow-orange-600  rounded-full flex justify-center items-center h-7 w-7 ">
                  <img src={arrow} className="object-contain" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
