import React, { useState } from "react";
import "../../scss/QuizPage.scss";
import coin from '../../images/coin-icon.jpg';
import "../../scss/LifelineOffcanvas.scss";

export default function Lifeline({
  showLifeline,
  handleFiftyFiftyClick,
  handleFlipQuestionClick,
  handleTimeFreezeClick,
  disabledFlip,
  disabledFreezePer,
  disabledFiftyPer,
}) {

  const [showReport, setShowReport] = useState(false);
  const toggleReport = () => {
    setShowReport(!showReport);
  };
  const handleReportClose = () => {
    setShowReport(false);
  };

  return (
    <div
      className="lifeline "
      style={{ display: showLifeline ? "flex" : "none" }}
    >
      <ul className="lifeline-wrapper" style={{ display: "flex" }}>
        <div>
          <ul className="lifeline-ul">
            <li
              className={`lifeline-li ${
                disabledFiftyPer ? "lifeline-disabled" : ""
              }`}
              onClick={() => {
                handleFiftyFiftyClick();
                toggleReport();
              }}
            >
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

            <li
              className={`lifeline-li ${
                disabledFreezePer ? "lifeline-disabled" : ""
              }`}
              onClick={handleTimeFreezeClick}
            >
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
            <li
              className={`lifeline-li ${
                disabledFlip ? "lifeline-disabled" : ""
              }`}
              onClick={handleFlipQuestionClick}
            >
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

      {showReport && (
        <div className="popup-inner">
          <div className="popup-wrapper">
            <div className="lifeline-icon">
              <img
                src="   https://images.atmequiz.com/img/fifty-50.svg"
                alt=""
                style={{ height: "36px", width: "36px" }}
              />
            </div>
            <a className="popup-close" onClick={handleReportClose}></a>
            <h2 className="h2text">Use 50:50 Lifeline</h2>
            <p className="ptexts">
              The 50-50 will be paused for 30 seconds to allow more time to
              answer the question.
            </p>
            <div className="popup-btns">
              <a className="popup-btn">Use for free</a>
              <span className="or">OR</span>
              <a className="popup-btn2 popup-blue">
                Use For 20
                <img
                alt=""
                  src={coin}
                  style={{ height: "16px", width: "16px", marginLeft: "6px" }}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
