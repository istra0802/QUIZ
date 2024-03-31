import React, { useState } from "react";
import CustomNavbar from "./Navbar";
import CustomOffcanvas from "./Offcanvas";
import LottieAnimation from "./LottieAnimation";
import "../../scss/Header.scss";

const Header = ({ handleShow }) => {

  return (
    <>
      <CustomNavbar handleShow={handleShow} />
      <CustomOffcanvas/>
    </>
  );
};

export default Header;
