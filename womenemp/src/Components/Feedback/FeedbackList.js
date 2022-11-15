
//handles viewing all feeedbacks by admin 

const FeedbackList =({data,title})=>{
    return (<div className="feedhome">
    <div className="list-body"><h2>All Feedbacks</h2>
        <div className="tbl-header">
                        <table className="list-table">
                        <thead>
                        <tr>
                            <th>FeedbackID</th>
                            <th>Scheme Rating</th>
                            <th>Training Rating</th>
                            <th>Overall Rating</th>
                            <th>User ID</th>
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
                    {dat.trainingCourse ? dat.trainingCourse.courseName: ""}</td>
                    <td><p>{dat.comment}</p></td>
                    <td>{dat.date}</td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            ))}
        
        </div></div></div>
    )
}
export default FeedbackList;
