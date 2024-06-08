
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectQuiz from "./Components/selectQuiz";
import Quize from "./Components/quize";
import Registration from "./Components/Login/registration";
import ShowMarks from "./Components/showMarks";
import LeaderBoard from "./Components/leaderboard";
import Documentation from "./Components/documentation";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/selectQuiz" element={<SelectQuiz />} />
            <Route path="/quize" element={<Quize />} />
            <Route path="/ShowMarks" element={<ShowMarks />} />
            <Route path="/leaderBoard" element={<LeaderBoard />} />
            <Route path="/documentation" element={<Documentation />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
