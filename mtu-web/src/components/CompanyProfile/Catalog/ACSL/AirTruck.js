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

function AirTruck() {
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

  const pdfFilePath = "/pdf/220627_AirTruck_en_trim.pdf";

  return (
    <>
      <IndexNavbar />
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/catalog/airtruck.png") + ")",
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
              <h3>Air Truck</h3>
            </motion.div>
            <br />
            <br />
            <a href={pdfFilePath} target="_blank" rel="noopener noreferrer">
              <Button className="btn-round" color="info" size="lg">
                View PDF
              </Button>
            </a>
            <a href={pdfFilePath} download="airtruck-spec.pdf">
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
      <div className="main">
        <div>
          <Container style={{ marginTop: 25 }}>
            <Row>
              <Col lg="6" md="12">
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <h2 className="title">Air Truck</h2>
                  <h4 className="title text-info">Spesifikasi</h4>
                  <h5 className="description">• dimensi: 26cm x 19cm ; 11,6 inci</h5>
                  <h5 className="description">• fungsi: scan bts signal</h5>
                  <h5 className="description">• utility user:</h5>
                  <Button className="btn-round" color="info" href="/" size="lg" target="_blank">
                    View
                  </Button>
                  <Button className="btn-round" color="info" href="/" size="lg" target="_blank">
                    Download PDF
                  </Button>
                </motion.div>
              </Col>
              <Col>
                <Container>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <img alt="..." src={require("assets/catalog/airtruck2.png")}></img>
                  </motion.div>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AirTruck;
