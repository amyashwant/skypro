import React from "react";
import Header from "../common/header/Header";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import LoaderComponent from "../common/loaderComponent.jsx/LoaderComponent";
import CancelationPageOne from "../components/cancelationComponents/CancelationPageOne";

const CancelationPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      {/* <LoaderComponent/> */}
      <Header />
      <CancelationPageOne/>
      <FooterContact />
      <Footer />
    </div>
  );
};

export default CancelationPage;
