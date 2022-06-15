import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,

  faLinkedinIn,
  faGooglePlusG
} from "@fortawesome/free-brands-svg-icons";
import "../Assets/Styles/About.css";
function About() {
  return (
    <div className="about">
      <Container>
        <div className="lecturer">
          <div className="box d-flex align-items-center  mb-4">
            <div className="image">
              <img src={require("../Assets/Imags/Group 9.png")} alt="" />
            </div>
            <div className="info me-4">
              <h5>الدكتور رجا المرزوقى</h5>
              <p>
                نائب رئيس مجلس ادارة جمعية صفا - استاذ الاقتصاد المشارك معهد
                الامير سعود الفيصل للدراسات الدبلوماسية
              </p>
            </div>
          </div>
          <div className="box d-flex align-items-center  ">
            <div className="image">
              <img src={require("../Assets/Imags/Group 9 (1).png")} alt="" />
            </div>
            <div className="info me-4">
              <h5>الدكتور رجا المرزوقى</h5>
              <p>
                نائب رئيس مجلس ادارة جمعية صفا - استاذ الاقتصاد المشارك معهد
                الامير سعود الفيصل للدراسات الدبلوماسية
              </p>
            </div>
          </div>
        </div>
        <Row className="py-5">
          <Col xs={12} md={6}>
            <div className="summary">
              <h2>ملخص الندوة</h2>
              <p className="my-3">10,382 حاضرين</p>
              <p className="mb-4">
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
                استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصيهناك حقيقة مثبتة
                منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن
                التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
                التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي
                توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد
                محتوى نصي، هنا يوجد محتوى نصي
              </p>
              <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم
                إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن
                استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="content px-5">
              <ListGroup>
                <ListGroup.Item className="d-flex align-items-center  justify-content-between p-4">
                  <p>نشر المحتوي</p>
                  <div className="icons">
                    <a className="icon me-3" href="#">
                      <FontAwesomeIcon icon={faGooglePlusG} />
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
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center   p-4 ">
                  <img src={require("../Assets/Imags/Icon (1).png")} alt="" />

                  <p className="me-4">يوجد ندواتين كل اسبوع </p>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center   p-4">
                  <img src={require("../Assets/Imags/Icon (1).png")} alt="" />

                  <p className="me-4">جميع النداوت مجانية من صفا نداوت </p>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center  p-4">
                  <img src={require("../Assets/Imags/Icon (1).png")} alt="" />
                  <p className="me-4">خطوات و نصائح في مجال الاقتصاد</p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
