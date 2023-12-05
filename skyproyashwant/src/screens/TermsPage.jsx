import React from "react";
import TermsPageOne from "../components/termsPageComponents/TermsPageOne";
import Header from "../common/header/Header";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import LoaderComponent from "../common/loaderComponent.jsx/LoaderComponent";

const TermsPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      {/* <LoaderComponent/> */}
      <Header />
      <TermsPageOne />
      <FooterContact />
      <Footer />
    </div>
  );
};

export default TermsPage;
