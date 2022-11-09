import React from "react";

function SearchResult({trainee}){
        return(
                <div className="table">
                    <table>
            <tr>
                <th>Id</th>
                <th>Course Name</th>
                <th>Course Duration</th>
                <th>Starting date</th>
                <th>Ending Date</th>
                <th>Course Completion Status</th>
            </tr>
            <tr>
                <th>{trainee.trainingCourseId}</th>
                <th>{trainee.courseName}</th>
                <th>{trainee.courseDuration}</th>
                <th>{trainee.startingDate}</th>
                <th>{trainee.endingDate}</th>
                <th>{trainee.courseCompletionStatus}</th>
            </tr>
            </table>
                </div>
        );
}
export default SearchResult;