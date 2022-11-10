import { useEffect, useState } from "react";

import FeedbackList from './FeedbackList';
import { useSelector, useDispatch } from "react-redux";
import { fetchfeedbacksByScheme } from "../../Actions/FeedbackActions";

function Feedbackbyscheme(){
    const feedbacks = useSelector((state) => state.allfeedbacks.feedbacks);
    const dispatch= useDispatch();
    const schemeName= document.getElementById("schemeName");
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
   

    // const handleChange = (e)=>{
    //     const schemeName=document.getElementById("schemeName");
    //   }
    useEffect(() => {
        if(isSubmit && schemeName.value)
        dispatch(fetchfeedbacksByScheme(schemeName.value))
        .then(()=>{
            console.log(feedbacks)
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
        if(!value.schemeName){
          errors.schemeName = "Please provide Scheme Name"
        }
        return errors;
      }
    return(
        
        <div>
        {feedbacks &&<FeedbackList data={feedbacks} title="Feedback by Scheme Name" />}
        <div className="feedback">
        <input type="text" id="schemeName" placeholder="Enter Scheme Name">
        </input>
        <button onClick={handleSubmit}>Search</button>
        </div>
        </div>
        
    );
}
export default Feedbackbyscheme;
