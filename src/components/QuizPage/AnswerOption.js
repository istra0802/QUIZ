// AnswerOption.js
import React from "react";

export default function AnswerOption({ option, index, handleButtonClick, disabledButtons, buttonStates }) {
  return (
    <li className="quiz-answers">
      <button
        className={`quiz-button ${
          buttonStates[index + 1]
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
