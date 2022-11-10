import { useEffect, useState } from "react";

import FeedbackList from './FeedbackList';
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedbackByUserId} from "../../Actions/FeedbackActions";

function FeedbackbyId(){
    const feedbacks = useSelector((state) => state.allfeedbacks.feedbacks);
    const dispatch= useDispatch();
    const feedbackid = document.getElementById("feedbackid");
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
   
    useEffect(() => {
        if(isSubmit && feedbackid.value)
        dispatch(fetchFeedbackByUserId(feedbackid.value))
        .then(()=>{
            console.log(feedbackid.value)
        })
        .catch((err)=>{
            alert("Feedback not found")
        })
      }, [formErrors]);
      const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(feedbacks));
        setIsSubmit(true)
    }
    const validate = (value)=>{
        const errors = {}
        if(!value.feedbackid){
          errors.feedbackid = "Please provide Feedback ID"
        }
        return errors;
      }
    return(
        
        <div>
        {feedbacks &&<FeedbackList data={feedbacks} title="Feedback by ID" />}
        <div className="feedback">
        <input type="number" id="feedbackid" placeholder="Enter Feedback ID">
        </input>
        <button onClick={handleSubmit}>Search</button>
        </div>
        </div>
        
    );
}
export default FeedbackbyId;
