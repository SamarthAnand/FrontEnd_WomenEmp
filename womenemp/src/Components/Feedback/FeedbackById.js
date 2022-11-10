// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { fetchFeedback } from '../../Actions/FeedbackActions'
// import { deleteTrainee, fetchTrainee } from '../../Actions/TraineeActions'
// import { deleteUser } from '../../Actions/UserAction'

// function TraineeById() {

//     const feedback = useSelector((state) =>state.feedback);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     useEffect(()=>{
//         fetchFeedback(user.feedbackId)
//     },[])

//     const handleUpdate = ()=> {
//         navigate("/updatefeedback")
//     }
//   return (
//     <div>
//         <table style={{margin: "10px auto"}}>
            
            
            
            
//             <tr>
//                 <td>DOB :</td>
//                 <td>{feedback.comment}</td>
//             </tr>
//             <tr>
//                 <td>Training Course :</td>
//                 <td>{trainee.trainingCourse ? trainee.trainingCourse.courseName: "Null"}</td>
//             </tr>
//             <tr>
//                 <td>Feedback : </td>
//                 <td>{trainee.feedback ? trainee.feedback.overallRating: "Null"}</td>
//             </tr>
//         </table>

//         <button className='buttonBlue' onClick={handleUpdate}>Update</button>
//         <button className='buttonBlue' onClick={handleDelete} style={{backgroundColor:"Red"}}>Delete</button>

//     </div>
//   )
// }

export default TraineeById