import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import "../Assets/Styles/Contact.css";
function Contact() {
  return (
    <div className="contact py-5">
      <Row>
        <Col xs={12} md={6} className="student">
          <div className="circels">
            <img
              src={require("../Assets/Imags/circelStudent.png")}
              alt=""
              className="w-100"
            />
          </div>
          <div className="image">
            <img
              src={require("../Assets/Imags/student.png")}
              alt=""
              className="w-100"
            />
          </div>
        </Col>
        <Col xs={12} md={6} className="p-5 question">
          {/* <span>
<FontAwesomeIcon icon={faQuestion} />
</span> */}
          <div className="box d-flex align-items-center  flex-wrap-wrap ">
            <div>
              <img src={require("../Assets/Imags/question.png")} alt="" />
            </div>
            <div className="info me-4">
              <h5>ارسل سؤالك للمحاضر</h5>
              <p>يجب عليك التسجيل و حضور الندوة</p>
            </div>
          </div>
          <Form>
            <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
              <Form.Label className="px-2">Email address</Form.Label>
              <Form.Control
                className="mb-3"
                type="email"
                placeholder="احمد محمد"
              />
              <Form.Text className="text-muted">
                لابد من حجز الندوة اولا حتي تتمكن من ترك سؤالك
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              ارسل
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
