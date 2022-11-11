import { useEffect, useState } from "react";

import FeedbackList from './FeedbackList';
import { useSelector, useDispatch } from "react-redux";
import { fetchfeedbacksByScheme , fetchFeedback, fetchfeedbacksByTraining } from "../../Actions/FeedbackActions";
import FeedbackbyId from "./FeedbackById";
import Nav from "../Nav";

function Search(){
    const feedbacks = useSelector((state) => state.allfeedbacks.feedbacks);
    const dispatch= useDispatch();
    const schemeName= document.getElementById("schemeName");
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const search = document.getElementById("searchoption");

    // const handleChange = (e)=>{
    //     const schemeName=document.getElementById("schemeName");
    //   }
    useEffect(() => {
        // if(isSubmit && schemeName.value)
        // dispatch(fetchfeedbacksByScheme(schemeName.value))
        // .then(()=>{
        //     console.log(feedbacks)
        // })
        // .catch((err)=>{
        //     alert("Feedback not found")
        // })
      }, []);
      const handleSubmit = (e)=>{
        e.preventDefault();
        // setFormErrors(validate(feedbacks));
        setIsSubmit(true);
        if( search.value ==="By ID"){
            const feedbackId = document.getElementById("search");
            console.log(feedbackId.value)
            dispatch(fetchFeedback(feedbackId.value))
            console.log(feedbacks)
            {feedbacks &&<FeedbackbyId data={feedbacks} />}
        }
        if( search.value ==="By Scheme Name"){
            const scheme = document.getElementById("search");
            console.log(scheme.value)
            dispatch(fetchfeedbacksByScheme(scheme.value))
            console.log(feedbacks)
            feedbacks &&<FeedbackList data={feedbacks} title="Feedback by Scheme" />
        }
        if( search.value ==="By Training Course"){
            const training = document.getElementById("search");
            console.log(training.value)
            dispatch(fetchfeedbacksByTraining(training.value))
            console.log(feedbacks)
            feedbacks &&<FeedbackList data={feedbacks} title="Feedback by Training" />
        }
    }
    // const validate = (value)=>{
    //     const errors = {}
    //     if(!value.schemeName){
    //       errors.schemeName = "Please provide Scheme Name"
    //     }
    //     return errors;
    //   }

    return(
        
        <div><Nav/>
        {feedbacks &&<FeedbackList data={feedbacks} />}
        
        <div className="feedback"><h2>Search Feedbacks</h2>
        <select
            required
            id="searchoption">
                    <option value="" disabled selected hidden>Select your option</option>
                    <option>By ID</option>
                    <option>By Scheme Name</option>
                    <option>By Training Course</option>
                </select>
        <input type="text" id="search" placeholder="Search what you want ">
        </input>
        <button onClick={handleSubmit}>Search</button>
        </div>
        </div>
        
    );
}
export default Search;
