import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav';

import { Link, useNavigate } from 'react-router-dom';


function FeedbackHome() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
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
        <button className='buttonBlue' onClick={handleFeedbyScheme}> Feedback by Scheme name</button>
        <button className='buttonBlue' onClick={handleFeedbyTraining}> Feedback by Training name</button>
        <button className='buttonBlue' onClick={handleFeedbyId}> Feedback by ID</button>
    </div>
  )
}

export default FeedbackHome