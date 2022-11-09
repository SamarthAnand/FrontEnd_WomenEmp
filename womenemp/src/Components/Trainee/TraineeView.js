import React from "react";

function TraineeView({ trainees }) {
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
      {trainees && trainees.map((trainee) => (
        <div className="grid" key={trainee.traineeId}>
          <div>{trainee.traineeId}</div>
          <div>{trainee.userName}</div>
          <div>
            {trainee.firstName} {trainee.lastName}
          </div>
          <div>{trainee.location}</div>
          <div>{trainee.contact}</div>
          <div>{trainee.email}</div>
          <div>{trainee.familyInfo}</div>
          <div>{trainee.aadharNo}</div>
          <div>{trainee.dob}</div>
          <div>
            {trainee.trainingCourse
              ? trainee.trainingCourse.trainingCourseId
              : "null"}
          </div>
          <div>{trainee.feedback ? trainee.feedback.feedbackId : "null"}</div>
        </div>
      ))}
    </div>
  );
}

export default TraineeView;
