import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchfeedbacksByScheme, fetchFeedback, fetchfeedbacksByTraining } from "../../Actions/FeedbackActions";
import FeedbackBy from "./FeedbackBy";
import Nav from "../Nav";
import "../../Style/style.css";

function Search() {
    const feedbacks = useSelector((state) => state.allfeedbacks.feedbacks);
    const dispatch = useDispatch();
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const search = document.getElementById("searchoption");
    const feedBackId = document.getElementById("search");
    const scheme = document.getElementById("search");
    const training = document.getElementById("search");
    const item = feedbacks[0];
    const [isValue, setIsValue] = useState(false);

    //handles button disabling and search disabling 
    const handleChange = (() =>{
        const searchoption = document.getElementById("searchoption");
        const search = document.getElementById("search");
        const button = document.getElementById("button");
        if(!searchoption.value || !search.value){
            search.disabled=true;
            button.disabled=true;
            search.placeholder="Choose an option from above"
        }
        if(search.value){
                button.disabled=false;
            }
        if(searchoption.value==="By ID"){
            search.placeholder="Enter your search value"
            search.disabled=false;
            search.type="number";
            
        }
        if(searchoption.value==="By Scheme Name" || searchoption.value==="By Training Course" ){
            search.placeholder="Enter your search value"
            search.disabled=false;
            search.type="text";
        }
      })

      //filters and searches according to the option provided
    useEffect(() => {
        handleChange();
        if(isSubmit && search.value ==="By ID" && feedBackId.value)
        dispatch(fetchFeedback(feedBackId.value))
        .then(()=>{
            setIsValue(true);
        })
        .catch((err)=>{
            setIsValue(false);
            alert("FEEDBACK FOR GIVEN ID NOT PRESENT")
        })

        if(isSubmit && search.value ==="By Scheme Name" && scheme.value)
            dispatch(fetchfeedbacksByScheme(scheme.value))
            .then(()=>{
                setIsValue(true);
            })
            .catch(()=>{
                setIsValue(false);
                alert("FEEDBACK FOR GIVEN SCHEME NOT PRESENT");

            })

        if(isSubmit && search.value ==="By Training Course" && training.value)
            dispatch(fetchfeedbacksByTraining(training.value))
            .then(()=>{
                setIsValue(true);
            })
            .catch(()=>{
                setIsValue(false);
                alert("FEEDBACK FOR GIVEN TRAINING COURSE NOT PRESENT");
            })
        
      }, [formErrors]);

      //handles fetching  and displaying results

      const handleSubmit = (e)=>{
        const button = document.getElementById("button");
        button.disabled=false
        e.preventDefault();
        setFormErrors(validate(feedbacks));
        setIsSubmit(true);
        document.getElementById("feedid")
    }

    //handles unfetched errors
    const validate = (value) => {
        const errors = {}
        return errors;
    }

    return(
        <div className="feedhome"><Nav/>
        <div className="feedback">
            <form onChange={handleChange}>
        <h2>Search Feedbacks</h2>
        <select
            required
            id="searchoption">
                    <option value="" disabled selected hidden>Select your option</option>
                    <option>By ID</option>
                    <option>By Scheme Name</option>
                    <option>By Training Course</option>
                </select>
        <input type="" id="search" placeholder="" required>
        </input>
    
        <button id="button" onClick={handleSubmit}>Search</button></form>
        <p></p>
        </div>
            <div id="feedid"> {(isValue && isSubmit) && (item ? (<FeedbackBy data={item} />) : (<FeedbackBy data={feedbacks} />))}</div>
        </div>
    );
}
export default Search;