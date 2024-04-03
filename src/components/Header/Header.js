import React from "react";
import CustomNavbar from "./Navbar";
import CustomOffcanvas from "./Offcanvas";
import "../../scss/Header.scss";


const Header = ({ handleShow, showBackButton }) => {

  return (
    <div>
      <CustomNavbar showBackButton={showBackButton} handleShow={handleShow} />
      <CustomOffcanvas  />
    </div>
  );
};

export default Header;
