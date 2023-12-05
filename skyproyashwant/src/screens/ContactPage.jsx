import React from "react";
import TopHeader from "../components/packagesComponents/headerPackage/TopHeader";
import BottomHeader from "../components/packagesComponents/headerPackage/BottomHeader";
import Contact from "../components/contactPageComponents/contact/Contact";
import BeadCumb from "../components/contactPageComponents/beadCumb/BeadCumb";
import MapCompany from "../components/contactPageComponents/map/MapCompany";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import BeadCumbCommon from "../common/beadcumbCommon/BeadCumbCommon";
import contactImg from "../assets/images/breadcumb/_1530667899_390_yEZPsIaoTI3ZNDdB-croppedUundb-jpg-details.jpg";
import LoaderComponent from "../common/loaderComponent.jsx/LoaderComponent";

const ContactPage = () => {
  window.scrollTo(0, 0);
  return (
    <>
    {/* <LoaderComponent/> */}
      <Header />
      {/* <TopHeader /> */}
      {/* <BottomHeader /> */}
      {/* <BeadCumb /> */}
      <BeadCumbCommon titleOne="CONTACT US" titleTwo="CONTACT US" bgImg={contactImg}/>
      <Contact />
      <MapCompany />
      <Footer />
    </>
  );
};

export default ContactPage;
