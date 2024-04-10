// QuizFooter.js
import React from "react";
import "../../scss/QuizPage.scss"

export default function QuizFooter() {
  let storedCorrectAnswers = localStorage.getItem("correctAnswerCount");
  return (
    <div className="quiz-footer">
      <h4 className="quiz-h">
        Your Score :{" "}
        <span style={{ color: "white", fontWeight: "700" }}>{storedCorrectAnswers}</span>
      </h4>
    </div>
  );
}
