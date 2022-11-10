import { useEffect, useState } from "react";

import FeedbackList from './FeedbackList';
import { useSelector, useDispatch } from "react-redux";
import { fetchfeedbacksByTraining } from "../../Actions/FeedbackActions";

function Feedbackbytraining(){
    const feedbacks = useSelector((state) => state.allfeedbacks.feedbacks);
    const dispatch= useDispatch();
    const courseName= document.getElementById("courseName");
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
   

    // const handleChange = (e)=>{
    //     const schemeName=document.getElementById("schemeName");
    //   }
    useEffect(() => {
        if(isSubmit && courseName.value)
        dispatch(fetchfeedbacksByTraining(courseName.value))
        .then(()=>{
            console.log(courseName.value)
        })
        .catch((err)=>{
            alert("Scheme not found")
        })
      }, [formErrors]);
      const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(feedbacks));
        setIsSubmit(true)
    }
    const validate = (value)=>{
        const errors = {}
        if(!value.courseName){
          errors.courseName = "Please provide Scheme Name"
        }
        return errors;
      }
    return(
        
        <div>
        {feedbacks &&<FeedbackList data={feedbacks} title="Feedback by Training Name" />}
        <div className="feedback">
        <input type="text" id="courseName" placeholder="Enter Training Course Name">
        </input>
        <button onClick={handleSubmit}>Search</button>
        </div>
        </div>
        
    );
}
export default Feedbackbytraining;
