import React, { useContext, useEffect } from "react";
import Header from "../common/header/Header";
import Banner from "../components/homePageComponents/banner/Banner";
import Brand from "../components/homePageComponents/brand/Brand";
import About from "../components/homePageComponents/about/About";
import Service from "../components/homePageComponents/service/Service";
import Facts from "../components/homePageComponents/facts/Facts";
import Testimonials from "../components/homePageComponents/testimmonials/Testimonials";
import PricingPlans from "../components/homePageComponents/pricingPlan/PricingPlans";
import FootPrints from "../components/homePageComponents/footPrints/FootPrints";
import Blogs from "../components/homePageComponents/blogs/Blogs";
import FooterContact from "../common/footerContact/FooterContact";
import Footer from "../common/footer/Footer";
import TopHeader from "../components/packagesComponents/headerPackage/TopHeader";
import BottomHeader from "../components/packagesComponents/headerPackage/BottomHeader";
import ToggleBar from "../components/packagesComponents/toggleBar/ToggleBar";
import { useNavigate } from "react-router-dom";
import AccountContext from "../utils/AccountContext";
import LoaderComponent from "../common/loaderComponent.jsx/LoaderComponent";

const Dashboard = () => {
  window.scrollTo(0, 0);

  const navigate = useNavigate();

  const { login } = useContext(AccountContext);
  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, [login]);

  // useEffect(() => {
  //   // This code will run after the component has mounted
  //   const preloader = document.querySelector(".preloader");
  //   if (preloader) {
  //     preloader.style.display = "none";
  //   }
  // }, []);

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("userInfo"));

  //   if (user) navigate("/");
  // }, [navigate]);

  return (
    <div>
      {/* <div class="preloder" id="page-preloader">
        <div class="circle"></div>
      </div> */}
      {/* <LoaderComponent/> */}
      <Header />
      {/* <TopHeader /> */}
      {/* <BottomHeader /> */}
      {/* <ToggleBar/> */}
      <Banner />
      <Brand />
      <About />
      <Service />
      <Facts />
      <Testimonials />
      <PricingPlans />
      <FootPrints />
      <Blogs />
      <FooterContact />
      <Footer />
    </div>
  );
};

export default Dashboard;
