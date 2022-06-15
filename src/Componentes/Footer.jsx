import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../Assets/Imags/Group 170.svg";
import "../Assets/Styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <Container className=" my-5">
        <Row>
          <Col xs={12} md={4} className="mb-4 logo">
            <div className=" mb-4">
              <img src={logo} alt="" />
            </div>
            <p className="my-3">Safa@gmail.com</p>
            <p>+757 699-4478</p>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <h4 className="mb-4">الروابط</h4>
            <div className="links d-flex align-items-center flex-wrap">
              <div className="ms-5">
                <ul>
                  <li>
                    <a href="#" className="text-decoration-none">
                      {" "}
                      الرئيسية{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-decoration-none">
                      من نحن{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-decoration-none">
                      الخدمات{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-decoration-none">
                      الفعاليات{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-decoration-none">
                      الكورسات{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      {" "}
                      الندوات{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    {" "}
                    <a href="#" className="text-decoration-none">
                      الورشات
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      الاخبار
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      الابحاث
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      فريق العمل
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      العضوية
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none">
                      اتصل بنا
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <h4 className="mb-4">تابعنا</h4>
            <div className="icons">
              <a className="icon me-3" href="#">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a className="icon me-3" href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a className="icon me-3" href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="icon me-3" href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </div>
            <h4 className="my-4">لمتابعة الاخبار</h4>
            <div className="d-flex align-items-center  flex-wrap  ">
              <input type="text" />
              <Button className="btn">اشترك</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <p className="text-center pb-5 copy">الحقوق محفوظة لصفا</p>
    </div>
  );
}

export default Footer;
