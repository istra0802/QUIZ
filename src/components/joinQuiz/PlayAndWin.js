import React from "react";
import cricket from "../../images/cricket1.png";
import coin from "../../images/coin-icon1.png";
import "../../scss/PlayAndWin.scss";


export default function PlayAndWin() {
  return (
    <div className="box-c" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="box">
        <div className="imagediv">
          <div className="imageee imageeeanimation">
            <div className="imgstyle">
              <img src={cricket} style={{ height: "60px", width: "60px" }} />
            </div>
            <h3 className="spantext" style={{ color: "#fff" }}>
              INDIA
            </h3>
          </div>
        </div>
        <h2 style={{ fontSize: "20px", color: "#fff" }}>
          Play and Win 220000
          <img src={coin} style={{ height: "19px", width: "19px" }} />
        </h2>
        <p className="ptext" style={{ color: "#b6b3ff" }}>
          You’ve got 60 seconds to answer all questions. Answer as many
          questions as you can. Entry fee will be 50
          <span className="spanimg">
            <img src={coin} style={{ width: "16px", height: "16px" }} />
          </span>
        </p>
        <p className="mb-16 cstmtext" style={{ color: "#b6b3ff" }}>
          join and save the coins you win! Its free & safe!
        </p>
      </div>

      <a
        className="playNow_btn playNow_animated playNow_shine"
        style={{ textDecoration: "none" }}
        href="/login"
      >
        Join Quiz
      </a>
      <button className="playNow_btn playNow_animated playNow_blue">
        Play as Guest
      </button>

      <div className="playNow_twobtn">
        <button className="playNow_btn1 playNow_animated playNow_blue">
          View Prize
        </button>
        <a
          href="/contest-rules"
          className="playNow_btn2 playNow_animated playNow_blue"
        >
          Contest Rules
        </a>
      </div>

      <div className="footer_madeWithLove">
        Made with
        <img
          src="	https://images.atmequiz.com/heart-icon.svg"
          style={{ height: "11px", width: "12px" }}
        />
        in India
        <img
          src="https://images.atmequiz.com/india-flag-icon.svg"
          style={{ height: "9px", width: "14px" }}
        />
      </div>
    </div>
  );
}
