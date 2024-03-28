import React, { useState } from "react";
import CustomNavbar from "./Navbar";
import CustomOffcanvas from "./Offcanvas";
import LottieAnimation from "./LottieAnimation";
import "../../scss/Header.scss";

const Header = ({ handleShow }) => {
  // const [showMenu, setShowMenu] = useState(false);

  // const handleClose = () => setShowMenu(false);
  // const handleShow = () => setShowMenu(!showMenu);



  return (
    <>
      <CustomNavbar handleShow={handleShow} />
    </>
  );
};

export default Header;
