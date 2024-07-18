import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons" id="product-section">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <h2 className="title">Product</h2>
                <h5 className="description">
                  Mahkota Teknologi mengutamakan keamanan dan privasi sebagai
                  nilai inti perusahaan. Berkomitmen untuk melindungi data dan
                  informasi dengan menggunakan teknologi canggih serta kebijakan
                  keamanan yang ketat.
                </h5>
                <Button
                  className="btn-round"
                  color="info"
                  href="/"
                  size="lg"
                  target="_blank"
                >
                  View More
                </Button>
              </motion.div>

              {/* <Button
                className="btn-round"
                color="info"
                href="https://nucleoapp.com/?ref=1712"
                outline
                size="lg"
                target="_blank"
              >
                View All Icons
              </Button> */}
            </Col>
            {/* <Col lg="6" md="12">
              <div className="icons-container">
                <i className="now-ui-icons ui-1_send"></i>
                <i className="now-ui-icons ui-2_like"></i>
                <i className="now-ui-icons transportation_air-baloon"></i>
                <i className="now-ui-icons text_bold"></i>
                <i className="now-ui-icons tech_headphones"></i>
                <i className="now-ui-icons emoticons_satisfied"></i>
                <i className="now-ui-icons shopping_cart-simple"></i>
                <i className="now-ui-icons objects_spaceship"></i>
                <i className="now-ui-icons media-2_note-03"></i>
                <i className="now-ui-icons ui-2_favourite-28"></i>
                <i className="now-ui-icons design_palette"></i>
                <i className="now-ui-icons clothes_tie-bow"></i>
                <i className="now-ui-icons location_pin"></i>
                <i className="now-ui-icons objects_key-25"></i>
                <i className="now-ui-icons travel_istanbul"></i>
              </div>
            </Col> */}
            <Col>
              <Container>
                {/* <div className="hero-images-container">
                  <img alt="..." src={require("assets/img/macair3.png")}></img>
                </div> */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <img alt="..." src={require("assets/images/macair3.png")}></img>
                </motion.div>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
