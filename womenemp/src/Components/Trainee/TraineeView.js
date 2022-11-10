import React from "react";

function TraineeView({ trainees }) {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>UserName</th>
          <th>Name</th>
          <th>Location</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Family Info</th>
          <th>Aadhar No</th>
          <th>DOB</th>
          <th>Training Course</th>
          <th>Feedback</th>
        </tr>
      </thead>
      <tbody>
        {trainees &&
          trainees.map((trainee) => (
            <tr>
              <td>{trainee.traineeId}</td>
              <td>{trainee.userName}</td>
              <td>
                {trainee.firstName} {trainee.lastName}
              </td>
              <td>{trainee.location}</td>
              <td>{trainee.contact}</td>
              <td>{trainee.email}</td>
              <td>{trainee.familyInfo}</td>
              <td>{trainee.aadharNo}</td>
              <td>{trainee.dob}</td>
              <td>
                {trainee.trainingCourse
                  ? trainee.trainingCourse.trainingCourseId
                  : "null"}
              </td>
              <td>{trainee.feedback ? trainee.feedback.feedbackId : "null"}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TraineeView;
