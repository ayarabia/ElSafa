import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAngleLeft,
  faHeart,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../Assets/Styles/Header.css";
import NavBar from "../Layouts/NavBar";

import TopNav from "../Layouts/TopNav";
function Header() {
  return (
    <div className="header">
      <div className="top">
        <img src={require("../Assets/Imags/Group 7.png")} alt="" className="w-100" />
      </div>
      <TopNav></TopNav>
      <NavBar></NavBar>
      <Container className="py-5 ">
        <Row>
          <Col xs={12} md={6} className="light">
            <div className=" path d-flex align-items-center justify-content-between flex-wrap-wrap">
              <p>
                <a href="#" className="light ms-2 ">
                  الرئيسية
                </a>{" "}
                <span>
                  <FontAwesomeIcon icon={faAngleLeft} className=" ms-2" />{" "}
                  الندوات
                </span>
              </p>
              <div>
                <span className="favourit">
                  <FontAwesomeIcon icon={faHeart} /> أضف الى المفضلة
                </span>
              </div>
            </div>
            <p className="my-3">
              <span className="ms-2 calendar">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </span>
              يوم الخميس ١٦ يوليو ٢٠٢٠ م من ٤ - ٦ مساءاً
            </p>
            <h3 className="mb-4">
              ندعوكم في الجمعية المالية السعودية صفا لحضور المساحة الخاصة
              بمناقشة الميزانية العامة والاقتصاد المحلي، ننتظركم غدًا
            </h3>
            <Button className="btn mb-5">حجز الان</Button>
          </Col>
          <Col xs={12} md={6} className="image"></Col>
        </Row>
      </Container>

      <div className="down">
        <img src={require("../Assets/Imags/Group 342.png")} alt="" className="w-100" />
      </div>
    </div>
  );
}

export default Header;
