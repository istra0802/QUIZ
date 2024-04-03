import React from 'react'
import "../../scss/QuizPage.scss"
import coin from "../../images/coin-icon.jpg";

export default function QuizCategoryHeading() {
  return (
    <div>
      <div className="info-sound">
        <div className="sound"></div>
        <div className="ssc">
          <h3 className="ssc-heading"> 10+2 </h3>
        </div>
        <h2 style={{ fontSize: "22px" }}>
          Play and Win 220000
          <img src={coin} alt="/home" className="coin-image"></img>
        </h2>
      </div>
    </div>
  )
}
