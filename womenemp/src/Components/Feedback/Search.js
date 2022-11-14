import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchfeedbacksByScheme, fetchFeedback, fetchfeedbacksByTraining } from "../../Actions/FeedbackActions";
import FeedbackBy from "./FeedbackBy";
import Nav from "../Nav";
import "../../Style/style.css";

function Search() {
    const feedbacks = useSelector((state) => state.allfeedbacks.feedbacks);
    const dispatch = useDispatch();
    const schemeName = document.getElementById("schemeName");
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const search = document.getElementById("searchoption");
    const feedBackId = document.getElementById("search");
    const scheme = document.getElementById("search");
    const training = document.getElementById("search");
    const item = feedbacks[0];
    // const handleChange = (e)=>{
    //     const schemeName=document.getElementById("schemeName");
    //   }
    useEffect(() => {
        if(isSubmit && search.value ==="By ID" && feedBackId.value)
        dispatch(fetchFeedback(feedBackId.value))
        .then(()=>{
            console.log(feedbacks)
        })
        .catch((err)=>{
            alert("Feedback for given id not present")
            
        })
        if(isSubmit && search.value ==="By Scheme Name" && scheme.value)
            dispatch(fetchfeedbacksByScheme(scheme.value))
            .then(()=>{
                console.log(item)
            })
            .catch(()=>{
                alert("Feedback for given scheme not present");
            })
        if(isSubmit && search.value ==="By Training Course" && training.value)
            dispatch(fetchfeedbacksByTraining(training.value))
            .then(console.log(item))
            .catch(()=>{
                alert("Feedback for given training course not present");
            })
        
      }, [formErrors]);
      const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(validate(feedbacks));
        setIsSubmit(true);
        document.getElementById("feedid")
    }
    const validate = (value) => {
        const errors = {}
        return errors;
    }

    return(
        <div className="feedhome"><Nav/>
        
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
        <input type="text" id="search" placeholder="Search Feedback " required>
        </input>
        <p className="error">{formErrors.feedBackId}</p>
        <button onClick={handleSubmit}>Search</button>
        </div>
            <div id="feedid"> {isSubmit && (item ? (<FeedbackBy data={item} />) : (<FeedbackBy data={feedbacks} />))}</div>
        </div>
    );
}
export default Search;