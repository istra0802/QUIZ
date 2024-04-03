import React, { useState } from "react";

export default function AnswerOption({
  option,
  index,
  handleButtonClick,
  disabledButtons,
  buttonStates,
  disabledFlip,
  disabledFifty,
  incorrectOptions,
  // disabledAudience,
  usedLifeLine,
}) {

  const firstTwoIncorrectOptions = incorrectOptions.slice(0, 2);
  // const allIncorrectOptions = incorrectOptions.includes(option);
  const isInFirstTwoIncorrect = firstTwoIncorrectOptions.includes(option);

  return (
    <li className={`quiz-answers`}>
      <button
        className={`quiz-button  
        ${ disabledFlip ? "quiz-animation" : ""}

        ${ disabledFifty && isInFirstTwoIncorrect ? "quizCard-fifty50" : "" }
     
        ${
          buttonStates[index + 1] && usedLifeLine
            ? option.isCorrectAnswer
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
  );
}
