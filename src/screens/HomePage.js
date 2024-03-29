import React from "react";
import backgroundImage from "../images/bg_quiz.jpg";
import "../scss/HomePage.scss";
import CategoryCard from "../components/category/categoryCard/CategoriesCard";
import Categories from "../components/category/categoryOption/Categories";


export default function HomePage() {
  return (
    <div className="home-container">
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
      ></div>
      <div className="home">
        <Categories />
        <CategoryCard />
      </div>
    </div>
  );
}
