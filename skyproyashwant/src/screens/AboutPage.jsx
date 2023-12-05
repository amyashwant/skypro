import React from "react";
import BeadCumb from "../components/aboutPageComponents/beadCumb/BeadCumb";
import AboutPages from "../components/aboutPageComponents/aboutPages/AboutPages";
import OfferPage from "../components/aboutPageComponents/offferPage/OfferPage";
import TeamPage from "../components/aboutPageComponents/teamPage/TeamPage";
import CounterPage from "../components/aboutPageComponents/counterPage/CounterPage";
import TestimonialPage from "../components/aboutPageComponents/testimonialPage/TestimonialPage";
import BrandPage from "../components/aboutPageComponents/brandPage.jsx/BrandPage";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import BeadCumbCommon from "../common/beadcumbCommon/BeadCumbCommon";
import bgImg from "../assets/images/breadcumb/Artboard-2.webp";
import LoaderComponent from "../common/loaderComponent.jsx/LoaderComponent";
const AboutPage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      {/* <LoaderComponent /> */}
      <Header />
      {/* <TopHeader /> */}
      {/* <BottomHeader /> */}
      <BeadCumbCommon titleOne="About Us" titleTwo="About US" bgImg={bgImg} />
      <AboutPages />
      <OfferPage />
      <TeamPage />
      <CounterPage />
      <TestimonialPage />
      <BrandPage />
      <FooterContact />
      <Footer />
    </>
  );
};

export default AboutPage;
