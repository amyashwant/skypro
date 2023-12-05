import React from "react";
import Header from "../common/header/Header";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import PrivacyPageOne from "../components/privacyPageComponents/PrivacyPageOne";
import LoaderComponent from "../common/loaderComponent.jsx/LoaderComponent";

const PrivacyPage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      {/* <LoaderComponent /> */}
      <Header />
      <PrivacyPageOne />
      <FooterContact />
      <Footer />
    </>
  );
};

export default PrivacyPage;
