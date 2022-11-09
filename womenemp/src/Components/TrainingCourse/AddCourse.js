import React from 'react'
import {useEffect, useState} from "react"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
// import { Link } from 'react-router-dom';

function AddCourse() {
    const navigate = useNavigate();
    const initialValues = {trainingCourseId: 100, courseName : "", courseDuration : "", startingDate: "", endingDate: "", courseCompletionStatus: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e)=>{
      const {name, value} = e.target
      setFormValues({...formValues, [name] : value});
    }
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      setFormErrors(validate(formValues))
      setIsSubmit(true);
    }
  
    useEffect(()=>{
      console.log(formErrors)
      if(Object.keys(formErrors).length === 0 && isSubmit){
        axios
        .post(`http://localhost:8202/api/TrainingCourse`,formValues)
        .then((data) => {
            document.getElementById('submitAfter').innerHTML = 'Course Added Successfully!'
            console.log(formValues)
            // if(formValues.username === 'admin'){
            //   navigate('/admin')
            // }else{
            //   navigate('/home');
            // }
            navigate('/admin')
        })
        .catch((error) => {document.getElementById('submitAfter').innerHTML = error.response.data.errorMessage});
      }
    },[formErrors])
  
    const validate = (value)=>{
      const errors = {}
      if(!value.courseName){
        errors.courseName = "Please provide courseName!"
      }
      if(!value.courseDuration){
        errors.courseDuration = "Please provide Course Duartion!"
      }
      if(!value.courseCompletionStatus){
        errors.courseCompletionStatus = "Please provide Completion Status!"
      }
      if(!value.startingDate){
        errors.startingDate = "Please provide Starting Date!"
      }
      if(!value.endingDate){
        errors.endingDate = "Please provide Ending Date!"
      }
      return errors;
    }
    return (
      <div className="Container">
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}
        <form onSubmit={handleSubmit} className="formView">
          <h1>New Course Form</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Course Name:</label>
              <input
                type="text"
                name="courseName"
                placeholder="Enter the Course Name"
                value={formValues.courseName}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.courseName}</p>
            <div className="field">
              <label>Course Duration:</label>
              <input
                type="text"
                name="courseDuration"
                placeholder="Enter the courseDuration of course"
                value={formValues.courseDuration}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.courseDuration}</p>
            <div className="field">
              <label>Starting Date</label>
              <input
                type="date"
                name="startingDate"
                placeholder="Start Date"
                value={formValues.startingDate}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.startingDate}</p>
            <div className="field">
              <label>Ending Date</label>
              <input
                type="date"
                name="endingDate"
                placeholder="End Date"
                value={formValues.endingDate}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.endingDate}</p>
            <div className="field">
              <label>Completion Status</label>
              <input
                type="text"
                name="courseCompletionStatus"
                placeholder="Enter the completion Status of Course."
                value={formValues.courseCompletionStatus}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.courseCompletionStatus}</p>
            <button type='submit' className="fluid ui button blue">Submit</button>
          </div>
          <div id='submitAfter'></div>
        </form>
        {/* <Link to='/signup'>SignUp</Link> */}
      </div>
    );
}

export default AddCourse