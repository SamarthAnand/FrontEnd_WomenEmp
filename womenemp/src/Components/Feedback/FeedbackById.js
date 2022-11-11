import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchFeedback } from '../../Actions/FeedbackActions'
import { deleteTrainee, fetchTrainee } from '../../Actions/TraineeActions'
import { deleteUser } from '../../Actions/UserAction'

function FeedbackById({data}) {

  return (
    
    <div>
        <table class="table table-striped">
            <tbody>
            <tr>
                <td>Feedback ID :</td>
                <td>{data.feedBackId}</td>
            </tr>
            <tr>
                <td>Scheme Rating :</td>
                <td>{data.schemeRating}</td>
            </tr>
            <tr>
                <td>Training Rating :</td>
                <td>{data.schemeTrainingRating}</td>
            </tr>
            <tr>
                <td>Overall Rating :</td>
                <td>{data.overallRating}</td>
            </tr>
            <tr>
                <td>User :</td>
                <td>
                    {data.user ? data.user.userId: "null"}</td>
            </tr>
            <tr>
                <td>Scheme :</td>
                <td>
                    {data.scheme ? data.scheme.schemeName: "null"}</td>
            </tr>
            <tr>
                <td>Training Course :</td>
                <td>
                    {data.trainingCourse ? data.trainingCourse.courseName: "null"}</td>
            </tr>
            <tr>
                <td>Comments :</td>
                <td>{data.comment}</td>
            </tr>
            
            
            </tbody>
        </table>
{/* 
        <button className='buttonBlue' onClick={handleUpdate}>Update</button>
        <button className='buttonBlue' onClick={handleDelete} style={{backgroundColor:"Red"}}>Delete</button> */}

    </div>
  )
}

export default FeedbackById