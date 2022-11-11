import { useEffect, useState } from "react";
import FeedbackBy from "./FeedbackBy";
import FeedbackList from './FeedbackList';
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedback} from "../../Actions/FeedbackActions";
import Nav from "../Nav";

function FeedbackbyId(){
    const feedbacks = useSelector((state) => state.allfeedbacks.feedbacks);
    const dispatch= useDispatch();
    const feedbackId = document.getElementById("feedbackId");
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
   
    useEffect(() => {
        if(isSubmit && feedbackId.value)
        dispatch(fetchFeedback(feedbackId.value))
        .then(()=>{
            console.log(feedbacks)
        })
        .catch((err)=>{
            alert("Feedback not found")
        })
      }, [formErrors]);
      const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(feedbacks));
        setIsSubmit(true);
        document.getElementById("feedid")
        

    }
    const validate = (value)=>{
        const errors = {}
        if(!value.feedbackId){
          errors.feedbackId = "Please provide Feedback ID"
        }
        return errors;
      }
    return(
        <div><Nav/>
        
        <div className="feedback">
        <input type="number" id="feedbackId" placeholder="Enter Feedback ID" required>
        </input>
        <button onClick={handleSubmit} >Search</button>
        </div>
        <div id="feedid">{isSubmit && <FeedbackBy data={feedbacks} />}</div>
        </div>
        
    );
}
export default FeedbackbyId;
