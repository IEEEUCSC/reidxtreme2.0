import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";

import WebsiteLogo from "../../assets/images/full-logo.png";
import "./styles.css";

const CopyrightFooter = () => {
  const currentDate = new Date();
  return (
    <div className="footer-copyright">
      Copyright &copy; {currentDate.getFullYear()}
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col className="footer-logo-wrapper" lg={6}>
          <img
            className="footer-logo"
            src={WebsiteLogo}
            title="ReidXtreme"
            alt="ReidXtreme Logo"
          />
        </Col>
        <Col className="footer-right" lg={6}>
          <div className="socials-group">
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
            <h6 className="title">IEEE Student Branch</h6>
          </div>

          <div className="socials-group">
            <div className="socials">
              <div className="socials-facebook">
                <Facebook />
              </div>
            </div>
            <h6 className="title">ACM Student Chapter</h6>
          </div>
        </Col>
      </Row>
      <CopyrightFooter />
      <Link
        // First section id name
        to="top"
        className="footer-back-to-top"
      >
        Back to top
      </Link>
    </Container>
  </footer>
);
export default Footer;
