import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Admin from "./Components/Admin"
import SignUp from "./Components/SignUp";
import Trainees from "./Components/Trainees";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element= {<Login />} />
          <Route path="/home" element= {<Home />} />
          <Route path="/admin" element= {<Admin />} />
          <Route path="/admin/trainees" element={<Trainees />} />
          <Route path="/signup" element= {<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
