import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
} from "reactstrap";
import { motion } from "framer-motion";
import { addPengaduan } from "store/actions/pengaduan";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

// core components

function ContactUs() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    context: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("context", formData.context);
    data.append("message", formData.message);
    data.append("file", formData.file);

    try {
      const response = await axios.post("http://localhost:3000/pengaduan", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // alert(response.data.message);
      setFormData({
        name: "",
        phoneNumber: "",
        context: "",
        message: "",
        file: null,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      // alert("Terjadi kesalahan saat mengirim pengaduan.");
    }
  };


  return (
    <>
      <div
        className="section section-signup"
        id="contactus-section"
        style={{
          backgroundImage: "url(" + require("assets/images/bg11.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Row>
              <Card className="card-signup" data-background-color="blue">
                <Form onSubmit={handleSubmit} className="form">
                  <CardHeader className="text-center">
                    <CardTitle className="title-up" tag="h3">
                      hubungi kami
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <InputGroup className={"no-border" + (firstFocus ? " input-group-focus" : "")}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="name"
                        placeholder="Nama..."
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      />
                    </InputGroup>
                    <InputGroup className={"no-border" + (emailFocus ? " input-group-focus" : "")}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="phoneNumber"
                        placeholder="Nomor Telepon..."
                        type="text"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      />
                    </InputGroup>
                    <InputGroup>
                      <Input
                        name="context"
                        placeholder="Konteks..."
                        type="text"
                        value={formData.context}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    <div className="textarea-container">
                      <Input
                        cols="80"
                        name="message"
                        placeholder="Tuliskan keluhan..."
                        rows="4"
                        type="textarea"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    <InputGroup>
                    <Input type="file" name="file" onChange={handleFileChange} />
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-neutral btn-round" color="info" size="lg" type="submit">
                      Kirim Keluhan
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Row>
          </motion.div>
        </Container>
      </div>
    </>
  );
}

export default ContactUs;
