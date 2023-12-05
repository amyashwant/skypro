import React from "react";
import Header from "../common/header/Header";
import RefundPageOne from "../components/refundPageComponents/RefundPageOne";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import LoaderComponent from "../common/loaderComponent.jsx/LoaderComponent";

const RefundPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      {/* <LoaderComponent/> */}
      <Header />
      <RefundPageOne />
      <FooterContact />
      <Footer />
    </div>
  );
};

export default RefundPage;
