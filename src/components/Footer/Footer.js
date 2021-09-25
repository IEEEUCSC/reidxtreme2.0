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
      Copyright &copy; {currentDate.getFullYear()}
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
            className="footer-logo-IEEE-ACM"
            src={IEEELogo}
            title="IEEE Student Branch Chapter of UCSC"
            alt="IEEE Logo"
          />
        </Col>
        <Col className="footer-logo-wrapper" lg={4}>
          <img
            className="footer-logo-IEEE-ACM"
            src={WebsiteLogo}
            title="ACM Student Branch Chapter of UCSC"
            alt="ACM Logo"
          />
        </Col>
      </Row>

      <Row>
        <Col className="footer-text" lg={12}>
          <div>
            ReidXtreme in Competitive Programming is organized by the ACM Student Chapter of UCSC, with the collaboration of the IEEE Student Branch Chapter of UCSC
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="footer-right" lg={12}>
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
