// Lifeline.js
import React from "react";

export default function Lifeline({ showLifeline, toggleLifeline, handleFiftyFiftyClick, handleFlipQuestionClick }) {
  return (
    <div
      className="lifeline"
      style={{ display: showLifeline ? "flex" : "none" }}
    >
      <ul className="lifeline-wrapper" style={{ display: "flex" }}>
        <div>
          <ul className="lifeline-ul">
            <li className="lifeline-li" onClick={handleFiftyFiftyClick}>
              {/* Fifty-fifty lifeline button */}
            </li>
            <li className="lifeline-li" onClick={handleFlipQuestionClick}>
              {/* Flip question lifeline button */}
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
}
