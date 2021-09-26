import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";

import WebsiteLogo from "../../assets/images/full-logo.png";
import IEEELogo from "../../assets/images/IEEE_Logo.png";
import ACMLogo from "../../assets/images/ACM_Logo.png";
import "./styles.css";

const CopyrightFooter = () => {
  const currentDate = new Date();
  return (
    <div className="footer-copyright">
      Copyright &copy; {currentDate.getFullYear()} ReidXtreme. All rights
      reserved.
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col className="footer-logo-wrapper" lg={4}>
          <img
            className="footer-logo"
            src={ACMLogo}
            title="ReidXtreme"
            alt="ReidXtreme Logo"
          />
        </Col>
        <Col className="footer-logo-wrapper" lg={4}>
          <img
            className="footer-logo"
            src={IEEELogo}
            title="IEEE Student Branch Chapter of UCSC"
            alt="IEEE Logo"
          />
        </Col>
        <Col className="footer-logo-wrapper" lg={4}>
          <img
            className="footer-logo"
            src={WebsiteLogo}
            title="ACM Student Branch Chapter of UCSC"
            alt="ACM Logo"
          />
        </Col>
      </Row>

      <div className="footer-text">
        ReidXtreme Competitive Programming is organized by the ACM Student
        Chapter of UCSC, in collaboration with the IEEE Student Branch of UCSC
      </div>

      <div className="socials">
        <div className="socials-facebook">
          <Facebook />
        </div>
        <div className="socials-instagram">
          <Instagram />
        </div>
        <div className="socials-linkedin">
          <Linkedin />
        </div>
      </div>

      <CopyrightFooter />
      <Link
        // First section id name
        to="top"
        className="footer-back-to-top"
      >
        BACK TO TOP
      </Link>
    </Container>
  </footer>
);
export default Footer;
