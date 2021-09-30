import React, { useEffect, useState, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

import "./styles.css";
import WebsiteLogo from "../../assets/images/logo.webp";
import WebsiteLogoFull from "../../assets/images/full-logo.webp";

const navLinks = [
  { title: "BADGES", section: "badges" },
  { title: "PRIZES", section: "prizes" },
  { title: "TIMELINE", section: "timeline" },
  { title: "REGISTER", section: "register" },
];

const NavBar = () => {
  // Navbar height
  const navbarRef = useRef(null);
  const [height, setHeight] = useState(() => 0);

  // Element with Nav Links
  const navLinksElement = navLinks.map((item, index) => (
    <Nav.Item key={index} as="li">
      <Link
        className="nav-link"
        activeClass="current"
        spy={true}
        to={item.section}
        // Height of navbar
        offset={-height}
        isDynamic={true}
      >
        {item.title}
      </Link>
    </Nav.Item>
  ));

  // Checking if user has scrolled
  const [scroll, setScroll] = useState(() => false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    setHeight(navbarRef.current.clientHeight);
  }, []);

  return (
    <section>
      <Navbar
        /* Light variant - transparent background */
        variant={scroll ? "dark" : "light"}
        bg={scroll ? "dark" : "light"}
        expand="lg"
        ref={navbarRef}
      >
        <Navbar.Brand>
          <Link to="home">
            <img
              className="navbar-logo"
              src={WebsiteLogo}
              alt="Website Logo"
              title="ReidXtreme Homepage"
            />
            <img
              className="navbar-logo-full"
              src={WebsiteLogoFull}
              alt="Website logo"
              title="ReidXtreme Homepage"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav as="ul">{navLinksElement}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

export default NavBar;
