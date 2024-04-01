import React, { useState, useEffect } from "react";
import "../scss/QuickStartPage.scss";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Question from "../components/QuickStartPage/Question";
import QuizHeader from "../components/QuickStartPage/QuickHeader";
import GoogleAd from "../components/GoogleAd";
import ListSection from "../components/Login/ListSection";
import initialQuestions from "../data/initialQuestion.json";

export default function QuickStartPage() {
  const [page, setPage] = useState(1);
  const [buttonStates, setButtonStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  }); // State to track the active state of each button
  const [disabledButtons, setDisabledButtons] = useState(false); // State to disable buttons after click
  const [clicked, setClicked] = useState(false); // State to track if any button is clicked

  function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  const navigate = useNavigate();

  const handleButtonClick = (buttonIndex) => {
    // Disable buttons after click
    setDisabledButtons(true);

    // Set the clicked button state
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonIndex]: true,
    }));

    // Set clicked state to true
    setClicked(true);
  };

  useEffect(() => {
    // Check if any button is clicked
    if (clicked) {
      // Move to the next set of questions
      // Reset button states and enable buttons for the next set of questions
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

        if(page === 2) {
            navigate("/home")
        }
      }, 1000); // Reset after 1 second
    }
  }, [clicked]);

  // Get the current set of questions based on the page state
  const questions = paginate(initialQuestions.Question, 1, page);

  return (
    <div className="page-container">
      <GoogleAd />
      <QuizHeader />

      <div>
        <div className="quiz-card-body">
          <Question queNumber={page} />
          <h3 className="quiz-que">{questions[0].question}</h3>

          <ul className="quiz-answer-list">
            {questions[0].answerOptions.map((option, index) => (
              <li className="quiz-answers" key={index}>
                <button
                  className={`quiz-button ${
                    buttonStates[index + 1] ? 
                    (option.isCorrectAnswer ? "quiz-answer-correct" : "slide quiz-answer-incorrect") : ""
                  }`}
                  onClick={() => handleButtonClick(index + 1)}
                  disabled={disabledButtons}
                >
                  {option.answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="fun-fact">
        <h4
          className="fact-heading"
          style={{ fontSize: "16px", fontFamily: "system-ui" }}
        >
          #Fun Fact
        </h4>
        <p className="fact" style={{ paddingBottom: "0px" }}>
          The first match was played between Royal Challengers Bangalore (RCB)
          and KKR in 2008.
        </p>
      </div>
      <ListSection />
    </div>
  );
}
