import React, { useState } from "react";
import backgroundImage from "../images/bg_quiz.jpg";
import "../scss/HomePage.scss";
import Categories from "../components/homeScreen/categoryOption/Categories";
import CategoryCard from "../components/homeScreen/categoryCard/CatgoryCard";
// import ReportIssue from "../components/homeScreen/reportIssueOffCanva/ReportIssue";
import GoogleAd from "../components/GoogleAd";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="home">
        <Header />
        <div className="home page">
          <GoogleAd />
          <Categories />
          <CategoryCard />
          <Footer />
        </div>
      </div>
    </div>
  );
}
