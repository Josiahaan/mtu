/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
// core components
import IndexNavbar from "components/CompanyProfile/Navbars/IndexNavbar.js";

import { motion } from "framer-motion";
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

function PF2() {
  let pageHeader = React.createRef();

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

  const pdfFilePath = "/pdf/221212_PF2ーAE-Delivery_en_trim.pdf";

  return (
    <>
      <IndexNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/catalog/pf2-ae.png") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              <h1 className="h1-seo">ACSL</h1>
              <h3>PF2-AE Delivery</h3>
            </motion.div>
            <br />
            <br />
            <a href={pdfFilePath} target="_blank" rel="noopener noreferrer">
              <Button className="btn-round" color="info" size="lg">
                View PDF
              </Button>
            </a>
            <a href={pdfFilePath} download="pf2-ae-spec.pdf">
              <Button className="btn-round" color="info" size="lg">
                Download PDF
              </Button>
            </a>
          </div>
          <h6 className="category category-absolute">
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              Coded by SSP DEV{" "}
            </motion.div>
          </h6>
        </Container>
      </div>
    </>
  );
}

export default PF2;
