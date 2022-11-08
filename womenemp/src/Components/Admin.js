import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h1>Admin Page</h1>
      
        <Link to="/admin/trainees">View All Trainees</Link>
      
    </div>
  );
}

export default Admin;
