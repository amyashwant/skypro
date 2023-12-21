import React from "react";
import Header from "../common/header/Header";
import ViewMoreSection from "../components/packagePageComponents/ViewMoreSection";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import BeadCumbCommon from "../common/beadcumbCommon/BeadCumbCommon";
import bgImg from "../assets/images/breadcumb/Artboard-2.webp";
import PaymentSection from "../components/packagePageComponents/PaymentSection";

const ViewMorePackage = () => {
  return (
    <div>
      <Header />
      <BeadCumbCommon
        titleOne="PACKAGES"
        titleTwo="Back To Packages"
        bgImg={bgImg}
        urlPackages={"/packages"}
      />
      <ViewMoreSection />
      <PaymentSection />
      <FooterContact />
      <Footer />
    </div>
  );
};

export default ViewMorePackage;
