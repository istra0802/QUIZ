import React from "react";

export default function AnswerOption({
  option,
  index,
  handleButtonClick,
  disabledButtons,
  buttonStates,
  disabledFlip,
  disabledFifty,
  incorrectOptions,

}) {

  // console.log(disabledFifty, ' ----------------- ')

  const isIncorrect = !option.isCorrectAnswer;

  console.log(incorrectOptions, " ---------------------------------- ")
  const firstTwoIncorrectOptions = incorrectOptions.slice(0, 2);
  const isInFirstTwoIncorrect = firstTwoIncorrectOptions.includes(option);
  
  
  return (
    <li className={`quiz-answers`}>
      <button
        className={`quiz-button  
        ${disabledFlip ? 'quiz-animation' : ''}
        ${disabledFifty && isInFirstTwoIncorrect ? 'quizCard-fifty50' : ''}
        ${
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
