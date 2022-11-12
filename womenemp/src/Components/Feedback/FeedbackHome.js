import React, { useEffect } from 'react'
import Nav from '../Nav';
import "../../Style/feedhome.scss";
import { Link, useNavigate } from 'react-router-dom';
import { fetchTrainee } from '../../Actions/TraineeActions';
import { useDispatch, useSelector } from 'react-redux';


function FeedbackHome() {
  const dispatch = useDispatch();
  const trainee = useSelector((state) => state.trainee);
  const currUser = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleFeed = () => {
    navigate("/feedback")
  }
  const updateFeed = () => {
    if(trainee.feedback.feedBackId){
      navigate("/updatefeedback");
    }
    else{
      alert("Add Feedback First");
    }
    
  }
  const handleSearch = () => {
    navigate("/searchfeedback")
  }
  useEffect(() => {
    dispatch(fetchTrainee(currUser.userId))
    .then(console.log(trainee))
    // dispatch(fetchTrainee(user.userId))
    // dispatch(fetchSchemes())
    // dispatch(fetchNgos());
  }, [])
  // console.log(schemes)
  return (
    <div class="feedhome">
        <Nav /> 
        <div class="homebutt"><h3 style={{ color:'lightgrey'}}>Your Feedback matters ...</h3>
        <div class="button2" onClick={handleFeed}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add Feedback
        </div>
       
        <div class="button2" onClick={updateFeed}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Update Feedback
        </div>
        <div class="button2" onClick={handleSearch}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Search Feedback
        </div></div>
        
    </div>
  )
}

export default FeedbackHome