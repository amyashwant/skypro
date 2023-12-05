import React from "react";
import TopHeader from "../components/packagesComponents/headerPackage/TopHeader";
import BottomHeader from "../components/packagesComponents/headerPackage/BottomHeader";
import BeadCumb from "../components/aboutPageComponents/beadCumb/BeadCumb";
import AccountPage from "../components/signupPageComponents/accountPage/AccountPage";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import BeadCumbCommon from "../common/beadcumbCommon/BeadCumbCommon";
import bgImg from "../assets/images/authentication/breadcumb.png";
import LoaderComponent from "../common/loaderComponent.jsx/LoaderComponent";

const SignupPage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      {/* <LoaderComponent /> */}
      <Header />
      {/* <TopHeader /> */}
      {/* <BottomHeader /> */}
      <BeadCumbCommon
        titleOne="SIGN UP YOUR ACCOUNT"
        titleTwo="SIGN UP"
        bgImg={bgImg}
      />
      <AccountPage />
      <FooterContact />
      <Footer />
    </>
  );
};

export default SignupPage;
