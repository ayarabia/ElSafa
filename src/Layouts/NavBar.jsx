import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

import "../Assets/Styles/NavBar.css";
function NavBar() {
  return (
    <div>
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <a href="#" className="nav-link">
                  {" "}
                  الرئيسية
                </a>
                <a href="#" className="nav-link">
                  {" "}
                  من نحن
                </a>

                <a href="#" className="nav-link">
                  {" "}
                  الخدمات{" "}
                </a>
                <a href="#" className="nav-link">
                  {" "}
                  الفعاليات{" "}
                </a>
                <a href="#" className="nav-link">
                  {" "}
                  الكورسات{" "}
                </a>

                <a href="#" className="nav-link">
                  {" "}
                  الندوات
                </a>

                <a href="#" className="nav-link">
                  {" "}
                  الورشات
                </a>
                <a href="#" className="nav-link">
                  {" "}
                  الاخبار{" "}
                </a>
                <a href="#" className="nav-link">
                  {" "}
                  الابحاث{" "}
                </a>
                <a href="#" className="nav-link">
                  {" "}
                  فريق العمل
                </a>
                <a href="#" className="nav-link">
                  {" "}
                  العضوية{" "}
                </a>
                <a href="#" className="nav-link">
                  {" "}
                  اتصل بنا{" "}
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavBar;
