import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

function FeedbackBy({data}) {

  return (
    
    <div class="mx-auto" style={{ width: "500px"}}>
        <Card>
            <Card.Body>
                <Card.Title>Feedback Details</Card.Title>
                <Card.Text>
                    Comments: {data.comment}
                </Card.Text>
                <ListGroup className="List-group-flush">
                    <ListGroup.Item>Feedback Id : {data.feedBackId}</ListGroup.Item>
                    <ListGroup.Item>Scheme Rating : {data.schemeRating}</ListGroup.Item>
                    <ListGroup.Item>Training Rating : {data.schemeTrainingRating}</ListGroup.Item>
                    <ListGroup.Item>Overall Rating : {data.overallRating}</ListGroup.Item>
                    <ListGroup.Item>User : {data.user ? data.user.userId:"--"}</ListGroup.Item>
                    <ListGroup.Item>Scheme : {data.scheme ? data.scheme.schemeName:"--"}</ListGroup.Item>
                    <ListGroup.Item>Training Course : {data.trainingCourse ? data.trainingCourse.courseName:"--"}</ListGroup.Item>

                </ListGroup>
            </Card.Body>
        </Card>

    </div>)
}
export default FeedbackBy;