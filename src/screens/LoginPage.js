import React from "react";
import "../scss/LoginPage.scss";

export default function LoginPage() {
  return (
    <>
      <div className="login-screen">
        <h3 className="login-text" style={{ fontWeight: "700" }}>
          Login now & Play Quiz
        </h3>
        <p className="login-play-text"> Play Quizzes and win Coins</p>
        <button className="login-google-button">
          <span className="login-google-text">
            <img
              alt="coin"
              src="https://images.atmequiz.com/img/googleLogin.svg"
              style={{ height: "36px", width: "36px", color: "transparent" }}
            />
            Login
          </span>
        </button>
        <p className="login-play-text">
          Don’t have an account?
          <span className="login-signup"> Sign Up</span>
        </p>
      </div>
      <div className="list-section">
        <h2 className="list-heading" style={{ fontWeight: "500" }}>Play Quiz and Win Coins!</h2>
        <span className="list-heading-underline "></span>
        <div className="list-point">
        Get coins on the completion of each quiz.
        </div>
      </div>
    </>
  );
}
