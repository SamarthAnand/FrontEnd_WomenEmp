import React, { useEffect } from 'react'
import Nav from '../Nav';

import { Link, useNavigate } from 'react-router-dom';


function FeedbackHome() {
  const navigate = useNavigate();

  const handleFeed = ()=>{
    navigate("/feedback")
  }
  const updateFeed = ()=>{
    navigate("/updatefeedback")
  }
  const handleFeedbyId = ()=>{
    navigate("/feedback/feedbackbyid")
  }
  const handleFeedbyScheme = ()=>{
    navigate("/feedback/feedbackbyscheme")
  }
  const handleFeedbyTraining = ()=>{
    navigate("/feedback/feedbackbytraining")
  }
  const handleSearch = ()=>{
    navigate("/searchfeedback")
  }
  useEffect(()=>{
    // dispatch(fetchTrainee(user.userId))
    // dispatch(fetchSchemes())
    // dispatch(fetchNgos());
  },[])
  // console.log(schemes)
  return (
    <div>
        <Nav />
        <button className='buttonBlue' onClick={handleFeed}> Add Feedback</button>
        <button className='buttonBlue' onClick={updateFeed}> Update Feedback</button>
        <button className='buttonBlue' onClick={handleSearch}> Search Feedback</button>
    </div>
  )
}

export default FeedbackHome