import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AccountContext from "../utils/AccountContext";
import Loader from "../common/loaderComponent.jsx/Loader";
import PaymentTest from "../components/packagePageComponents/PaymentTest";
import NewsLetterPage from "../components/adminPageComponents/NewsLetterPage";
const TeamsPage = lazy(() => import("../screens/TeamsPage"));
const Dashboard = lazy(() => import("../screens/Dashboard"));
const AboutPage = lazy(() => import("../screens/AboutPage"));
const ServicePage = lazy(() => import("../screens/ServicePage"));
const ContactPage = lazy(() => import("../screens/ContactPage"));
const PricingPage = lazy(() => import("../screens/PricingPage"));
const LoginPage = lazy(() => import("../screens/LoginPage"));
const SignupPage = lazy(() => import("../screens/SignupPage"));
const PrivacyPage = lazy(() => import("../screens/PrivacyPage"));
const TermsPage = lazy(() => import("../screens/TermsPage"));
const RefundPage = lazy(() => import("../screens/RefundPage"));
const CompliancePage = lazy(() => import("../screens/CompliancePage"));
const PackagePage = lazy(() => import("../screens/PackagePage"));
const MultiForm = lazy(() =>
  import("../components/packagePageComponents/multiform/MultiForm")
);
const SuccessPage = lazy(() =>
  import("../components/packagePageComponents/multiform/SuccessPage")
);
const CancelPage = lazy(() =>
  import("../components/packagePageComponents/multiform/CancelPage")
);
const AdminPage = lazy(() => import("../screens/AdminPage"));
const BroadcasterFormPage = lazy(() =>
  import("../components/adminPageComponents/BroadcasterFormPage")
);
const BouqetFormPage = lazy(() =>
  import("../components/adminPageComponents/BouqetFormPage")
);
const ChannelFormPage = lazy(() =>
  import("../components/adminPageComponents/ChannelFormHeader")
);
const LanguageFormPage = lazy(() =>
  import("../components/adminPageComponents/LanguageFormPage")
);
const TypeFormPage = lazy(() =>
  import("../components/adminPageComponents/TypeFormPage")
);
const PackageFormPage = lazy(() =>
  import("../components/adminPageComponents/PackageFormPage")
);
const PackageBouque = lazy(() =>
  import("../components/adminPageComponents/PackageBouque")
);
const ViewPackageBouque = lazy(() =>
  import("../components/adminPageComponents/ViewPackageBouque")
);
const BouqueChannel = lazy(() =>
  import("../components/adminPageComponents/BouqueChannel")
);
const ParentBouque = lazy(() =>
  import("../components/adminPageComponents/boqueChannel/ParentBouque")
);
const CategoryFormPage = lazy(() =>
  import("../components/adminPageComponents/CategoryFormPage")
);
const ViewMoreSection = lazy(() =>
  import("../components/packagePageComponents/ViewMoreSection")
);
const ViewMorePackage = lazy(() => import("../screens/ViewMorePackage"));
const CancelationPage = lazy(() => import("../screens/Cancelation"));
const Register = lazy(() =>
  import("../components/adminPageComponents/adminAuthentication/Register")
);
const Login = lazy(() =>
  import("../components/adminPageComponents/adminAuthentication/Login")
);

const AppLayoutRoutes = () => {
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
    <>
      <div>
        <AccountContext.Provider value={data}>
          <Router>
            {/* <Suspense fallback={Loader}> */}
            {/* <Suspense fallback={<div>Loading.....</div>}> */}
            <Suspense fallback={<Loader />}>
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
                {/* <Route path="/packages123" element={<PaymentTest />} /> */}
                {/* <Route
                  path="/packages/:packageId"
                  element={<ViewMorePackage />}
                /> */}
                <Route
                  path="/:packageId"
                  element={<ViewMorePackage />}
                />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/adminsignup" element={<Register />} />
                {/* <Route path="/adminlogin" element={<Login />} /> */}
                <Route
                  // path="/admin/settings/broadcasters"
                  path="/broadcasters"
                  element={<BroadcasterFormPage />}
                />
                <Route
                  // path="/admin/settings/bouquets"
                  path="/bouquets"
                  element={<BouqetFormPage />}
                />
                <Route
                  // path="/admin/settings/channels"
                  path="/channels"
                  element={<ChannelFormPage />}
                />
                <Route
                  // path="/admin/settings/languages"
                  path="/languages"
                  element={<LanguageFormPage />}
                />
                <Route
                  // path="/admin/settings/types"
                  path="/types"
                  element={<TypeFormPage />}
                />
                <Route
                  // path="/admin/settings/packages"
                  path="/packages"
                  element={<PackageFormPage />}
                />
                <Route
                  // path="/admin/settings/package-bouque"
                  path="/package-bouque"
                  element={<PackageBouque />}
                />
                <Route
                  // path="/admin/settings/view"
                  path="/view"
                  element={<ViewPackageBouque />}
                />
                <Route
                  path="/bouque-channel"
                  // path="/admin/settings/bouque-channel"
                  element={<BouqueChannel />}
                />
                <Route
                  path="/parent-bouque"
                  // path="/admin/settings/parent-bouque"
                  element={<ParentBouque />}
                />
                <Route
                  path="/category"
                  // path="/admin/settings/category"
                  element={<CategoryFormPage />}
                />
                <Route
                  path="/subscriber"
                  // path="/admin/settings/category"
                  element={<NewsLetterPage />}
                />
              </Routes>
            </Suspense>
          </Router>
        </AccountContext.Provider>
      </div>
    </>
  );
};

export default AppLayoutRoutes;
