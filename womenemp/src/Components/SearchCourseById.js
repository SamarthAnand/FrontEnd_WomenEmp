import React from 'react'
import {useEffect, useState} from "react"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
// import { Link } from 'react-router-dom';
import SearchResult from "./SearchResult";

function SearchCourseById() {
    const [formValues, setFormValues] = useState();
    const [isSearch, setIsSearch] = useState(false);
  
    const handleChange = (e)=>{
      const {name, value} = e.target
      setFormValues({...formValues, [name] : value});
    }
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      setIsSearch(true);
    }
  
    useEffect(()=>{
        axios
        .get(`http://localhost:8202/api/TrainingCourse/${formValues.trainingCourseId}`)
        .then((res) => {
            setFormValues(res.data)
            alert("Search Complete")
        })
        .catch((error) => {document.getElementById('submitAfter').innerHTML = error.response.data.errorMessage});
      
    },[])
  
    return (
        <>
      <div className="Container">
        {/* { isSearch ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}
        <form onSubmit={handleSubmit}>
          <h1>Find the Course By Id</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Enter the Id:</label>
              <input
                type="text"
                name="trainingCourseId"
                placeholder="Enter the Course Name"
                value={formValues.trainingCourseId}
                onChange={handleChange}
              />
            </div>
            <button type='submit' className="fluid ui button blue">Search</button>
          </div>
          <div id='submitAfter'></div>
          </form>
          {formValues &&
        formValues.map((trainee) => (
          <div key={trainee.trainingCourseId} className='tile'>
            <SearchResult trainee={trainee} />
          </div>
        ))}
          </div> 
        </>
    );
}

export default SearchCourseById