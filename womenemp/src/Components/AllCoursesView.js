import React from "react";

function AllCoursesView({ courses }) {
  return (
    <div>
      <div className="grid" id="traineeHead">
        <div>Training Course Id</div>
        <div>CourseName</div>
        <div>Course Duration</div>
        <div>Starting Date</div>
        <div>Ending Date</div>
        <div>Completion Status</div>
      </div>
      {courses && courses.map((course) => (
        <div className="grid" key={course.trainingCourseId}>
          <div>{course.trainingCourseId}</div>
          <div>{course.courseName}</div>
          <div>
            {course.courseDuration}
          </div>
          <div>{course.startingDate}</div>
          <div>{course.endingDate}</div>
          <div>{course.courseCompletionStatus}</div>
          {/* <div>
            {course.trainingCourse
              ? course.trainingCourse.trainingCourseId
              : "null"}
          </div>
          <div>{course.feedback ? course.feedback.feedbackId : "null"}</div> */}
        </div>
      ))}
    </div>
  );
}

export default AllCoursesView;
