import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";

import WebsiteLogo from "../../assets/images/full-logo.webp";
import IEEELogo from "../../assets/images/IEEE_Logo.webp";
import ACMLogo from "../../assets/images/ACM_Logo.webp";
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
        <Col className="footer-logo-wrapper">
          <img
            className="footer-logo"
            src={ACMLogo}
            title="ReidXtreme"
            alt="ReidXtreme Logo"
          />
        </Col>
        <Col className="footer-logo-wrapper">
          <img
            className="footer-logo"
            src={IEEELogo}
            title="IEEE Student Branch Chapter of UCSC"
            alt="IEEE Logo"
          />
        </Col>
        <Col className="footer-logo-wrapper">
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
          <a
            href="https://web.facebook.com/IEEE.UCSC"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
        </div>
        <div className="socials-instagram">
          <a
            href="https://www.instagram.com/ucsc.ieee/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
        </div>
        <div className="socials-linkedin">
          <a
            href="https://www.linkedin.com/company/ieee-student-branch-ucsc"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
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
