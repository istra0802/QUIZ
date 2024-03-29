import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./screens/HomePage";
import JoinQuiz from "./screens/JoinQuiz";
import SearchPage from "./screens/SearchPage";

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/playbtn" element={<JoinQuiz/>} />
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>     
    
    </div>
  );
}

export default App;
