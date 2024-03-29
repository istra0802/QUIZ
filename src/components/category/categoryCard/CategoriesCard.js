import React from "react";
import "../../../scss/CategoriesCard.scss";
import cricket from "../../../images/cricket1.png";
import coin from "../../../images/coin-icon1.png";
import { Link } from "react-router-dom";

const cardData = [
  {
    id: 1,
    game: "Cricket",
    prize: "220000",
    announcement: "Winner announcement @ 1:30 pm",
    entry: 50,
    usersPlaying: 6250,
  },
  {
    id: 2,
    game: "INDIA",
    prize: "22000",
    announcement: "Winner announcement @ 1:30 pm",
    entry: 50,
    usersPlaying: 5820,
  },
  {
    id: 3,
    game: "BUSINESS",
    prize: "22000",
    announcement: "Winner announcement @ 1:30 pm",
    entry: 50,
    usersPlaying: 5739,
  },
  {
    id: 4,
    game: "BIRDS AND ANIMALS",
    prize: "22000",
    announcement: "Winner announcement @ 1:30 pm",
    entry: 50,
    usersPlaying: 5804,
  },
  {
    id: 5,
    game: "BOLLYWOOD",
    prize: "22000",
    announcement: "Winner announcement @ 1:30 pm",
    entry: 50,
    usersPlaying: 5581,
  },
  {
    id: 6,
    game: "10+2",
    prize: "22000",
    announcement: "Winner announcement @ 1:30 pm",
    entry: 50,
    usersPlaying: 5095,
  },
];

export default function CategoryCard() {
  return (
    <div>
      <div className="maindiv">
        {cardData.map((card) => (
          <div key={card.id} className="mainbox">
            <div className="cardcontent">
              <div className="imgclass">
                <img src={cricket} style={{ height: "60px", width: "60px" }} />
              </div>
              <div className="gametitle">
                <span className="text">
                  <span style={{ textAlign: "left", marginRight: "150px" }}>
                    {card.game}
                  </span>
                  <h3 className="head">
                    Play and Win {card.prize}
                    <img
                      src={coin}
                      style={{
                        height: "19px",
                        width: "19px",
                        marginLeft: "5px",
                      }}
                    />
                  </h3>
                </span>
                <p className="text2" style={{ marginTop: "-15px" }}>
                  {card.announcement}
                </p>
              </div>
              <span className="textlive">live</span>
            </div>

            <div className="card-footer">
              <p className="color">
                <span>
                  <span className="text3">Entry: {card.entry}</span>
                  <img
                    src={coin}
                    className="imgstyle"
                    style={{
                      height: "16px",
                      width: "16px",
                      color: "transparent",
                    }}
                  />
                  <strong className="color1">{card.usersPlaying}</strong>
                  Users Playing
                </span>
              </p>
              <Link className="btn-style" to="playbtn" >Play</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
