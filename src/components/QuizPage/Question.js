// Question.js
import React from "react";

export default function Question({ question }) {
  return (
    <div className="quiz-option">
      <div className="quiz-que-number">
        Question <span className="quiz-lite">1</span>/
        <span className="quiz-bold">20</span>
      </div>
      <h3 className="que">{question}</h3>
    </div>
  );
}
