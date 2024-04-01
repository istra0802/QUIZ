import React, { useState } from "react";
import "../../../scss/Categories.scss";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

export default function Categories() {

  const categories = [
    { name: "CRICKET", href: "cricket-quiz" },
    { name: "Contests", href: "/" },
    { name: "10+2", href: "102-quiz" },
    { name: "BANK PO EXAM", href: "bank-po-exam-quiz" },
    { name: "BIRDS AND ANIMALS", href: "birds-and-animals-quiz" },
    { name: "BOLLYWOOD", href: "bollywood-quiz" },
    { name: "BRAIN TEASERS", href: "brain-teasers-quiz" },
    { name: "BUSINESS", href: "business-quiz" },
    { name: "ENGLISH GRAMMAR", href: "english-grammer-quiz" },
    { name: "FILL IN THE BLANKS", href: "fill-in-the-blanks-quiz" },
    { name: "FILM AND CELEBRITY", href: "film-and-celebrity-quiz" },
    { name: "GEOGRAPHY", href: "geography-quiz" },
    { name: "GK", href: "gk-quiz" },
    { name: "HINDI & ENGLISH", href: "hindi-and-english-quiz" },
    { name: "HISTORY", href: "history-quiz" },
    { name: "INDIA", href: "india-quiz" },
    { name: "IPL", href: "ipl-quiz" },
    { name: "LITERATURE", href: "literature-quiz" },
    { name: "MATH", href: "math-quiz" },
    { name: "POLITICS", href: "politics-quiz" },
    { name: "SCIENCE", href: "science-quiz" },
    { name: "SPORTS", href: "sports-quiz" },
    { name: "SSC", href: "ssc-quiz" },
    { name: "TECH", href: "tech-quiz" },
    { name: "WORLD", href: "world-quiz" },
  ];

  return (
    <div className="categories-container">
      <div className="categories">
      <ul className="category-list">
          {/* Map through the categories array and render each category */}
          {categories.map((category, index) => (
            <li className="lilink"key={index}>
              <a className="category-link" href={category.href}>
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="search"
        style={{ color: "white", height: "20px", width: "20px" }}
      >
        <Link to="/search">
        <img src="https://images.atmequiz.com/img/search.svg" style={{width:"20px",height:"20px"}}></img>
        </Link>
      </div>

    </div>
  );
}