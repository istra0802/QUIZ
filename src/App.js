// import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./screens/HomePage";
import JoinQuiz from "./screens/JoinQuiz";
import SearchPage from "./screens/SearchPage";
import YourScore from "./screens/YourScore";
// import HomePage from "./screens/HomePage";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import backgroundImage from "../src/images/bg_quiz.jpg";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import "./App.css";

import PlayNow from "./screens/PlayNow";
import LoginPage from "./components/Login/LoginPage";
import QuickStartPage from "./screens/QuickStartPage";
import QuizPage from "./screens/QuizPage";
import CustomOffcanvas from "./components/Header/Offcanvas";
import ContestRulePage from "./screens/ContestRulePage";
import CoinHistory from "./screens/CoinHistory";
// import Example from "./screens/Example";

function App() {
  return (
    <div>
     <Routes>
          <Route exact path="/" element={<QuickStartPage/>} />
          <Route exact path="/home" element={<HomePage/>} />
          <Route exact path="/PlayNow" element={<PlayNow/>} />
          <Route exact path="/rules" element={<ContestRulePage/>} />
          <Route exact path="/Quiz" element={<QuizPage/>} />
          <Route exact path="/coinHistory" element={<CoinHistory/>}/>
        </Routes>
        {/* <HomePage/> */}
      {/* <QuickStartPage/> */}
      {/* <PlayNow /> */}
      {/* <LoginPage/> */}
      {/* <QuizPage/> */}
      {/* <Example /> */}
    </div>
    <div className="App">
      {/* <YourScore/> */}
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/playbtn" element={<JoinQuiz/>} />
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>     
    </div>
  );
}

export default App;
