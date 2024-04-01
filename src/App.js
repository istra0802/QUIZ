import React from "react";
import HomePage from "./screens/HomePage";
import JoinQuiz from "./screens/JoinQuiz";
import SearchPage from "./screens/SearchPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../src/components/Login/LoginPage"
import backgroundImage from "../src/images/bg_quiz.jpg"
import PlayNow from "./screens/PlayNow";
import QuickStartPage from "./screens/QuickStartPage";
import QuizPage from "./screens/QuizPage";
import ContestRulePage from "./screens/ContestRulePage";
import CoinHistory from "./screens/CoinHistory";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.04,
          zIndex: 1,
        }}
      ></div>
      <div className="home">
        <Header/>
        <Routes>
          <Route exact path="/" element={<QuickStartPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/PlayNow" element={<PlayNow />} />
          <Route exact path="/rules" element={<ContestRulePage />} />
          <Route exact path="/Quiz" element={<QuizPage />} />
          <Route exact path="/coinHistory" element={<CoinHistory />} />
          <Route exact path="/home/playbtn" element={<JoinQuiz />} />
          <Route exact path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
