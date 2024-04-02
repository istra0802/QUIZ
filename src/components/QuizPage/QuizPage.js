import React, { useEffect, useState } from "react";
import { contestQuizQuestion } from "../../services";
import QuizHeader from "./QuizHeader";
import Question from "./Question";
import AnswerOption from "./AnswerOption";
import Lifeline from "./Lifeline";
import QuizFooter from "./QuizFooter";
import "../../scss/QuizPage.scss";
import QuizCategoryHeading from "./QuizCategoryHeading";
import QuizPageAudio from "./QuizPageAudio";
import LifelineToggle from "./LifelineToggle";

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
  const [disabledFifty, setDisabledFifty] = useState(false);
  const [disabledFiftyPer, setDisabledFiftyPer] = useState(false);
  const [disabledAudience, setDisabledAudience] = useState(false);
  const [disabledFreeze, setDisabledFreeze] = useState(false);
  const [disabledFreezePer, setDisabledFreezePer] = useState(false);
  const [disabledFlip, setDisabledFlip] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await contestQuizQuestion();
        setQuestionSet(data.questionSet.questionSet);
        setSelectedQue(data.questionSet.questionSet[0]);
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
      setClicked(true);
    }, 1000);
    if (chancesLeft > 0) {
      setChancesLeft(chancesLeft - 1);
    }
    setDisabledFreeze(false);
    setDisabledFifty(false);
  };

  const toggleLifeline = () => {
    setShowLifeline(!showLifeline);
    if (showLifeline) {
      setChancesLeft(0);
    }
  };

  const incorrectOptions = selectedQue?.answerOptions?.filter((opt) => !opt.isCorrectAnswer);

  const handleFiftyFiftyClick = () => {
    setDisabledFiftyPer(true);
    setDisabledFifty(true);
  };

  const handleFlipQuestionClick = () => {
    setPage((prevPage) => prevPage + 1);
    setDisabledFlip(true);
  };

  const handleTimeFreezeClick = () => {
    setDisabledFreeze(true);
    setDisabledFreezePer(true);
  };

  const handleAudienceClick = () => {
    setDisabledAudience(true)
  }

  return (
    <div className="quiz-container">
      <QuizPageAudio />

      <QuizCategoryHeading />

      <div className="quiz-card">
        <QuizHeader
          disabledFreeze={disabledFreeze}
          handleTimeFreezeClick={handleTimeFreezeClick}
        />

        <div className="quiz-body">
          <div className="quiz-option">
            <Question question={selectedQue?.question} page={page} />
            <ul className="quiz-answer-list">
              {selectedQue?.answerOptions?.map((option, index) => (
                <AnswerOption
                  key={index}
                  option={option}
                  index={index}
                  handleButtonClick={handleButtonClick}
                  handleFlipQuestionClick={handleFlipQuestionClick}
                  handleFiftyFiftyClick={handleFiftyFiftyClick}
                  disabledFifty={disabledFifty}
                  disabledFiftyPer = {disabledFiftyPer}
                  disabledButtons={disabledButtons}
                  buttonStates={buttonStates}
                  disabledFlip={disabledFlip}
                  incorrectOptions = {incorrectOptions}
                />
              ))}
            </ul>

            <Lifeline
              showLifeline={showLifeline}
              toggleLifeline={toggleLifeline}
              handleFiftyFiftyClick={handleFiftyFiftyClick}
              handleFlipQuestionClick={handleFlipQuestionClick}
              handleTimeFreezeClick={handleTimeFreezeClick}
              handleAudienceClick = {handleAudienceClick}
              disabledFifty={disabledFifty}
              disabledFiftyPer = {disabledFiftyPer}
              disabledAudience={disabledAudience}
              disabledFreeze={disabledFreeze}
              disabledFlip={disabledFlip}
              disabledFreezePer = {disabledFreezePer}
            />
            {showLifeline ? (
              <LifelineToggle
                showLifeline={showLifeline}
                toggleLifeline={toggleLifeline}
              />
            ) : (
              <LifelineToggle
                showLifeline={showLifeline}
                toggleLifeline={toggleLifeline}
              />
            )}
          </div>
        </div>

        <QuizFooter />
      </div>
    </div>
  );
}
