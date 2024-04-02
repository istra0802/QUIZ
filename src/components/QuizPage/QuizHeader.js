import React, { useState, useEffect } from "react";

export default function QuizHeader({ disabledFreeze, handleTimeFreezeClick }) {
  const initialSeconds = 60;
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let interval;
    if (!disabledFreeze) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            return initialSeconds;
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [initialSeconds, disabledFreeze]);

  const dashLength = (( seconds) / initialSeconds) * 283;

  return (
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
                <g className="timer-circle">
                  <circle
                    className="timer-path"
                    cx="50"
                    cy="50"
                    r="45"
                  ></circle>
                  <path
                    id="base-timer-path-remaining"
                    strokeDasharray={`${dashLength} 283`}
                    className="timer-remaining"
                    d=" M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0 "
                  ></path>
                </g>
              </svg>
              <span className="timer-label">
                <span className="timer-inner">{seconds}</span>
                <div className="time-second "></div>
              </span>
            </div>
          </div>
        </div>
        <div className="quiz-card-question-incorrect">0</div>
      </div>
    </div>
  );
}
