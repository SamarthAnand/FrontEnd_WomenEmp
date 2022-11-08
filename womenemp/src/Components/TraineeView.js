import React from "react";

function TraineeView({trainee}) {
  return (
    <div className="grid" >
        
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
        {trainee.trainingCourse ? trainee.trainingCourse.trainingCourseId : "null"}
      </div>
      <div>
        {trainee.feedback ? trainee.feedback.feedbackId : "null"}
      </div>
    </div>
  );
}

export default TraineeView;
