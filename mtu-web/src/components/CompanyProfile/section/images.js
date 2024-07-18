import React from "react";
import { motion } from "framer-motion";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                >
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/images/macair3.png")}
                ></img>
              </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                >
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/images/ipad.png")}
                ></img>
              </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                >
              <div className="hero-images-container-2" style={{paddingTop: '90px'}}>
                <img
                  alt="..."
                  src={require("assets/images/iphone.png")}
                ></img>
              </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
