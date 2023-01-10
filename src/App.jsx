import { useState } from "react";
import "./App.css";
import MyNavbar from "./components/navbar/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyFooter } from "./components/footer/MyFooter";
import { HomePage } from "./pages/HomPage/HomePage";
import { SignUp } from "./pages/SignUp/SignUp";
import { Directory } from "./pages/HeaderCategory/Directory/Directory";
import { Services } from "./pages/HeaderCategory/Services/Services";
import { Ad } from "./pages/HeaderCategory/Ad/Ad";
import { Avto } from "./pages/HeaderCategory/Avto/Avto";
import { Realty } from "./pages/HeaderCategory/Realty/Realty";
import { News } from "./pages/HeaderCategory/News/News";
import { Job } from "./pages/HeaderCategory/Job/Job";
import { HeaderCategory } from "./components/headerCategory/HeaderCategory";
import { SignIn } from "./pages/SinIn/SignIn";
import { About } from "./pages/FooterLinks/About/About";
import { PrivacyPolicy } from "./pages/FooterLinks/PrivacyPolice/PrivacyPolice";
import { PersonalData } from "./pages/FooterLinks/PersonalData/PersonalData";
import { AboutPortal } from "./pages/FooterLinks/AboutPortal/AboutPortal";
import { CityOrganization } from "./pages/FooterLinks/CityOrganization/CityOrganization";
import { NewsPage } from "./pages/FooterLinks/News/News";
import { Attraction } from "./pages/FooterLinks/Attraction/Attraction";
import { Paid } from "./pages/FooterLinks/Paid/Paid";
import { Advertising } from "./pages/FooterLinks/Advertising/Advertising";
import { Cooperation } from "./pages/FooterLinks/Cooperation/Cooperation";
import { Article } from "./pages/FooterLinks/Article/Article";
import { Contacts } from "./pages/FooterLinks/Contacts/Contacts";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <HeaderCategory />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/sign-in"} element={<SignIn />} />
          <Route path={"/sign-up"} element={<SignUp />} />

          <Route path={"/directory"} element={<Directory />} />
          <Route path={"/services"} element={<Services />} />
          <Route path={"/ads"} element={<Ad />} />
          <Route path={"/avto"} element={<Avto />} />
          <Route path={"/realty"} element={<Realty />} />
          <Route path={"/news"} element={<News />} />
          <Route path={"/job"} element={<Job />} />
          {/*

        */}
          <Route path={"/about"} element={<About />} />
          <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
          <Route path={"/personal-data"} element={<PersonalData />} />
          <Route path={"/about-portal"} element={<AboutPortal />} />
          <Route path={"/city-organization"} element={<CityOrganization />} />
          <Route path={"/articles"} element={<Article />} />
          <Route path={"/news-page"} element={<NewsPage />} />
          <Route path={"/attraction"} element={<Attraction />} />
          <Route path={"/paid"} element={<Paid />} />
          <Route path={"/advertising"} element={<Advertising />} />
          <Route path={"/cooperation"} element={<Cooperation />} />

          <Route path={"/contacts"} element={<Contacts />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
};

export default App;
