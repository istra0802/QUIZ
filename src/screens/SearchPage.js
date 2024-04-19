import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "../scss/SearchPage.scss";
import { useNavigate } from "react-router";
import { fetchAllCategoryData, fetchCategories, fetchCategoriesWisedata } from "../services";

export default function SearchPage() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [contestData, setContestData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const catgryimg=localStorage.getItem('image');

  const handleBack = () => {
    navigate("/home");
  };

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllCategoryData();
        console.log("uuuuuu",data)
        setContestData(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });
  }, []);

  const filteredContests = contestData.filter((contest) =>
    contest.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredContests1 = categories?.filter((contest) =>
    contest.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (contestId,contestImage,contestName) => {
    localStorage.setItem('category',contestName);
    localStorage.setItem('image',contestImage);
    navigate(`/home/playbtn/${contestId}`);
  };

  return (
    <div className="box-c1">

      <div className="search_wrapper">
        <div className="search_searchHeader d-flex">
          <div className="search_back" onClick={handleBack}>
            <img
              src="https://images.atmequiz.com/img/back_arrow.svg"
              alt=""
              style={{ height: "30px", width: "30px", color: "transparent" }}
            ></img>
          </div>
          <div className="search_input">
            <input
              type="text"
              placeholder="Search"
              className="search_input_1"
              name="searchTerm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
              src="https://images.atmequiz.com/img/close.svg"
              alt=""
              className="close"
              style={{ width: "14px", height: "14px" }}
            />
          </div>
        </div>
      </div>

      <div className="search_category swiper-container">
        <div className="swiper-wrapper">
          {filteredContests1.map((category, index) => (
            <div className="swiper-slide l" key={index}>
              <a href="/home">
                <div className="search__boxxx">
                  <img
                    src={category.quizImage}
                    style={{ width: "48px", height: "48px" }}
                    alt={""}
                  />
                </div>
                <span className="c">{category?.category}</span>
              </a>
            </div>
          ))}
        </div>
        <div className="swiper-scrollbar"></div>
      </div>

      <div className="serach_gameList">
        <div className="search_listingHeader">
          <h1 className="h">Quiz List</h1>
          <p className="pa">
            {" "}
            {filteredContests.length} quizzes explore your favourite
          </p>
        </div>
        <div className="search_listBody">
          <ul className="uli">
            {filteredContests.map((contest, index) => (
              <li key={index}>
                <a
                  className="aa"
                  onClick={() => handleCardClick(contest.id,contest.quizImage,contest.category)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="search_box">
                    <img
                      src={contest.quizImage}
                      style={{ height: "40px", width: "40px" }}
                      alt=""
                    />
                  </div>
                  <div className="search_quizTxt">
                    <h2 className="hh">{contest.name}</h2>
                    <p className="pp">
                      {contest.category}, Entry: 50 Coins
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}