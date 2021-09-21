import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

import "./styles.css";
import WebsiteLogo from "./assets/logo.png";
import WebsiteLogoFull from "./assets/full-logo.png";

const navLinks = [
  { title: "Register", href: "/register" },
  { title: "Badges", href: "/#badges" },
  { title: "Prizes", href: "/#prizes" },
  { title: "Resources", href: "/#resources" },
];

const NavBar = () => {
  // Element with Nav Links
  const navLinksElement = navLinks.map((item, index) => (
    <Nav.Item key={index} as="li">
      <Link to={item.href} className="nav-link">
        {item.title}
      </Link>
    </Nav.Item>
  ));

  // Checking if user has scrolled
  const [scroll, setScroll] = useState(() => false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }, []);

  return (
    <section>
      <Navbar
        /* Light variant - transparent background */
        variant={scroll ? "dark" : "light"}
        bg={scroll ? "dark" : "light"}
        expand="lg"
      >
        <Navbar.Brand>
          <Link to="/#home">
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
