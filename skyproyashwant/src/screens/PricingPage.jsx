import React from "react";
import TopHeader from "../components/packagesComponents/headerPackage/TopHeader";
import BottomHeader from "../components/packagesComponents/headerPackage/BottomHeader";
import BreadCumb from "../components/packagesComponents/breadCumb/BreadCumb";
import PricingPlan from "../components/pricingPageComponents/pricingPlan/PricingPlan";
import CtaPage from "../components/pricingPageComponents/ctaPage/CtaPage";
import FaqPage from "../components/pricingPageComponents/faqPage/FaqPage";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import LoaderComponent from "../common/loaderComponent.jsx/LoaderComponent";

const PricingPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      {/* <LoaderComponent/> */}
      <Header/>
      {/* <TopHeader/> */
      }
      {/* <BottomHeader/> */}
      {/* <BreadCumb/> */}
      <PricingPlan/>
      <CtaPage/>
      <FaqPage/>
      <FooterContact/>
      <Footer/>
      {/* <TopHeader />
      <BottomHeader />
      <BeadCumb />
      <PricingPlan />
      <CtaPage />
      <FaqPage />
      <FooterContact />
      <Footer /> */}
    </div>
  );
};

export default PricingPage;
