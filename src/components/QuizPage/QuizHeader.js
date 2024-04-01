// QuizHeader.js
import React from "react";

export default function QuizHeader() {
  return (
    <div className="quiz-header">
      <div className="quiz-card-que-timer">
        <div className="quiz-card-question-correct ">0</div>
        {/* Timer component can be included here */}
        <div className="quiz-card-question-incorrect">0</div>
      </div>
    </div>
  );
}
