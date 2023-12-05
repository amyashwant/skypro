import React from "react";
import TopHeader from "../components/packagesComponents/headerPackage/TopHeader";
import BottomHeader from "../components/packagesComponents/headerPackage/BottomHeader";
import BreadCumb from "../components/packagesComponents/breadCumb/BreadCumb";
import ToggleBar from "../components/packagesComponents/toggleBar/ToggleBar";
import Team from "../components/teamPageComponents/team/Team";
import CallToAction from "../components/packagesComponents/callToAction/CallToAction";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import LoaderComponent from "../common/loaderComponent.jsx/LoaderComponent";

const TeamsPage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      {/* <LoaderComponent /> */}
      <Header />
      {/* <TopHeader /> */}
      {/* <BottomHeader /> */}
      <BreadCumb headerName="TEAM" />
      <Team />
      <CallToAction />
      <FooterContact />
      <Footer />
      {/* <ToggleBar/> */}
    </>
  );
};

export default TeamsPage;
