import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faCalendarAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "../Assets/Styles/TopNav.css";
function TopNav() {
  return (
    <div className="tobnav py-4">
      <Container>
        <Row className="px-3">
          <Col xs={12} md={6} className="logo mb-2">
            <div className="logo ">
              <img src={require("../Assets/Imags/logo1.png")} alt="" />
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className=" settings mb-2 d-flex align-items-center justify-content-between "
          >
            <h4>EN</h4>
            <Form>
              <div className="d-flex align-items-center mx-3">
                <FontAwesomeIcon icon={faSearch} />

                <Form.Control
                  type="search"
                  placeholder="بحث..."
                  className="me-2"
                  aria-label="Search"
                />
              </div>
            </Form>
            <p className="calendar">
              <span className="ms-2">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </span>{" "}
              الأجندة
            </p>
            <div className="person d-flex align-items-end justify-content-center">
              <span className="fs-4">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopNav;
