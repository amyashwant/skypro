import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TeamsPage from "../screens/TeamsPage";
import Dashboard from "../screens/Dashboard";
import AboutPage from "../screens/AboutPage";
import ServicePage from "../screens/ServicePage";
import ContactPage from "../screens/ContactPage";
import PricingPage from "../screens/PricingPage";
import LoginPage from "../screens/LoginPage";
import SignupPage from "../screens/SignupPage";
import PrivacyPage from "../screens/PrivacyPage";
import TermsPage from "../screens/TermsPage";
import RefundPage from "../screens/RefundPage";
import CompliancePage from "../screens/CompliancePage";
import PackagePage from "../screens/PackagePage";
import AccountContext from "../utils/AccountContext";
import MultiForm from "../components/packagePageComponents/multiform/MultiForm";
import SuccessPage from "../components/packagePageComponents/multiform/SuccessPage";
import CancelPage from "../components/packagePageComponents/multiform/CancelPage";
import AdminPage from "../screens/AdminPage";
import BroadcasterFormPage from "../components/adminPageComponents/BroadcasterFormPage";
import BouqetFormPage from "../components/adminPageComponents/BouqetFormPage";
import ChannelFormPage from "../components/adminPageComponents/ChannelFormHeader";
import LanguageFormPage from "../components/adminPageComponents/LanguageFormPage";

import TypeFormPage from "../components/adminPageComponents/TypeFormPage";
import PackageFormPage from "../components/adminPageComponents/PackageFormPage";
import PackageBouque from "../components/adminPageComponents/PackageBouque";
import ViewPackageBouque from "../components/adminPageComponents/ViewPackageBouque";
import BouqueChannel from "../components/adminPageComponents/BouqueChannel";
import ParentBouque from "../components/adminPageComponents/boqueChannel/ParentBouque";
import CategoryFormPage from "../components/adminPageComponents/CategoryFormPage";

import ViewMoreSection from "../components/packagePageComponents/ViewMoreSection";
import ViewMorePackage from "../screens/ViewMorePackage";
import CancelationPage from "../screens/Cancelation";

// import Checkout from "../components/packagePageComponents/CheckoutForm";
const AppLayout = () => {
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState(null);

  const data = {
    login,
    setLogin,
    userData,
    setUserData,
  };

  const cookieData = localStorage.getItem("userInfo");

  useEffect(() => {
    // console.log("useEffect hitted applayout");
    if (cookieData) {
      setLogin(true);
      setUserData(JSON.parse(cookieData));
    } else {
      setLogin(false);
      setUserData(null);
    }
  }, [cookieData]);

  return (
    <div>
      <AccountContext.Provider value={data}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/packages" element={<PackagePage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/service" element={<ServicePage />} /> */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignupPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund" element={<RefundPage />} />
            <Route path="/cancelation" element={<CancelationPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/payment" element={<MultiForm />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/cancel" element={<CancelPage />} />
            <Route path="/packages/:packageId" element={<ViewMorePackage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route
              path="/admin/settings/broadcasters"
              element={<BroadcasterFormPage />}
            />
            <Route
              path="/admin/settings/bouquets"
              element={<BouqetFormPage />}
            />
            <Route
              path="/admin/settings/channels"
              element={<ChannelFormPage />}
            />
            <Route
              path="/admin/settings/languages"
              element={<LanguageFormPage />}
            />
            <Route path="/admin/settings/types" element={<TypeFormPage />} />
            <Route
              path="/admin/settings/packages"
              element={<PackageFormPage />}
            />
            <Route
              path="/admin/settings/package-bouque"
              element={<PackageBouque />}
            />
            <Route
              path="/admin/settings/view"
              element={<ViewPackageBouque />}
            />
            <Route
              path="/admin/settings/bouque-channel"
              element={<BouqueChannel />}
            />
            <Route
              path="/admin/settings/parent-bouque"
              element={<ParentBouque />}
            />
            <Route
              path="/admin/settings/category"
              element={<CategoryFormPage />}
            />
          </Routes>
        </Router>
      </AccountContext.Provider>
    </div>
  );
};

export default AppLayout;
