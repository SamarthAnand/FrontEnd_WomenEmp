
import Nav from '../Nav';
import "../../Style/feedhome.css";
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { fetchFeedbackByUserId } from '../../Actions/FeedbackActions'
import { deleteTrainee, fetchTrainee } from '../../Actions/TraineeActions'

function FeedbackHome() {
  const dispatch = useDispatch();
  const trainee = useSelector((state) => state.trainee);
  const currUser = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [feed, setFeed] = useState({})
  const handleFeed = () => {
    navigate("/feedback")
  }
  const updateFeed = () => {
    if(feed.comment){
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
    axios
        .get(`http://localhost:8202/api/Feedback/User/${currUser.userId}`)
        .then((data) => setFeed(data.data))
        .catch((error) => setFeed({comment:""}))
    // dispatch(fetchTrainee(user.userId))
    // dispatch(fetchSchemes())
    // dispatch(fetchNgos());
  }, [])
  // console.log(schemes)
  return (
    <div>
        <Nav /> 
        <div class='feedhome'>
        <div class="center">
          <div><h2 style={{color:"white"}}>Your Feedback Matters</h2></div>
        <div class="btn-2" >
          <button className='buttonBlue' onClick={handleFeed}>Add Feedback</button>
          
        </div>
        <div class="btn-2" >
          <button className='buttonBlue' onClick={updateFeed}>Update Feedback</button>
       </div>
        <div class="btn-2" >
          <button className='buttonBlue' onClick={handleSearch}>Search Feedback</button>
    </div></div></div></div>
  )
}

export default FeedbackHome