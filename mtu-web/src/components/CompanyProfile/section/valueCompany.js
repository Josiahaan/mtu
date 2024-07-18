import { Button, Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

function ValueCompany() {
  return (
    <>
      <div className="section section-team text-center" id="valuecompany-section">
        <Container>
        <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
          <h2 className="title">NILAI - NILAI PERUSAHAAN</h2>
              </motion.div>
          <div className="team">
            <Row>
              <Col md="4">
                <div className="team-player">
                    <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <h4 className="title text-info">Inovasi dan Teknologi</h4>
                  {/* <p className="category text-info">Inovasi dan Teknologi</p> */}
                  {/* <div className="icons-container"> */}
                <p className="now-ui-icons business_bulb-63"></p>
                  <p className="description">
                    Mahkota Teknologi selalu mengikuti perkembangan terbaru
                    dalam industri keamanan dan pengawasan. Mengamati tantangan
                    tantangan terbaru untuk memberi solusi dengan cara yang
                    efisien.{" "}
                  </p>
              </motion.div>
                  {/* <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/avatar.jpg")}
                  ></img> */}
                  
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                  {/* <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/ryan.jpg")}
                  ></img> */}
                  <h4 className="title text-info">Keamanan dan Privasi</h4>
                  <p className="now-ui-icons ui-1_settings-gear-63"></p>
                  {/* <p className="category text-info">Designer</p> */}
                  <p className="description">
                    Mahkota Teknologi mengutamakan keamanan dan privasi sebagai
                    nilai inti perusahaan. Berkomitmen untuk melindungi data dan
                    informasi dengan menggunakan teknologi canggih serta
                    kebijakan keamanan yang ketat.{" "}
                  </p>
              </motion.div>
                </div>
              </Col>
              <Col md="4">
                <div className="team-player">
                <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
              >

                  {/* <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/eva.jpg")}
                  ></img> */}
                  <h4 className="title text-info">Kolaborasi dan Kemitraan</h4>
                  <p className="now-ui-icons business_briefcase-24"></p>
                  {/* <p className="category text-info">Fashion</p> */}
                  <p className="description">
                    Membangun hubungan kemitraan yang kuat dengan pelanggan dan
                    mitra. Mahkota Teknologi percaya bahwa kolaborasi yang baik
                    adalah kunci untuk memberikan solusi keamanan dan pengawasan
                    yang komprehensif dan efektif.{" "}
                  </p>
              </motion.div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ValueCompany;
