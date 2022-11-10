import React, { useEffect, useState } from "react";
import "../../Style/style.css";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { updateTrainee } from "../../Actions/TraineeActions";

function Feedback(){ 
    // const trainee = useSelector((state) => state.trainee)
    const currUser = useSelector((state) => state.user);
    // const dispatch = useDispatch()
    const d = new Date().toISOString().split("T")[0];
    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);
    const initialValues = {feedBackId:100,schemeRating:null,schemeTrainingRating:null,overallRating:null,comment:"",date:d, user:{}};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
   

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name] : value});
      }
      const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true)
    }
    useEffect(()=>{
        // console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
          // formValues.user.userId = currUser.userId;
           axios
          .post(`http://localhost:8202/api/Feedback`,formValues)
          .then(() => {
            alert("Feedback Submitted");
              navigate('/home');
          })
      }
    },[formErrors])

      const validate = (value)=>{
        const errors = {}
        if(!value.schemeRating){
          errors.schemeRating = "Please provide Scheme Rating"
        }
        if(!value.schemeTrainingRating){
          errors.schemeTrainingRating = "Please provide Scheme Training Rating"
        }
        if(!value.overallRating){
            errors.overallRating = "Please provide Overall Rating"
        }
        if(!value.comment){
            errors.comment = "Please provide Comments"
        } 
        return errors;
      }
    
    return(

        <div className="feedback">
            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Feedback added succesfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}
            <h2>Give your Feedback</h2>
            <form onSubmit={handleSubmit}>
                {/* <div><label>FeedbackID</label>
                <input type="number" 
                name="feedBackId"
                onChange={handleChange}></input></div> */}
                {/* <div>
                    
                    <input type="number" name="schemeRating"></input>
                    <label>Scheme Rating</label>
                    <input type="number" name="schemeTrainingRating"></input>
                    <label>Scheme Rating</label>
                    <input type="number" name="overallRating"></input>
                    </div> */}
                    <div>
                        <label>Scheme Rating</label>
                <select
                required
                name="schemeRating"
                onChange={handleChange}>
                    <option value="" disabled selected hidden>Select your option</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                
                    <label 
                    >Scheme Training Rating</label>
                <select
                required
                name="schemeTrainingRating"
                onChange={handleChange}>
                    <option value="" disabled selected hidden>Select your option</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                
                    <label >Overall Rating</label>
                <select
                required
                name="overallRating"
                onChange={handleChange}>
                    <option value="" disabled selected hidden>Select your option</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                
            
                  <label >Comments</label>
                <textarea
                required 
                type="text"
                onChange={handleChange}
                name="comment"
                placeholder="Add comments"></textarea>
        
                    <button role="button">Submit</button>
                
                </div>
            </form>
            <div className="feedbackAfter" id='feedbackAfter'></div>
        </div>
    )
}
export default Feedback;