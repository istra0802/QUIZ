import React from "react";
import "../../../scss/Categories.scss";
import Carousel from "react-multi-carousel";
import { responsive } from "./responsive";
import "react-multi-carousel/lib/styles.css";


export default function Categories() {
 
    
  return (
    <div>
      <div className="categories">
     
       <Carousel responsive={responsive}>
        <ul className="category-list">
          <li><a className="category-link" href="cricket-quiz">CRICKET</a></li>
          <li><a  href="/">Contests</a></li>
          <li><a  href="102-quiz">10+2</a></li>
          <li><a  href="bank-po-exam-quiz">BANK PO EXAM</a></li>
          <li><a  href="birds-and-animals-quiz">BIRDS AND ANIMALS</a></li>
          <li><a  href="bollywood-quiz">BOLLYWOOD</a></li>
          <li><a  href="brain-teasers-quiz">BRAIN TEASERS</a></li>
          <li><a  href="business-quiz">BUSINESS</a></li>
          <li><a  href="english-grammer-quiz">ENGLISH GRAMMAR</a></li>
          <li><a  href="fill-in-the-blanks-quiz">FILL IN THE BLANKS</a></li>
          <li><a  href="film-and-celebrity-quiz">FILM AND CELEBRITY</a></li>
          <li><a  href="geography-quiz">GEOGRAPHY</a></li>
          <li><a  href="gk-quiz">GK</a></li>
          <li><a  href="hindi-and-english-quiz">HINDI & ENGLISH</a></li>
          <li><a  href="history-quiz">HISTORY</a></li>
          <li><a  href="india-quiz">INDIA</a></li>
          <li><a  href="ipl-quiz">IPL</a></li>
          <li><a  href="literature-quiz">LITERATURE</a></li>
          <li><a  href="math-quiz">MATH</a></li>
          <li><a  href="politics-quiz">POLITICS</a></li>
          <li><a  href="science-quiz">SCIENCE</a></li>
          <li><a  href="sports-quiz">SPORTS</a></li>
          <li><a  href="ssc-quiz">SSC</a></li>
          <li><a  href="tech-quiz">TECH</a></li>
          <li><a  href="world-quiz">WORLD</a></li>
        </ul>   
       </Carousel>
      </div>
    </div>
  );
}
