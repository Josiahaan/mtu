import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <>
      <div className="section section-about-us" id="aboutus-section">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                >
              <h2 className="title">Tentang Kami</h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                >
              <h5 className="description">
                Mahkota Teknologi adalah perusahaan yang bergerak di bidang
                penyedia produk keamanan dan pengawasan. Dengan berbagai
                pengalaman di sektor pertahanan, perusahaan ini telah menjadi
                mitra yang terpercaya bagi berbagai jenis bisnis dan instansi
                dalam menjaga keamanan dan perlindungan masyarakat.
              </h5>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                >
              <h5 className="description">
                Mahkota Teknologi selalu melakukan inovasi dengan melakukan
                penelitian dan pengembangan untuk menghadirkan solusi yang
                efektif dan efisien. Dengan mengintegrasikan kecerdasan buatan
                (AI), teknologi cloud, dan analisis big data, kami menghadirkan
                solusi yang cerdas dan dapat diandalkan untuk pengawasan dan
                keamanan. Produk yang disediakan selalu mengutamakan solusi
                dalam menjawab kebutuhan keamanan dan pengawasan. Mulai dari
                memahami kebutuhan pengguna, mengatasi tantangan di lapangan,
                hingga memastikan bahwa setiap produk dapat digunakan pengguna
                dan memberikan kinerja yang optimal.
              </h5>
              </motion.div>
            </Col>
          </Row>
          <div className="separator separator-primary"></div>
          <div className="section-story-overview">
            <Row>
              <Col md="6">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                >
                <div
                  className="image-container image-left"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/images/mtu-digital-forensic.png") +
                      ")",
                  }}
                >
                  <p className="blockquote blockquote-info">
                    "Orang biasa hanya bicara. Orang yang baik akan menjelaskan.
                    Orang yang lebih tinggi akan menunjukan. Orang hebat akan
                    menginspirasi orang lain untuk melihat diri mereka sendiri."{" "}
                    <br></br>
                    <br></br>
                    <small>-Harvey Mackay-</small>
                  </p>
                </div>              
                <div
                  className="image-container"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/images/mtu-tactical-equipment.png") +
                      ")",
                  }}
                ></div>
                </motion.div>
              </Col>
              <Col md="5">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                >
                <div
                  className="image-container image-right"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/images/mtu-biometric.png") + ")",
                  }}
                ></div>
                <h3>Visi - Misi Perusahaan</h3>
                <h4>Visi</h4>
                <p>
                  Menjadi penyedia terpercaya dalam solusi teknologi keamanan
                  dan pengawasan yang inovatif.
                </p>
                <h4>Misi</h4>
                <p>
                  1. Memberi solusi dalam memenuhi kebutuhan keamanan dan
                  pengawasan dengan menghadirkan produk berkualitas yang
                  spesifikasinya sesuai dengan kebutuhan di lapangan.
                </p>
                <p>
                  2. Terus melakukan penelitian dan pengembangan untuk menjawab
                  tantangan kebutuhan teknologi di masa depan.
                </p>
                <p>
                  3. Memberikan pelayanan berupa pelatihan ke pengguna agar
                  dapat menggunakan produk secara optimal.
                </p>
                <p>
                  4. Menjadi mitra terpercaya dalam memastikan keamanan dan
                  pengawasan.
                </p>
                <p>
                  5. Mengembangkan kemitraan untuk meningkatkan portofolio
                  produk dan layanan kami.
                </p>
                </motion.div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default AboutUs;
