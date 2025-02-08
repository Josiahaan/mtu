import React, { useState, useEffect } from "react";
import {
  Button,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  NavbarBrand,
  Navbar,
  Container,
  UncontrolledTooltip,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link as ScrollLink } from "react-scroll";
import { Link as LinkReact } from "react-router-dom";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const isLoggedIn = !!localStorage.getItem("access_token");
  const role = localStorage.getItem("role");
  const adminAccess = role === "Super Admin" || role === "Admin";

  useEffect(() => {
    const updateNavbarColor = () => {
      if (document.documentElement.scrollTop > 399 || document.body.scrollTop > 399) {
        setNavbarColor("");
      } else if (document.documentElement.scrollTop < 400 || document.body.scrollTop < 400) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, []);

  return (
    <>
      {collapseOpen && (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      )}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand tag={LinkReact} to="/company-profile">
              Sorte Systegra Prospera
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse className="justify-content-end" isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <i className="now-ui-icons shopping_cart-simple"></i>
                  <p>Katalog</p>
                </DropdownToggle>
                <DropdownMenu left className="mega-menu" style={{ display: "block" }}>
                  <div
                    className="menu-row"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="menu-column" style={{ color: "#36454F" }}>
                      {/* <DropdownItem header>Category 1</DropdownItem> */}
                      <DropdownItem>ACSL</DropdownItem>
                      <DropdownItem>AGNES</DropdownItem>
                      <DropdownItem>BALIUS - TAIWAN</DropdownItem>
                      <DropdownItem>BSW</DropdownItem>
                    </div>
                    <div className="menu-column" style={{ color: "#36454F" }}>
                      {/* <DropdownItem header>Category 2</DropdownItem> */}
                      <DropdownItem>CCL</DropdownItem>
                      <DropdownItem>CETC</DropdownItem>
                      <DropdownItem>CYBERGLOBES</DropdownItem>
                      <DropdownItem>DATA EXPERT</DropdownItem>
                    </div>
                    <div className="menu-column" style={{ color: "#36454F" }}>
                      {/* <DropdownItem header>Category 3</DropdownItem> */}
                      <DropdownItem>HEIMDALL</DropdownItem>
                      <DropdownItem>PATTERNZ</DropdownItem>
                      <DropdownItem>RDM</DropdownItem>
                      <DropdownItem>REACH</DropdownItem>
                    </div>
                    <div className="menu-column" style={{ color: "#36454F" }}>
                      <DropdownItem>STATUS GLOBAL</DropdownItem>
                      <DropdownItem>TAIT</DropdownItem>
                    </div>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavItem>
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      <i className="now-ui-icons shopping_cart-simple"></i>
      <p>Katalog</p>
    </DropdownToggle>
    <DropdownMenu right className="multi-column-dropdown" style={{columnCount: 5}}>
      <DropdownItem>ACSL</DropdownItem>
      <DropdownItem>AGNES</DropdownItem>
      <DropdownItem>BALIUS - TAIWAN</DropdownItem>
      <DropdownItem>BSW</DropdownItem>
      <DropdownItem>CCL</DropdownItem>
      <DropdownItem>CETC</DropdownItem>
      <DropdownItem>CYBERGLOBES</DropdownItem>
      <DropdownItem>DATA EXPERT</DropdownItem>
      <DropdownItem>HEIMDALL</DropdownItem>
      <DropdownItem>IWOW</DropdownItem>
      <DropdownItem>JSI</DropdownItem>
      <DropdownItem>METIER</DropdownItem>
      <DropdownItem>NIOMETRICS</DropdownItem>
      <DropdownItem>HEIMDALL</DropdownItem>
      <DropdownItem>PATTERNZ</DropdownItem>
      <DropdownItem>RDM</DropdownItem>
      <DropdownItem>REACH</DropdownItem>
      <DropdownItem>STATUS GLOBAL</DropdownItem>
      <DropdownItem>TAIT</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Reset</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
</NavItem> */}

              <NavItem>
                <NavLink href="#">
                  <i className="now-ui-icons travel_info"></i>
                  <ScrollLink to="aboutus-section" smooth={true} duration={1500}>
                    <p>Tentang Kami</p>
                  </ScrollLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <ScrollLink to="valuecompany-section" smooth={true} duration={1500}>
                    <p>Nilai Perusahaan</p>
                  </ScrollLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={LinkReact} to="/product">
                  <i className="now-ui-icons design_app"></i>
                  <p>Product</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <i className="now-ui-icons ui-1_email-85"></i>
                  <ScrollLink to="contactus-section" smooth={true} duration={1500}>
                    <p>Hubungi Kami</p>
                  </ScrollLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <LinkReact
                  to={
                    isLoggedIn
                      ? adminAccess
                        ? "/dashboard"
                        : "/inventory"
                      : "/authentication/sign-in"
                  }
                >
                  <Button
                    className="nav-link btn-neutral"
                    color="info"
                    id="auth-button"
                    target="_blank"
                  >
                    <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                    <p>{isLoggedIn ? (adminAccess ? "Dashboard" : "Inventory") : "Login"}</p>
                  </Button>
                </LinkReact>
                <UncontrolledTooltip target="#auth-button">
                  {isLoggedIn
                    ? adminAccess
                      ? "Go to Dashboard"
                      : "Go to Inventory"
                    : "Login to access"}
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
