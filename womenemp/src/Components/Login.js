import React from 'react'
import {useEffect, useState} from "react"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const initialValues = {username : "", password : ""}
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
        .get(`http://localhost:8202/api/UserLogin/${formValues.username}/${formValues.password}`)
        .then((data) => {
            document.getElementById('loginAfter').innerHTML = 'Login Successful'
            console.log(formValues)
            if(formValues.username === 'admin'){
              navigate('/admin')
            }else{
              navigate('/home');
            }
        })
        .catch((error) => {document.getElementById('loginAfter').innerHTML = error.response.data.errorMessage});
      }
    },[formErrors])
  
    const validate = (value)=>{
      const errors = {}
      if(!value.username){
        errors.username = "Please provide username"
      }
      if(!value.password){
        errors.password = "Please provide password"
      } else if (value.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (value.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
    }
    return (
      <div className="Login">
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}
        <form onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <button type='submit' className="fluid ui button blue">Sign In</button>
          </div>
          <div id='loginAfter'></div>
        </form>
        <Link to='/signup'>SignUp</Link>
      </div>
    );
}

export default Login