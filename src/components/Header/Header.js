import React from "react";
import CustomNavbar from "./Navbar";
import CustomOffcanvas from "./Offcanvas";
import "../../scss/Header.scss";

const Header = ({ showBackButton }) => {
  return (
    <>
      <CustomNavbar showBackButton={showBackButton} />
      <CustomOffcanvas />
    </>
  );
};

export default Header;
