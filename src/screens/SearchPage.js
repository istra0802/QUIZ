import React from "react";
import "../scss/SearchPage.scss";
import monkey from "../images/monkey.png";

export default function SearchPage() {
  const searchCategories = [
    { name: "Contests", imageUrl: monkey, link: "/" },
    { name: "Contests", imageUrl: monkey, link: "/" },
    { name: "Contests", imageUrl: monkey, link: "/" },
    { name: "Contests", imageUrl: monkey, link: "/" },
    { name: "Contests", imageUrl: monkey, link: "/" },
    { name: "Contests", imageUrl: monkey, link: "/" },
    { name: "Contests", imageUrl: monkey, link: "/" },
    { name: "Contests", imageUrl: monkey, link: "/" },
    { name: "Contests", imageUrl: monkey, link: "/" },
    { name: "Contests", imageUrl: monkey, link: "/" },
    { name: "Contests", imageUrl: monkey, link: "/" },
    { name: "Contests", imageUrl: monkey, link: "/" },
  ];
  const searchGameLists = [
    {
        title: "Play and Win 22000 Coins",
        category: "BUSINESS",
        entry: "50 Coins",
        imageUrl: monkey,
        link: "#",
      },
      {
        title: "Play and Win 22000 Coins",
        category: "BUSINESS",
        entry: "50 Coins",
        imageUrl: monkey,
        link: "#",
      },
      {
        title: "Play and Win 22000 Coins",
        category: "BUSINESS",
        entry: "50 Coins",
        imageUrl: monkey,
        link: "#",
      },
      {
        title: "Play and Win 22000 Coins",
        category: "BUSINESS",
        entry: "50 Coins",
        imageUrl: monkey,
        link: "#",
      },
      {
        title: "Play and Win 22000 Coins",
        category: "BUSINESS",
        entry: "50 Coins",
        imageUrl: monkey,
        link: "#",
      },
    {
      title: "Play and Win 22000 Coins",
      category: "BUSINESS",
      entry: "50 Coins",
      imageUrl: monkey,
      link: "#",
    },
    {
      title: "Play and Win 22000 Coins",
      category: "BUSINESS",
      entry: "50 Coins",
      imageUrl: monkey,
      link: "#",
    },
    {
      title: "Play and Win 22000 Coins",
      category: "BUSINESS",
      entry: "50 Coins",
      imageUrl: monkey,
      link: "#",
    },
    {
      title: "Play and Win 22000 Coins",
      category: "BUSINESS",
      entry: "50 Coins",
      imageUrl: monkey,
      link: "#",
    },
    {
      title: "Play and Win 22000 Coins",
      category: "BUSINESS",
      entry: "50 Coins",
      imageUrl: monkey,
      link: "#",
    },
  ];
  return (
    <div className="box-c">
        
      <div className="search_wrapper">
        <div className="search_searchHeader d-flex">
          <div className="search_back">
            <img
              src="https://images.atmequiz.com/img/back_arrow.svg"
              style={{ height: "30px", width: "30px", color: "transparent" }}
            ></img>
          </div>
          <div className="search_input">
            <input
              type="text"
              placeholder="Search"
              className="search_input_1"
              name="searchTerm"
            />
            <img
              src="https://images.atmequiz.com/img/close.svg"
              className="close"
              style={{ width: "14px", height: "14px" }}
            />
          </div>
        </div>
      </div>

      <div className="search_category" style={{ overflowX: "hidden" }}>
        <ul className="ull">
          {searchCategories.map((category, index) => (
            <li className="l"key={index}>
              <a href={category.link}>
                <div className="search__box">
                  <img
                    src={category.imageUrl}
                    style={{ width: "48px", height: "48px" }}
                    alt={category.name}
                  />
                </div>
                <span className="c">{category.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="serach_gameList">
        <div className="search_listingHeader">
          <h1 className="h">Quiz List</h1>
          <p className="pa">78 quizzes explore your favourite</p>
        </div>
        <div className="search_listBody">
          <ul className="uli">
            {searchGameLists.map((game, index) => (
              <li key={index}>
                <a className="aa" href={game.link}>
                  <div className="search_box">
                    <img
                      src={game.imageUrl}
                      style={{ height: "40px", width: "40px" }}
                      alt={game.title}
                    />
                  </div>
                  <div className="search_quizTxt">
                    <h2 className="hh">
                      {game.title}
                    </h2>
                    <p className="pp">
                      {game.category}, Entry: {game.entry}
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
