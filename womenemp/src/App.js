import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Admin from "./Components/Admin"
import SignUp from "./Components/SignUp";
import Trainees from "./Components/Trainees";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourse from "./Components/AddCourse";
import UpdateCourse from "./Components/UpdateCourse";
import SearchCourseById from "./Components/SearchCourseById";
import Feedback from "./Components/AddFeedback";
import ViewAllFeedback from "./Components/ViewAllFeedback";

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
          <Route path="/admin/addcourse" element={<AddCourse />} />
          <Route path="/admin/updatecourse" element={<UpdateCourse />} />
          <Route path="/admin/searchcoursebyid" element={<SearchCourseById/>} />
          <Route path="/feedback" element= {<Feedback />} />
          <Route path="/admin/viewallfeedback" element= {<ViewAllFeedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
