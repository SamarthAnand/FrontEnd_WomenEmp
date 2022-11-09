import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTrainee, fetchTrainee } from '../../Actions/TraineeActions'

function TraineeById() {
    const user = useSelector((state) => state.user)
    const trainee = useSelector((state) => state.trainee)
    const dispatch = useDispatch()

    useEffect(()=>{
        fetchTrainee(user.userId)
    },[])

    const handleDelete = ()=> {
        dispatch(deleteTrainee(user.userId))
    }
    const handleUpdate = ()=> {
        
    }
  return (
    <div>
        <table style={{margin: "10px auto"}}>
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
            <tr>
                <td>Feedback : </td>
                <td>{trainee.feedback ? trainee.feedback.overallRating: "Null"}</td>
            </tr>
        </table>

        <button className='buttonBlue' onClick={handleUpdate}>Update</button>
        <button className='buttonBlue' onClick={handleDelete} style={{backgroundColor:"Red"}}>Delete</button>

    </div>
  )
}

export default TraineeById