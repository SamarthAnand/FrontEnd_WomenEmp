import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h1>Admin Page</h1>

      <Link to="/admin/trainees">View All Trainees</Link>
      <br />
      <Link to="/admin/addcourse">Add Course</Link>
      <br />
      <Link to="/admin/updatecourse">Update Course</Link>
      <br />
      <Link to="/admin/Schemes">View All Schemes</Link>
      <br />
      <Link to="/admin/addscheme">Add Scheme</Link>
      <br />
    </div>
  );
}

export default Admin;
