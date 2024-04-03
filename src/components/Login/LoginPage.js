import React from "react";
import LoginSection from "./LoginSection";
import ListSection from "./ListSection";
import Header from "../Header/Header";
export default function LoginPage() {
  return (
    <div className="home">
      <Header showBackButton={true} />
      <div className="list-container">
        <LoginSection />
        <ListSection />
      </div>
    </div>
  );
}