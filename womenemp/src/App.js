import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Admin from "./Components/Admin"
import SignUp from "./Components/SignUp";
import Trainees from "./Components/Trainee/Trainees";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourse from "./Components/TrainingCourse/AddCourse";
import UpdateCourse from "./Components/TrainingCourse/UpdateCourse";
import Scheme from "./Components/Scheme/Scheme";
import SchemesList from "./Components/Scheme/SchemesList";
import TraineeById from "./Components/Trainee/TraineeById";
import Feedback from "./Components/Feedback/AddFeedback";
import ViewAllFeedback from "./Components/Feedback/ViewAllFeedback";
import TraineeUpdate from "./Components/Trainee/TraineeUpdate";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/profile" element={<TraineeById />} />
          <Route path="/home/profile/update" element={<TraineeUpdate />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/addscheme" element={<Scheme />} />
          <Route path="/admin/schemes" element={<SchemesList />} />
          <Route path="/admin/trainees" element={<Trainees />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin/addcourse" element={<AddCourse />} />
          <Route path="/admin/updatecourse" element={<UpdateCourse />} />
          <Route path="/feedback" element= {<Feedback />} />
          <Route path="/admin/viewallfeedback" element= {<ViewAllFeedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
