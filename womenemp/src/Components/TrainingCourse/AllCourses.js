import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function AllCourses() {
  const[courses,setCourses] = useState([])
  const{trainingCourseId} = useParams()

  useEffect (()=>{
    loadCourses();
},[])
const loadCourses = async ()=>{
    const result = await axios.get('http://localhost:8202/api/TrainingCourse')
    console.log(result.data);
    setCourses(result.data);
};
const deleteCourse= async (trainingCourseId)=> {
    await axios.delete(`http://localhost:8202/api/TrainingCourse/${trainingCourseId}`)
    loadCourses();
}
  return (
    <div className='container'>
        <div className='py-4'>
        <table className ="table table-hover border shadow">
        <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Course Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        courses.map((course,trainingCourseId)=>(
            <tr>
        <th scope="row" key={course.trainingCourseId}>{course.trainingCourseId}</th>
        <td>{course.courseName}</td>
        <td> 
            <Link to={`/admin/allcourses/coursedetails`} className="btn btn-primary mx-2">View</Link>
            <Link to ={`/admin/updatecourse/${course.trainingCourseId}`} className="btn btn-outline-primary mx-2">Update</Link>
            <button className="btn btn-danger mx-2" onClick={()=>deleteCourse(course.trainingCourseId)}>Delete</button>
        </td>
        </tr>
        ))
    }
    
    
  </tbody>
</table>
        </div>
      
    </div>
  )
    
}

export default AllCourses;