import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import TraineeView from "./TraineeView";

function Trainees() {
  const [trainees, setTrainees] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8202/api/Trainee`)
      .then((data) => {
        setTrainees(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  //   console.log(trainees)
  return (
    <div>
        <div className="grid" id="traineeHead">
            <div>ID</div>
            <div>UserName</div>
            <div>Name</div>
            <div>Location</div>
            <div>Contact</div>
            <div>Email</div>
            <div>Family Info</div>
            <div>Aadhar No</div>
            <div>DOB</div>
            <div>Training Course</div>
            <div>Feedback</div>
        </div>
      {trainees &&
        trainees.map((trainee) => (
          <div key={trainee.traineeId} className='tile'>
            <TraineeView trainee={trainee} />
          </div>
        ))}
    </div>
  );
}

export default Trainees;
