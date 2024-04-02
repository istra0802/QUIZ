// QuizPage.js
import React, { useEffect, useState } from "react";
// import "../scss/QuizPage.scss";
import coin from "../../images/coin-icon.jpg";
// import { Timer } from "../components/Timer";
import { contestQuizQuestion } from "../../services";
import QuizHeader from "./QuizHeader";
import Question from "./Question";
import AnswerOption from "./AnswerOption";
import Lifeline from "./Lifeline";
import QuizFooter from "./QuizFooter";
import "../../scss/QuizPage.scss"

export default function QuizPage() {
  const [showLifeline, setShowLifeline] = useState(false);
  const [questionSet, setQuestionSet] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedQue, setSelectedQue] = useState({});
  const [buttonStates, setButtonStates] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [chancesLeft, setChancesLeft] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await contestQuizQuestion();
        setQuestionSet(data.questionSet.questionSet);
        setSelectedQue(data.questionSet.questionSet[0]);
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
    const selectedQuestionIndex = (page - 1) % questionSet.length;
    setSelectedQue(questionSet[selectedQuestionIndex]);
  }, [page, questionSet]);

  const handleButtonClick = (buttonIndex) => {
    setDisabledButtons(true);
    setButtonStates((prevState) => ({
      ...prevState,
      [buttonIndex]: true,
    }));
    setClicked(true);
    if (chancesLeft > 0) {
      setChancesLeft(chancesLeft - 1);
    }
  };

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        if (chancesLeft === 0) {
          setPage((prevPage) => prevPage + 1);
        }
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
    if (showLifeline) {
      // Reset chances if lifeline is toggled off
      setChancesLeft(0);
    }
  };

  const handleFiftyFiftyClick = () => {
    setChancesLeft(2); // Set chances to 2 when 50:50 is clicked
    // toggleLifeline();
  };

  const handleFlipQuestionClick = () => {
    // Logic to flip the question
  };

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
        <QuizHeader />
        <Question question={selectedQue?.question} />
        <ul className="quiz-answer-list">
          {selectedQue?.answerOptions?.map((option, index) => (
            <AnswerOption
              key={index}
              option={option}
              index={index}
              handleButtonClick={handleButtonClick}
              disabledButtons={disabledButtons}
              buttonStates={buttonStates}
            />
          ))}
        </ul>

        <Lifeline
          showLifeline={showLifeline}
          toggleLifeline={toggleLifeline}
          handleFiftyFiftyClick={handleFiftyFiftyClick}
          handleFlipQuestionClick={handleFlipQuestionClick}
        />

        <QuizFooter />
      </div>
    </div>
  );
}
