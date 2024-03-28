import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import LottieAnimation from "./LottieAnimation";
import logo from "../../images/logo.jpg";
import "../../scss/Navbar.scss";
import CoinAnimation from "./CoinAnimation";
import Drawer from "./Drawer"; // Import your Drawer component
import "bootstrap-icons/font/bootstrap-icons.css";

const CustomNavbar = ({ handleShow }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Navbar className="header">
      <Container>
        <div className="icon-wrapper" onClick={toggleDrawer}>
          <i
            className="bi bi-filter-left"
            aria-hidden="true"
            style={{ fontSize: "35px", color: "white" }}
          ></i>
        </div>

        <Nav.Link className="me-auto">
          <a href="/" className="logo">
            <img
              src={logo}
              alt=""
              style={{ height: "34px", width: "132px", marginTop: "2px" }}
            />
          </a>
        </Nav.Link>

        <Nav>
          <div className="coin" style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "5px", marginLeft: "-4px" }}>
              <CoinAnimation />
            </div>
            <div className="text-white d-flex flex-column" style={{ textAlign: "left" }}>
              <div style={{ marginBottom: "-8px" }}>0</div>
              <div style={{ fontSize: "11px" }} className="text-white">
                Coins
              </div>
            </div>
          </div>

          <div className="lottie">
            <LottieAnimation />
          </div>
        </Nav>
      </Container>
      {/* Render Drawer component if isDrawerOpen is true */}
      {isDrawerOpen && <Drawer onClose={toggleDrawer} />}
    </Navbar>
  );
};

export default CustomNavbar;
