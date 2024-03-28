import React from "react";

import backgroundImage from "../images/bg_quiz.jpg";
import "../scss/HomePage.scss";
import Header from "../components/Header/Header";
import CustomOffcanvas from "../components/Header/Offcanvas";
import LoginPage from "./LoginPage";

export default function HomePage() {
  const handleShowValue = (show) => {
    // Do something with the 'show' value
    console.log("Show value:", show);
  };

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.2,
          zIndex: 1,
        }}
      >
        
      </div>
      <div className="home">
        <Header handleShow={handleShowValue} ></Header>
        <CustomOffcanvas />
        <LoginPage />
      </div>
    </div>
  );
}
