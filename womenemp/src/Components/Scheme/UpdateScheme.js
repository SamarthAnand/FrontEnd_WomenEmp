import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { updateSchemes } from '../../Actions/SchemeActions';
import { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import NavAdmin from '../NavAdmin';

function UpdateScheme() {
    /**
     * states and redux function calls.
     */

    const schemes = useSelector((state) => state.schemeById)
    const { schemeId } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [formValues, setFormValues] = useState(schemes);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    /**
 * @function handleChange
 * @param {event} e on Change of any event in the input box
 * @desc sets the formValues to these input values.
 */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    /**
     * @function handleSubmit
     * @param {event} e on Click of submit button
     * @desc prevents the default function of submit, 
     *          sets the formErrors if any else isSubmit == true;
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            formValues.schemeId = schemeId;
            dispatch(updateSchemes(formValues));
            navigate("/admin")
            alert("Successfully updated")
        }
    }, [formErrors])

    const validate = (value) => {
        const errors = {}
        if (!value.schemeName) {
            errors.schemeName = "Please provide scheme name"
        }
        if (!value.schemeType) {
            errors.schemeType = "Please provide scheme Type"
        }
        if (!value.schemeEligibility) {
            errors.schemeEligibility = "Please provide scheme Eligibility"
        }
        if (!value.schemeObjective) {
            errors.schemeObjective = "Please provide scheme Objective"
        }
        if (!value.launchDate) {
            errors.launchDate = "Please provide scheme date"
        }


        return errors;
    }

    return (
        <div>

            <NavAdmin />

            <Form onSubmit={handleSubmit} className="container">
                {/*Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Signed in successfully</div>
            ) : (
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )*/}


                <Form.Group as={Row} className="mb-3" controlId="schemeName">
                    <Form.Label column sm="2">Scheme Name</Form.Label>
                    <Form.Control type="text" placeholder="Scheme Name" name="schemeName"
                        onChange={handleChange} />
                </Form.Group>
                <p>{formErrors.schemeName}</p>
                <Form.Group as={Row} className="mb-3" controlId="schemeType">
                    <Form.Label column sm="2">Scheme Type</Form.Label>
                    <Form.Control type="text" placeholder="Scheme Type"
                        name="schemeType"
                        onChange={handleChange} />

                </Form.Group>
                <p>{formErrors.schemeType}</p>
                <Form.Group as={Row} className="mb-3" controlId="schemeObjective">
                    <Form.Label column sm="2">Scheme Objective</Form.Label>
                    <Form.Control type="text" placeholder="Scheme Objective"
                        name="schemeObjective"
                        onChange={handleChange} />

                </Form.Group>
                <p>{formErrors.schemeObjective}</p>
                <Form.Group as={Row} className="mb-3" controlId="schemeEligibility">
                    <Form.Label column sm="2">Scheme Eligibility</Form.Label>
                    <Form.Control type="text" placeholder="Scheme Eligibility"
                        name="schemeEligibility"
                        onChange={handleChange} />

                </Form.Group>
                <p>{formErrors.schemeEligibility}</p>
                <Form.Group as={Row} >
                    <Form.Label column sm="2">Scheme Launch Date </Form.Label>

                    <Form.Control
                        type="date"
                        name="launchDate"
                        max={new Date().toISOString().split("T")[0]}
                        placeholder="DateRange"
                        onChange={handleChange}
                    />
                </Form.Group>
                <p>{formErrors.launchDate}</p>

                <button type="submit" className="buttonBlue">
                    Update
                </button>

                <div id="loginAfter"></div>
            </Form>
        </div>
    )
}

export default UpdateScheme;