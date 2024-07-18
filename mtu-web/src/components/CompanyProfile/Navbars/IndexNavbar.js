import React from "react";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkReact } from "react-router-dom";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("navbar-section").scrollIntoView();
              }}
            >
              <Link to="navbar-section" smooth={true} duration={1500}>
                Mahkota Teknologi Utama
              </Link>
            </NavbarBrand>
            {/* <NavbarBrand
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("navbar-section")
                  .scrollIntoView();
              }}
            >
              Mahkota Teknologi Utama
            </NavbarBrand> */}
            {/* <UncontrolledTooltip target="#navbar-brand">
              Designed by Invision. Coded by Creative Tim
            </UncontrolledTooltip> */}
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
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   document
                  //     .getElementById("aboutus-section")
                  //     .scrollIntoView();
                  // }}
                >
                  <i className="now-ui-icons travel_info"></i>
                  <Link to="aboutus-section" smooth={true} duration={1500}>
                    <p>Tentang Kami</p>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   document
                  //     .getElementById("valuecompany-section")
                  //     .scrollIntoView();
                  // }}
                >
                  <Link to="valuecompany-section" smooth={true} duration={1500}>
                    <p>Nilai Perusahaan</p>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   document.getElementById("product-section").scrollIntoView();
                  // }}
                >
                  <i className="now-ui-icons design_app"></i>
                  <Link to="product-section" smooth={true} duration={1500}>
                    <p>Product</p>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   document
                  //     .getElementById("contactus-section")
                  //     .scrollIntoView();
                  // }}
                >
                  <i className="now-ui-icons ui-1_email-85"></i>
                  <Link to="contactus-section" smooth={true} duration={1500}>
                    <p>Hubungi Kami</p>
                  </Link>
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>Components</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    All components
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem>
                <LinkReact to="/dashboard">
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  // href="/dashboard"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Dashboard</p>
                </Button>
                </LinkReact>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Sementara.
                </UncontrolledTooltip>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
