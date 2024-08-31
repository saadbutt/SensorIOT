import { useLocation } from "react-router-dom";
import { Banner } from "./component/Banner/Banner";
import { Clients } from "./component/Clients/Clients";
import { Footer } from "./component/common/Footer/Footer";
import Header from "./component/common/Header/Header";
import { Faq } from "./component/Faq/Faq";
import { Featured } from "./component/Featured/Featured";
import { GetInTouch } from "./component/GetInTouch/GetInTouch";
import { HowItWork } from "./component/HowItWork/HowItWork";
import { MembershipPlan } from "./component/MembershipPlan/MembershipPlan";
import { OurFeatures } from "./component/OurFeatures/OurFeatures";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import SplashScreen from "./component/SplashScreen/SplashScreen";
import PrivacyPolicy from "./component/PrivacyPolicy/PrivacyPolicy";
import TermAndConditions from "./component/TermAndConditions/TermAndConditions";
import SignUp from "./component/SignUp/SignUp";
import CookieNotification from "./component/CookieNotification";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      if (location.hash === "#FAQ") {
        const element = document.getElementById("FAQ");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (location.hash === "#Membership") {
        const element = document.getElementById("Membership");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (location.hash === "#HowItWorks") {
        const element = document.getElementById("HowItWorks");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (location.hash === "#Feature") {
        const element = document.getElementById("Feature");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (location.hash === "#Feature") {
        const element = document.getElementById("Feature");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (location.hash === "#GetInTouch") {
        const element = document.getElementById("GetInTouch");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            showSplash ? (
              <SplashScreen />
            ) : (
              <>
                <Banner />
                <Clients />
                <Featured />
                <HowItWork />
                <OurFeatures />
                <MembershipPlan />
                <Faq />
                <GetInTouch />
              </>
            )
          }
        />

        <Route path="/Privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Terms-and-conditions" element={<TermAndConditions />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
      <CookieNotification />
      
    </div>
  );
}

export default App;
