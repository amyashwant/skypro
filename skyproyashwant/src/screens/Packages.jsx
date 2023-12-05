import React from "react";

import BottomHeader from "../components/packagesComponents/headerPackage/BottomHeader";
import ToggleBar from "../components/packagesComponents/toggleBar/ToggleBar";
import BreadCumb from "../components/packagesComponents/breadCumb/BreadCumb";
import PricingPlan from "../components/packagesComponents/pricingPlan/PricingPlan";
import CallToAction from "../components/packagesComponents/callToAction/CallToAction";
import FrequentAskedQues from "../components/packagesComponents/frequentAskedQues/FrequentAskedQues";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import TopHeader from "../components/packagesComponents/headerPackage/TopHeader";
import Header from "../common/header/Header";
import LoaderComponent from "../common/loaderComponent.jsx/LoaderComponent";

const Packages = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      {/* <LoaderComponent/> */}
      <Header/>
      {/* <TopHeader/> */}
      {/* <BottomHeader /> */}
      {/* <ToggleBar /> */}
      <BreadCumb headerName="PACKAGES"/>
      <PricingPlan />
      <CallToAction />
      <FrequentAskedQues />
      <FooterContact />
      <Footer />
    </div>
  );
};

export default Packages;
