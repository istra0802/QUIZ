import HomePage from "./screens/HomePage";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import backgroundImage from "../src/images/bg_quiz.jpg";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import "./App.css";

import PlayNow from "./screens/PlayNow";
import LoginPage from "./components/Login/LoginPage";
import QuickStartPage from "./components/QuickStartPage.js/QuickStartPage";
import QuizPage from "./screens/QuizPage";
import CustomOffcanvas from "./components/Header/Offcanvas";
import Example from "./screens/Example";

function App() {
  return (
    <div>
     {/* <Routes>
          <Route exact path="/" element={<HomePage/>} />
          
        </Routes> */}
        <HomePage/>
      {/* <QuickStartPage/> */}
      {/* <PlayNow /> */}
      {/* <LoginPage/> */}
      {/* <QuizPage/> */}
      {/* <Example /> */}
    </div>
  );
}

export default App;

//ui start
