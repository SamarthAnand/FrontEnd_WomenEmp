import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchCourseByName() {

  const [user, setUser] = useState({
    courseName: ""
  });

  const { courseName } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Search(by Name):
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Course name"
                name="courseName"
                value={courseName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <Link to={`/admin/searchcoursebyname/${courseName}`} className="btn btn-outline-primary">
              Submit
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}