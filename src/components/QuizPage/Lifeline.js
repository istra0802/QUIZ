import React from "react";
import "../../scss/QuizPage.scss";

export default function Lifeline({
  showLifeline,
  toggleLifeline,
  handleFiftyFiftyClick,
  handleFlipQuestionClick,
  handleTimeFreezeClick,
  handleAudienceClick,
  disabledFreeze,
  disabledFifty, 
  disabledFlip,
  disabledAudience,
  disabledFreezePer,
  disabledFiftyPer,
}) {
  return (
    <div
      className= "lifeline "
      style={{ display: showLifeline ? "flex" : "none" }}
      // onClick={!disabled ? toggleLifeline : undefined}
    >
      <ul className="lifeline-wrapper" style={{ display: "flex" }}>
        <div>
          <ul className="lifeline-ul">
            <li className= {`lifeline-li ${ disabledFiftyPer ? "lifeline-disabled" : ""}`} onClick={handleFiftyFiftyClick}>
              <div className="lifeline-list">
                <img
                  alt="Audience Poll"
                  title="Audience Poll"
                  fetchpriority="high"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  src="https://images.atmequiz.com/img/fifty-50.svg"
                  style={{ color: "transparent" }}
                />
              </div>
              <span style={{ fontSize: "12px" }}></span>
              <span style={{ fontSize: "11px" }}> 50:50</span>
            </li>
            <li className={`lifeline-li ${disabledAudience ? "lifeline-disabled" : ""}`} onClick={handleAudienceClick}>
              <div className="lifeline-list">
                <img
                  alt="Audience Poll"
                  title="Audience Poll"
                  fetchpriority="high"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  src="https://images.atmequiz.com/img/audience-poll.svg"
                  style={{ color: "transparent" }}
                />
              </div>
              <span style={{ fontSize: "12px" }}></span>
              <span style={{ fontSize: "11px" }}>Audience Poll</span>
            </li>
            <li className={`lifeline-li ${disabledFreezePer ? "lifeline-disabled" : ""}`} onClick={handleTimeFreezeClick}>
              <div className="lifeline-list">
                <img
                  alt="Audience Poll"
                  title="Audience Poll"
                  fetchpriority="high"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  src="https://images.atmequiz.com/img/freeze-timer.svg"
                  style={{ color: "transparent" }}
                />
              </div>
              <span style={{ fontSize: "12px" }}></span>
              <span style={{ fontSize: "11px" }}>Freeze Timer</span>
            </li>
            <li className= {`lifeline-li ${disabledFlip ? "lifeline-disabled" : ""}`} onClick={handleFlipQuestionClick}>
              <div className="lifeline-list">
                <img
                  alt="Audience Poll"
                  title="Audience Poll"
                  fetchpriority="high"
                  width="40"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  src="https://images.atmequiz.com/img/flip-question.svg"
                  style={{ color: "transparent" }}
                />
              </div>
              <span style={{ fontSize: "12px" }}></span>
              <span style={{ fontSize: "11px" }}>Flip Question</span>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
}
