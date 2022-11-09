import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="admin">
      <h1>Admin Page</h1>
      <div>
      <Link to="/admin/trainees">View All Trainees</Link>
      </div>
      <div>
      <Link to="/admin/addcourse">Add Course</Link>
      </div>
        <div>
        <Link to="/admin/updatecourse/:trainingCourseId">Update Course</Link>
        </div>
        <div>
        <Link to="/admin/searchcoursebyid">Search Course By Id</Link>
        </div>
        <div>
        <Link to= "/admin/allcourses">Display all Courses</Link>
        </div>
      <div>
      <Link to="/admin/Schemes">View All Schemes</Link>
      </div>
      <div>
      <Link to="/admin/addscheme">Add Scheme</Link>
      </div>
      <div>
      <Link to="/admin/viewallfeedback">View all feedback</Link>
      </div>
    </div>
  );
}

export default Admin;
