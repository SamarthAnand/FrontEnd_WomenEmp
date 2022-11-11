import { Link } from "react-router-dom";
import "../../Style/style.css";
const FeedbackList =({data,title})=>{
    return (<div className="list-body"><h1>{title}</h1>
        <div className="tbl-header">
                        <table className="list-table">
                        <thead>
                        <tr>
                            <th>FeedbackID</th>
                            <th>Scheme Rating</th>
                            <th>Training Rating</th>
                            <th>Overall Rating</th>
                            <th>User</th>
                            <th>Scheme</th>
                            <th>Training Course</th>
                            <th className="comment">Comments</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        </table>
                        </div>
        <div className="tbl-content">
            {data.map((dat) =>(
                <div key={dat.feedBackId}>
                    <table>
                        <tbody>
                        <tr>
                    {/* <Link to={`/feedback/${dat.feedBackId}`}><h2>{dat.feedBackId} </h2> </Link> */}
                    <td> {dat.feedBackId}</td>
                    <td>{dat.schemeRating}</td>
                    <td> {dat.schemeTrainingRating}</td>
                    <td> {dat.overallRating}</td>
                    <td>
                    {dat.user ? dat.user.userId: ""}</td>
                    <td>
                    {dat.scheme ? dat.scheme.schemeName: ""}</td>
                    <td>
                    {dat.trainingCourse ? dat.trainingCourse.courseName: ""}</td>
                    <td className="comment"><p className="commentpara">{dat.comment}</p></td>
                    <td>{dat.date}</td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            ))}
        
        </div></div>
    )
}
export default FeedbackList;