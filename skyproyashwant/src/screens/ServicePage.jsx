import React from "react";
import BeadCumb from "../components/aboutPageComponents/beadCumb/BeadCumb";
import TopHeader from "../components/packagesComponents/headerPackage/TopHeader";
import BottomHeader from "../components/packagesComponents/headerPackage/BottomHeader";
import ServicePages from "../components/servicePageComponents/servicePage/ServicePages";
import FaqPage from "../components/servicePageComponents/faqPage/FaqPage";
import CtaPage from "../components/servicePageComponents/ctaPage/CtaPage";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import BeadCumbCommon from "../common/beadcumbCommon/BeadCumbCommon";
import bgImg from "../assets/images/authentication/breadcumb.png";
import LoaderComponent from "../common/loaderComponent.jsx/LoaderComponent";
const ServicePage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      {/* <LoaderComponent /> */}
      <Header />
      {/* <TopHeader /> */}
      {/* <BottomHeader /> */}
      <BeadCumbCommon
        titleOne="OUR SERVICES"
        titleTwo="SERVICES"
        bgImg={bgImg}
      />
      <ServicePages />
      <FaqPage />
      <CtaPage />
      <FooterContact />
      <Footer />
    </>
  );
};

export default ServicePage;
