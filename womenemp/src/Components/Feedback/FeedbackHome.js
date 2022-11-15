
import Nav from '../Nav';
import "../../Style/feedhome.css";
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { fetchTrainee } from '../../Actions/TraineeActions'

function FeedbackHome() {
  const dispatch = useDispatch();
  const trainee = useSelector((state) => state.trainee);
  const currUser = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [feed, setFeed] = useState({});

  //navigates to add feedback
  const handleFeed = () => {
    navigate("/feedback")
  }

  //checks if there is current feedback and navigates to update feedback
  const updateFeed = () => {
    if(feed.comment){
      navigate("/updatefeedback");
    }
    else{
      alert("ADD FEEDBACK FIRST");
    }
  }

  //navigates to search feedback
  const handleSearch = () => {
    navigate("/searchfeedback")
  }

  //checks if there is current feedback
  useEffect(() => {
    dispatch(fetchTrainee(currUser.userId))
    .then(console.log(trainee))
    axios
        .get(`http://localhost:8202/api/Feedback/User/${currUser.userId}`)
        .then((data) => setFeed(data.data))
        .catch((error) => setFeed({comment:""}))
  }, [])
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

export default FeedbackHome