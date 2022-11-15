import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

/**
 * @function SchemesBy
 * @param {data}  props
 * @desc searches schemes on the basis of id, type and launchDate 
 * has update and delete properties too.
 */
function SchemesBy({ data }) {

    /**
     * states and redux function calls.
     */
    const navigate = useNavigate();
    const [schemes, setSchemes] = useState([])
    const [del, setDel] = useState(false);
    const { schemeId } = useParams()

    /**
 * @function deleteCourse
 * @param {schemeId}  on Click of delete button
 * @desc sets Delete == true;
 * sends a async request to delete api 
 * alert shown
 * navigate back to admin page.
 */
    const deleteCourse = async (schemeId) => {
        setDel(true);
        await axios.delete(`http://localhost:8202/api/Schemes/${schemeId}`)
        alert("Scheme deleted.")
        navigate('/admin');

    }


    return (

        <div className="mx-auto" style={{ width: "500px" }}>
            <Card>
                <Card.Body>
                    <Card.Title>Scheme Search Details</Card.Title>

                    <ListGroup className="List-group-flush">
                        <ListGroup.Item>Scheme Id : {data.schemeId}</ListGroup.Item>
                        <ListGroup.Item>Scheme Name : {data.schemeName}</ListGroup.Item>
                        <ListGroup.Item>Scheme Type : {data.schemeType}</ListGroup.Item>
                        <ListGroup.Item>Scheme Objective : {data.schemeObjective}</ListGroup.Item>
                        <ListGroup.Item>Scheme Eligibility: {data.schemeEligibility}</ListGroup.Item>
                        <ListGroup.Item>Scheme Launch Date : {data.launchDate}</ListGroup.Item>

                    </ListGroup>
                </Card.Body>
                <Link to={`/admin/update-scheme/${data.schemeId}`} className="btn btn-outline-primary shadow mx-2">Update</Link>

                <button className="btn btn-danger border shadowmx-2" onClick={() => deleteCourse(data.schemeId)}>Delete</button>

            </Card>



        </div>

    )
}
export default SchemesBy;