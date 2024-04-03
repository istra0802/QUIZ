import React from "react";
import coin from "../images/coin-icon1.png";
import WinTrophy from "../components/yourScore/WinTrophy";
import "../scss/YourScore.scss"
import Header from "../components/Header/Header";

export default function YourScore() {
  return (
    <>
    
      <Header />
    <div className="box-c">
      <div className="info">
        <div className="info_Content">
          <h3 className="txttt">BANK PO EXAM</h3>
          <h2 className="subtxt" style={{ color: "#fff" }}>
            Play and Win 220000
            <img alt="" src={coin} style={{ height: "19px", width: "19px" }} />
          </h2>
        </div>
      </div>

      <div className="timeover">
        <div className="timeover_card">
          <div className="lottie_winningCup">
            <WinTrophy />
          </div>
          <div>
            <h1 className="fntsize">Time is over!Well Played</h1>
            <div className="tover">
              Your Score is :<span className="score">-95</span>
            </div>
            <p className="tover_txt" style={{marginBottom:"0px"}}>Winner announcement will be @ 7:00 pm</p>
            <p className="tover_txt" style={{marginBottom:"0px"}}>
              Based on your current score, you can win{" "}
              <span>
                <strong>1500</strong>
                <span className="animationimg">
                  <img
                    src={coin}
                    alt=""
                    className="coinspace"
                    style={{ height: "19px", width: "19px" }}
                  />
                </span>
              </span>
            </p>
          </div>

          <div className="rank">
            <ul className="uls" style={{marginLeft:"0px"}}>
              <li className="first">
                <h2 className="digit" style={{marginBottom:"0px"}}>2</h2>
                <p className="belowtext" style={{marginBottom:"0px"}}>Current Rank</p>
              </li>
              <li className="first">
                <h2 className="digit" style={{marginBottom:"0px"}}>2</h2>
                <p className="belowtext" style={{marginBottom:"0px"}}>Current Rank</p>
              </li>
              <li className="first">
                <h2 className="digit" style={{marginBottom:"0px"}}>2</h2>
                <p className="belowtext" style={{marginBottom:"0px"}}>Current Rank</p>
              </li>
              <li className="first last-li">
                <h2 className="digit" style={{marginBottom:"0px"}}>2</h2>
                <p className="belowtext" style={{marginBottom:"0px"}}>Current Rank</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="btnss">
        <a className="btnstyling playNowanimate playnowshine" href="#">Play Quiz</a>
        <a className="btnstyling playNowanimate playnowblue playnowshine" href="#">Play Again</a>
      </div>
    </div>
    </>
  );
}
