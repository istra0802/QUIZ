import React from "react";
import "../scss/QuizPage.scss";
import coin from "../images/coin-icon.jpg";
import AnswerList from "../components/QuickStartPage/AnswerList";

export default function QuizPage() {
  return (
    <div className="quiz-container">
      <audio className="quiz-audio" autoPlay>
        <source src="https://images.atmequiz.com/audio/Quiz.wav" />
      </audio>

      <div className="info-sound">
        <div className="sound"></div>
        <div className="ssc">
          <h3 className="ssc-heading"> 10+2 </h3>
        </div>
        <h2 style={{ fontSize: "22px" }}>
          Play and Win 220000
          <img src={coin} alt="/" className="coin-image"></img>
        </h2>
      </div>

      <div className="quiz-card">
        <div className="quiz-header">
          <div className="quiz-card-que-timer">
            <div className="quiz-card-question-correct ">0</div>
            <div>
              <div>
                <div className="timer">
                  <svg
                    class="timer-svg"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g class="timer_baseTimer__circle__1YodV">
                      <circle
                        class="timer_baseTimer__pathElapsed__D6lCz"
                        cx="50"
                        cy="50"
                        r="45"
                      ></circle>
                      <path
                        id="base-timer-path-remaining"
                        stroke-dasharray="189 283"
                        class="timer_baseTimer__pathRemaining__PkIN0 timer_green__SVzgO"
                        d=" M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0 "
                      ></path>
                    </g>
                  </svg>
                  <span className="timer-label">
                    <span className="timer-inner"></span>
                    <span className="time-second"></span>
                  </span>
                </div>
              </div>

              <div className="quiz-card-question-incorrect">0</div>
            </div>
          </div>
        </div>
        <div className="quiz-body">
          <div className="quiz-option">
            <div className="quiz-que-number">
              Question
              <span className="quiz-lite">1</span>/
              <span className="quiz-bold">20</span>
            </div>
            <h3 className="que">
              Shavkat Mirziyoyev has been elected as the President of which
              country for the second term?
            </h3>
            <AnswerList />
            {/* <div className="quiz-lifeline">Life Line</div> */}

            <div className="lifeline">
              <ul className="lifeline-wrapper" style={{ display: "flex" }}>
                <div>
                  <ul className="lifeline-ul">
                    <li className="lifeline-li">
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
                    <li className="lifeline-li">
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
                    <li className="lifeline-li">
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
                    <li className="lifeline-li">
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
            <div
              type="button"
              className="quiz-close"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              CLOSE
            </div>
          </div>
        </div>

        <div className="quiz-footer">
          <h4 className="quiz-h">
            Your Score :{" "}
            <span style={{ color: "white", fontWeight: "700" }}>0</span>
          </h4>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        // aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
