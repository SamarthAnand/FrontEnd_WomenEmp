import { useEffect, useState } from "react";

import FeedbackList from './FeedbackList';
import { useSelector, useDispatch } from "react-redux";
import { fetchfeedbacksByScheme , fetchFeedback, fetchfeedbacksByTraining } from "../../Actions/FeedbackActions";
import FeedbackBy from "./FeedbackBy";
import Nav from "../Nav";

function Search(){
    const feedbacks = useSelector((state) => state.allfeedbacks.feedbacks);
    const dispatch= useDispatch();
    const schemeName= document.getElementById("schemeName");
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const search = document.getElementById("searchoption");
    const feedbackId = document.getElementById("search");
    const scheme = document.getElementById("search");
    // const handleChange = (e)=>{
    //     const schemeName=document.getElementById("schemeName");
    //   }
    useEffect(() => {
        if(isSubmit && search.value ==="By ID" && feedbackId.value)
        dispatch(fetchFeedback(feedbackId.value))
        .then(()=>{
            console.log(feedbacks)
        })
        .catch((err)=>{
            alert("Feedback not found")
        })
        if(isSubmit && search.value ==="By Scheme Name" && scheme.value)
            dispatch(fetchfeedbacksByScheme(scheme.value))
            .then(()=>{
                console.log(feedbacks)
            })
            .catch(()=>{
                alert("Feedback for given scheme not present");
            })

      }, [formErrors]);
      const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(feedbacks));
        setIsSubmit(true);
        document.getElementById("feedid")
       
        // if(search && search.value ==="By Training Course"){
        //     const training = document.getElementById("search");
        //     console.log(training.value)
        //     dispatch(fetchfeedbacksByTraining(training.value))
        //     .then()
        //     .catch(()=>{
        //         alert("Feedback for given training course not present");
        //     })
        //     console.log(feedbacks)
        //     feedbacks &&<FeedbackList data={feedbacks} title="Feedback by Training" />
        // }
    }
    const validate = (value)=>{
        const errors = {}
        if(!value.feedbackId){
          errors.feedbackId = "Please provide Scheme Name"
        }
        if(!value.schemeName){
            errors.schemeName = "Please provide Scheme Name"
          }
        return errors;
      }

    return(
        <div><Nav/>
        
        <div className="feedback">
        <h2>Search Feedbacks</h2>
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
        <div id="feedid">{isSubmit && <FeedbackBy data={feedbacks} />}</div>
        </div>
        
    );
}
export default Search;
