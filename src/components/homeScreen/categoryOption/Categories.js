// Categories.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../scss/Categories.scss";
import { fetchCategories } from "../../../services";
import CategoryCard from "../categoryCard/CatgoryCard";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Contests");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
  };

  return (
    <div className="categories-container">
      <div className="categories">
        <ul className="category-list">
          {categories.map((category, index) => (
            <li className="lilink" key={index}>
              <Link
                className={`category-link ${
                  activeCategory === category.name
                    ? "active"
                    : category.name === "Contests"
                    ? "default-active"
                    : ""
                }`}
                to={category.href}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="search">
        <Link to="/search">
          <img
            src="https://images.atmequiz.com/img/search.svg"
            style={{ width: "20px", height: "20px" }}
            alt="search"
          />
        </Link>
      </div>
      <CategoryCard activeCategory={activeCategory} />
    </div>
  );
}
