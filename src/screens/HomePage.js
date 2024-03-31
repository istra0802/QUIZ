import React from "react";

import backgroundImage from "../images/bg_quiz.jpg";
import "../scss/HomePage.scss";
import Header from "../components/Header/Header";
import CustomOffcanvas from "../components/Header/Offcanvas";
import LoginPage from "../components/Login/LoginPage";


export default function HomePage() {
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
          opacity: 0.04,
          zIndex: 1,
          
        }}
      ></div>
      <div className="home">
        <Header></Header>
        <LoginPage />
      </div>
    </div>
  );
}
