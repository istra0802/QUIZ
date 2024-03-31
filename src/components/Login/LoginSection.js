import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "../../scss/LoginPage.scss";

function LoginSection() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginClick = () => {
    // Navigate to PlayNow component when login button is clicked
    navigate("/PlayNow");
  };

  return (
    <div className="login-screen">
      <h3 className="login-text" style={{ fontWeight: "700" }}>
        Login now & Play Quiz
      </h3>
      <p className="login-play-text"> Play Quizzes and win Coins</p>
      <button className="login-google-button" onClick={handleLoginClick}> {/* Add onClick handler */}
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
        Don’t have an account? <span className="login-signup"> Sign Up</span>
      </p>
    </div>
  );
}

export default LoginSection;
