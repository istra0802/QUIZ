import React, { useState } from "react";
import CustomNavbar from "./Navbar";
import CustomOffcanvas from "./Offcanvas";
import "../../scss/Header.scss";


const Header = ({ handleShow }) => {
  return (
    <div>
      <CustomNavbar handleShow={handleShow} />
      <CustomOffcanvas />
    </div>
  );
};

export default Header;
