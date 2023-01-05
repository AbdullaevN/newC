import React from "react";
import { HeaderCategory } from "../../components/headerCategory/HeaderCategory";
import { BusinessProfile } from "../../components/homepage/BusinessProfile";
import { NewsCity } from "../../components/homepage/NewsCity";
import CardSlider from "../../components/shared/CardSlider/CardSlider";
import CarouselSlider from "../../components/shared/Carousel/Carousel";

export const HomePage = () => {
  return (
    <>
      <div className="home">
        {/* <HeaderCategory /> */}
        <CarouselSlider />
        <NewsCity />

        <BusinessProfile />
        <CardSlider />
        <CarouselSlider />
      </div>
    </>
  );
};
