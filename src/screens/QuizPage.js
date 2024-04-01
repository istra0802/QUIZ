import React, { useEffect, useState } from "react";
import "../scss/QuizPage.scss";
import coin from "../images/coin-icon.jpg";
import { Timer } from "../components/Timer";
import { contestQuizQuestion } from "../services";
import { useNavigate } from "react-router";

export default function QuizPage() {
  const [showLifeline, setShowLifeline] = useState(false);
  const [questionSet, setQuestionSet] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedQue, setSelectedQun] = useState({});
  console.log(page, " 0000000000000000000000000000 ");
  const [buttonStates, setButtonStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [clicked, setClicked] = useState(false);

  function paginate(array, page_size, page_number) {
    console.log(
      "++++++",
      (page_number - 1) * page_size,
      page_number * page_size
    );
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  const navigate = useNavigate();

  const handleButtonClick = (buttonIndex) => {
    setDisabledButtons(true);
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonIndex]: true,
    }));
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setPage((prevPage) => prevPage + 1);
        setButtonStates({
          1: false,
          2: false,
          3: false,
          4: false,
        });
        setDisabledButtons(false);
        setClicked(false);
      }, 1000);
    }
  }, [clicked]);

  const toggleLifeline = () => {
    setShowLifeline(!showLifeline);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await contestQuizQuestion();
        setQuestionSet(data.questionSet.questionSet);
        setSelectedQun(data.questionSet.questionSet[0]);
        console.log(
          data.questionSet.questionSet,
          " ----------------------------------------- "
        );
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const newQuestionSet = paginate(questionSet, 1, page);
    console.log(newQuestionSet, " ------------------------ ");
    // if (newQuestionSet.length > 0) {
    setQuestionSet(newQuestionSet);
    // } else {
    //   // Handle end of questions
    // }
  }, [page]);
  console.log("questionSet[0]?.answerOptions", questionSet);
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
          <img src={coin} alt="/home" className="coin-image"></img>
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
                    className="timer-svg"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="timer_baseTimer__circle__1YodV">
                      <circle
                        className="timer_baseTimer__pathElapsed__D6lCz"
                        cx="50"
                        cy="50"
                        r="45"
                      ></circle>
                      <path
                        id="base-timer-path-remaining"
                        stroke-dasharray="189 283"
                        className="timer_baseTimer__pathRemaining__PkIN0 timer_green__SVzgO"
                        d=" M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0 "
                      ></path>
                    </g>
                  </svg>
                  <span className="timer-label">
                    <span className="timer-inner">
                      <Timer initialSeconds={60} />
                    </span>
                    <div className="time-second "></div>
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
            <h3 className="que">{selectedQue?.question}</h3>
            <ul className="quiz-answer-list">
              {selectedQue?.answerOptions?.map((option, index) => (
                <li className="quiz-answers" key={index}>
                  <button
                    className={`quiz-button ${
                      buttonStates[index + 1]
                        ? option?.isCorrectAnswer
                          ? "quiz-answer-correct"
                          : "slide quiz-answer-incorrect"
                        : ""
                    }`}
                    onClick={() => handleButtonClick(index + 1)}
                    disabled={disabledButtons}
                  >
                    {option.answer}
                  </button>
                </li>
              ))}
            </ul>

            <div
              className="lifeline"
              style={{ display: showLifeline ? "flex" : "none" }}
            >
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
            {showLifeline ? (
              <div
                type="button"
                className="quiz-close"
                onClick={toggleLifeline}
              >
                Close
              </div>
            ) : (
              <div
                type="button"
                className="quiz-close"
                onClick={toggleLifeline}
              >
                Use LifeLine
              </div>
            )}
          </div>
        </div>

        <div className="quiz-footer">
          <h4 className="quiz-h">
            Your Score :{" "}
            <span style={{ color: "white", fontWeight: "700" }}>0</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
