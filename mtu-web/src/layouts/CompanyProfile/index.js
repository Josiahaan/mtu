import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexHeader from "components/CompanyProfile/Headers/IndexHeader.js";
import IndexNavbar from "components/CompanyProfile/Navbars/IndexNavbar.js";
import DarkFooter from "components/CompanyProfile/Footers/DarkFooter.js";

// style css
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

// sections for this page
import Images from "components/CompanyProfile/section/images";
import NucleoIcons from "components/CompanyProfile/section/nucleoIcons.js";
import SignUp from "components/CompanyProfile/section/signUp.js";
import ValueCompany from "components/CompanyProfile/section/valueCompany.js";
import AboutUs from "components/CompanyProfile/section/aboutUs";

function CompanyProfile() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper" id="navbar-section">
        <IndexHeader />
        <div className="main">
          <Images />
          <AboutUs />
          <ValueCompany />
          <NucleoIcons />
          <SignUp />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default CompanyProfile;