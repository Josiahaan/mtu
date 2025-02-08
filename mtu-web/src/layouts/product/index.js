import React from "react";
import IndexHeader from "components/CompanyProfile/Headers/IndexHeader.js";
import IndexNavbar from "components/CompanyProfile/Navbars/IndexNavbar.js";
import DarkFooter from "components/CompanyProfile/Footers/DarkFooter.js";
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

const pdfFilePath = "/pdf/Scavenger-manual-guide.pdf";
const pdfFilePath2 = "/pdf/Scavenger-mobile-manual-guide.pdf";
const pdfFilePath3 = "/pdf/kestrel.pdf";

function Product() {
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
          <div className="layouts product" id="product">
            <Container style={{ marginTop: 25 }}>
              <Row>
                <Col lg="6" md="12">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <h2 className="title">Scavenger</h2>
                    <h4 className="title text-info">Spesifikasi</h4>
                    <h5 className="description">• Dimensi (mm): 360*280*100</h5>
                    <h5 className="description">• Prosesor: intel</h5>
                    <h5 className="description">• Modem: Telite 2G/3G, Quactel 4G</h5>
                    <h5 className="description">• Jarak Kerja: 10m - 500m</h5>
                    <h5 className="description">• Daya: ≤50w</h5>
                    <h5 className="description">
                      • Sumber Daya: 12VDC, Baterai eksternal (Opsional)
                    </h5>
                    {/* <Button className="btn-round" color="info" href="/" size="lg" target="_blank">
                      More Info
                    </Button> */}
                    <a href={pdfFilePath} target="_blank" rel="noopener noreferrer">
                      <Button className="btn-round" color="info" size="lg">
                        More Info
                      </Button>
                    </a>
                    <a href={pdfFilePath} download="scavenger-manual-guide.pdf">
                      <Button className="btn-round" color="info" size="lg">
                        Download Manual Guide
                      </Button>
                    </a>
                  </motion.div>
                </Col>
                <Col>
                  <Container>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <img alt="..." src={require("assets/images/hunterg.png")}></img>
                    </motion.div>
                  </Container>
                </Col>
              </Row>
              <Row style={{ marginTop: 75, marginBottom: 75 }}>
                <Col>
                  <Container>
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <img alt="..." src={require("assets/images/scavengermobilenobg.png")}></img>
                    </motion.div>
                  </Container>
                </Col>
                <Col lg="6" md="12">
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <h2 className="title">Scavanger Mobile</h2>
                    <h4 className="title text-info">Spesifikasi</h4>
                    <h5 className="description">• dimensi: 173 x 77 x 10.3 mm (6.81 x 3.03 x 0.41 in)</h5>
                    <h5 className="description">• berat: 239 g (8.43 oz)</h5>
                    <h5 className="description">• OS: Android 12, upgradable to Android 13</h5>
                    <h5 className="description">• Internal: 128GB 8GB RAM, 128GB 12GB RAM</h5>
                    {/* <Button className="btn-round" color="info" href="/" size="lg" target="_blank">
                      More Info
                    </Button> */}
                    <a href={pdfFilePath2} target="_blank" rel="noopener noreferrer">
                      <Button className="btn-round" color="info" size="lg">
                        More Info
                      </Button>
                    </a>
                    <a href={pdfFilePath2} download="scavenger-mobile-manual-guide.pdf">
                      <Button className="btn-round" color="info" size="lg">
                        Download Manual Guide
                      </Button>
                    </a>
                  </motion.div>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="12">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <h2 className="title">Spectrum Analyzer</h2>
                    <h4 className="title text-info">Spesifikasi</h4>
                    <h5 className="description">• Design Frequency Range (DFR):: 680 MHz to 6 GHz</h5>
                    <h5 className="description">• Near-Field Characterization (NFC): Below 10 MHz to Above 12 GHz</h5>
                    <h5 className="description">• Fixed Antenna Cable Length:  Quad Shield Low Loss | 152.4 cm (5 feet)</h5>
                    <h5 className="description">• Impedance: 50 Ohms</h5>
                    <h5 className="description">
                      • Beamwidth: 85 Degrees
                    </h5>
                    <h5 className="description">• Standard Operational Bands: LTE | AWS    
| GSM | GPRS | 2G | 3G | 4G | WLAN | CDMA 
2000  EDGE | BLUETOOTH</h5>
                    {/* <Button className="btn-round" color="info" href="/" size="lg" target="_blank">
                      More Info
                    </Button> */}
                    <a href={pdfFilePath3} target="_blank" rel="noopener noreferrer">
                      <Button className="btn-round" color="info" size="lg">
                        App Info
                      </Button>
                    </a>
                    <a href={pdfFilePath3} download="spectrumapp-manual-guide.pdf">
                      <Button className="btn-round" color="info" size="lg">
                        Download Kestrel Manual Guide
                      </Button>
                    </a>
                  </motion.div>
                </Col>
                <Col>
                  <Container>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <img alt="..." src={require("assets/images/spectrumnobg.png")}></img>
                    </motion.div>
                  </Container>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="12">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <h2 className="title">Surveillance</h2>
                    <h5 className="description">
                      Kami merancang perangkat dan sistem untuk memantau dan mengawasi area tertentu
                      dengan tujuan keamanan dan pengawasan. Produk ini mencakup berbagai jenis
                      kamera pengawas, sistem perekam video, perangkat deteksi gerakan, perangkat
                      alarm, dan perangkat lunak manajemen video
                    </h5>
                  </motion.div>
                </Col>
                <Col>
                  <Container>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <img alt="..." src={require("assets/images/mtu-surveillance.png")}></img>
                    </motion.div>
                  </Container>
                </Col>
              </Row>
              <Row style={{ marginTop: 75, marginBottom: 75 }}>
                <Col>
                  <Container>
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <img
                        alt="..."
                        src={require("assets/images/mtu-counter-surveillance.png")}
                      ></img>
                    </motion.div>
                  </Container>
                </Col>
                <Col lg="6" md="12">
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <h2 className="title">Counter Surveillance</h2>
                    <h5 className="description">
                      Perangkat dan sistem yang dirancang untuk mendeteksi, mencegah, dan melindungi
                      dari upaya memata-matai atau mengawasi secara ilegal. Produk ini digunakan
                      untuk melindungi privasi dan keamanan informasi pribadi, baik dalam lingkungan
                      pribadi maupun bisnis.
                    </h5>
                  </motion.div>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="12">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <h2 className="title">Biometrik</h2>
                    <h5 className="description">
                      Perangkat dan sistem yang menggunakan karakteristik fisik atau perilaku unik
                      seseorang untuk mengidentifikasi, memverifikasi, dan mengautentikasi identitas
                      mereka. Dirancang untuk meningkatkan keamanan dan efisiensi dalam berbagai
                      aplikasi, seperti pengamanan fisik, kontrol akses, manajemen kehadiran, dan
                      identifikasi kriminal.
                    </h5>
                  </motion.div>
                </Col>
                <Col>
                  <Container>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <img alt="..." src={require("assets/images/mtu-biometric.png")}></img>
                    </motion.div>
                  </Container>
                </Col>
              </Row>
              <Row style={{ marginTop: 75, marginBottom: 75 }}>
                <Col>
                  <Container>
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <img alt="..." src={require("assets/images/mtu-digital-forensic.png")}></img>
                    </motion.div>
                  </Container>
                </Col>
                <Col lg="6" md="12">
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <h2 className="title">Digital Forensik</h2>
                    <h5 className="description">
                      Produk digital forensik juga dapat mencakup perangkat lunak pemantauan
                      jaringan yang memungkinkan deteksi dan analisis aktivitas mencurigakan dalam
                      jaringan komputer, serta perangkat lunak pemulihan data yang dapat
                      mengembalikan file yang dihapus, terformat, atau rusak dari perangkat
                      penyimpanan.
                    </h5>
                  </motion.div>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="12">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <h2 className="title">Blockhain</h2>
                    <h5 className="description">
                      Kami mengintegrasikan teknologi blockchain dalam produk keamanan kami untuk
                      meningkatkan keamanan dan integritas data. Dengan menggunakan teknologi
                      blockchain, kami dapat menciptakan sistem yang transparan, aman, dan tidak
                      bisa dimanipulasi.
                    </h5>
                  </motion.div>
                </Col>
                <Col>
                  <Container>
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <img alt="..." src={require("assets/images/mtu-blockchain.png")}></img>
                    </motion.div>
                  </Container>
                </Col>
              </Row>
              <Row style={{ marginTop: 75, marginBottom: 75 }}>
                <Col>
                  <Container>
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.5 }}
                    >
                      <img
                        alt="..."
                        src={require("assets/images/mtu-tactical-equipment.png")}
                      ></img>
                    </motion.div>
                  </Container>
                </Col>
                <Col lg="6" md="12">
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                  >
                    <h2 className="title">Tactical Equipment</h2>
                    <h5 className="description">
                      Perangkat tactical dapat berupa peralatan pengintaian elektronik, seperti
                      sistem pemantauan komunikasi atau. Produk ini mampu mendeteksi, memantau, dan
                      menganalisis sinyal komunikasi atau pergerakan target untuk mendapatkan
                      keunggulan informasi. Dengan menggunakan peralatan taktis, informasi penting
                      tentang target atau situasi di area tertentu dapat dengan mudah diperoleh.
                    </h5>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Product;
