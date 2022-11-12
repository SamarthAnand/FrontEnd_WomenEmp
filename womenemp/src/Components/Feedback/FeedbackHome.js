import React, { useEffect } from 'react'
import Nav from '../Nav';
import "../../Style/feedhome.css";
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
    
    <div>
        <Nav /> <h3 style={{ color:'lightgrey'}}>Your Feedback matters ...</h3>
        
        <div class="center">
        <div class="btn-1" >
          <a href=""><span onClick={handleFeed}>Add Feedback</span></a>
        </div>
        <div class="btn-1" >
          <a href=""><span onClick={updateFeed}>Update Feedback</span></a>
       </div>
        <div class="btn-1" >
          <a href=""><span onClick={handleSearch}>Search Feedback</span></a>
    </div></div></div>
  )
}

export default FeedbackHome