import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchFeedbackByUserId } from '../../Actions/FeedbackActions'
import { deleteTrainee, fetchTrainee } from '../../Actions/TraineeActions'
import { deleteUser } from '../../Actions/UserAction'
import Nav from '../Nav'

function TraineeById() {
    const user = useSelector((state) => state.user)
    const trainee = useSelector((state) => state.trainee)
    const feed = useSelector((state) => state.feedback)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(fetchTrainee(user.userId))
        dispatch(fetchFeedbackByUserId(user.userId))
    },[])

    const handleDelete = ()=> {
        dispatch(deleteUser(user.userId))
        dispatch(deleteTrainee(user.userId))
        navigate("/");
        alert("successfully deleted")
    }
    const handleUpdate = ()=> {
        navigate("/home/profile/update")
    }
  return (
    <div>
        <Nav />
        <table class="table table-striped">
            <tbody>
            <tr>
                <td>Trainee Id :</td>
                <td>{trainee.traineeId}</td>
            </tr>
            <tr>
                <td>User Name :</td>
                <td>{trainee.userName}</td>
            </tr>
            <tr>
                <td>Password :</td>
                <td>{trainee.password}</td>
            </tr>
            <tr>
                <td>Name :</td>
                <td>{trainee.firstName} {trainee.lastName}</td>
            </tr>
            <tr>
                <td>Location :</td>
                <td>{trainee.location}</td>
            </tr>
            <tr>
                <td>Contact :</td>
                <td>{trainee.contact}</td>
            </tr>
            <tr>
                <td>Email :</td>
                <td>{trainee.email}</td>
            </tr>
            <tr>
                <td>Family Info :</td>
                <td>{trainee.familyInfo}</td>
            </tr>
            <tr>
                <td>Aadhar Number :</td>
                <td>{trainee.aadharNo}</td>
            </tr>
            <tr>
                <td>DOB :</td>
                <td>{trainee.dob}</td>
            </tr>
            <tr>
                <td>Training Course :</td>
                <td>{trainee.trainingCourse ? trainee.trainingCourse.courseName: "Null"}</td>
            </tr>
            {/* <tr>
                <td>Feedback : </td>
                <td>{feed.comment ? feed.comment: "Null"}</td>
            </tr> */}
            </tbody>
        </table>

        <button className='buttonBlue' onClick={handleUpdate}>Update</button>
        <button className='buttonBlue' onClick={handleDelete} style={{backgroundColor:"Red"}}>Delete</button>

    </div>
  )
}

export default TraineeById