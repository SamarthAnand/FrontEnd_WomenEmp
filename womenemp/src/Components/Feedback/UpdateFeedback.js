import React, { useEffect, useState } from "react";
import "../../Style/style.css";
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { updateFeedback } from "../../Actions/FeedbackActions";
import Nav from "../Nav";

function UpdateFeedback(){ 
  
    const feed = useSelector((state) => state.feedback);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSubmit, setIsSubmit] = useState(false);
    const [formValues, setFormValues] = useState(feed);
    const [formErrors, setFormErrors] = useState({});
   
    //changes the values of update
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormValues({...formValues, [name] : value});
      }

      //validates and handles submit
      const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true)
    }

    //updates the feedback after submit
    useEffect(()=>{
        console.log(formErrors)
        console.log(feed)
        if(Object.keys(formErrors).length === 0 && isSubmit){
          dispatch(updateFeedback(formValues));
          navigate("/feedback/home")
          alert("FEEDBACK UPDATED")
          }
    },[formErrors])

      //validation
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
    
    return(<div className="feedhome"><Nav/>

        <div className="feedback" data-testid="updatefeedback">
            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Feedback added succesfully</div>
        ) : (
          <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )} */}
            <h2>Update Feedback</h2>
            <form onSubmit={handleSubmit}>
                    <div>
                        <label>Scheme Rating</label>
                <select
                required
                name="schemeRating"
                value={formValues.schemeRating}
                onChange={handleChange}>
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
                </select><p className="error">{formErrors.schemeRating}</p>
                
                    <label 
                    >Scheme Training Rating</label>
                <select
                required
                name="schemeTrainingRating"
                value ={formValues.schemeTrainingRating}
                onChange={handleChange}>
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
                </select><p className="error">{formErrors.schemeTrainingRating}</p>
                
                    <label >Overall Rating</label>
                <select
                required
                name="overallRating"
                value ={formValues.overallRating}
                onChange={handleChange}>
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
                </select><p className="error">{formErrors.overallRating}</p>
                  <label >Comments</label>
                <textarea
                required 
                type="text"
                onChange={handleChange}
                name="comment"
                value={formValues.comment}></textarea>
                <p className="error">{formErrors.comment}</p>
                    <button role="button">Submit</button>
                
                </div>
            </form>
        </div></div>
    )
}
export default UpdateFeedback;