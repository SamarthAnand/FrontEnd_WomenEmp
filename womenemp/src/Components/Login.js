import React from 'react'
import {useEffect, useState} from "react"
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../Actions/UserAction';

function Login() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.user)

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
      
      if(Object.keys(formErrors).length === 0 && isSubmit){
        dispatch(fetchUser(formValues.username, formValues.password));
        
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
        .catch((error) => {
          // console.log(error)
          document.getElementById('loginAfter').innerHTML = error.response.data.errorMessage
        });
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
      <div className="Login" data-testid="loginTest">
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}
        <h2 id='loginHead'><img  className=" bg-body rounded" style={{ 'height': "70px" ,'width':"70px" }}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZMRxK5gsX7XR-e4pvKhHzrGJVUi2GgNF9osFsDeEoBU4ZliguRMxy8aYZTEiUqNwUoc&usqp=CAU" alt='img'/>
          &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Women Empowerment Website &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
          <img className=" bg-body rounded" style={{ 'height': "70px" ,'width':"90px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBA6XlAeZzb8iKLsZf6A_tetxEK15EaIMvHQ&usqp=CAU" alt='img'/></h2>
        <div className='d-flex align-items-stretch'>
          <div className="pt-4 w-70">


            <img className="shadow-lg p-3 mb-3 bg-body rounded loginimg" style={{ 'height': "200px" ,'width':"332px" }}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmKyx5Td-dWCXRP5XjymapsUXUwwBtGpacA&usqp=CAU'></img>
            <img className="shadow-lg p-3 mb-3 bg-body rounded loginimg1" 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRL4iGW9ssOMH-deA_rhGCO3XxGIMphwqNIQ&usqp=CAU'></img>
           
           <div style={{'fontSize':"25px",'fontWeight':"bolder",'margin-top':"5px"}} className='align'><span style={{'fontSize':"30px"}}>E</span>mpowering women to participate fully in economic life across all sectors is essential to 
            build stronger economies, achieve internationally agreed goals for development and sustainability, 
            and improve the quality of life for women, men, families and communities. </div> 
          </div>



        <div className='p-2 w-100'>
        <form onSubmit={handleSubmit} className=" shadow-lg p-3 mb-5  rounded formView">
          <h3>Login Form</h3>
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
            <p className='error'>{formErrors.username}</p>

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
            <p className='error'>{formErrors.password}</p>
            <button type='submit' className="buttonBlue">Sign In</button>
          </div>
          <div id='loginAfter'></div>
        <Link to='/signup'>SignUp</Link>
        </form>
        </div>
      </div>
      </div>
    );
}

export default Login