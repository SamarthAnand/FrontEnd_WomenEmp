import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTrainee } from '../../Actions/TraineeActions';

export default function SchemesView({ schemes }) {
    const dispatch = useDispatch();
    const trainee = useSelector((state) => state.trainee)
    const handleClick = (course)=> {
        trainee.trainingCourse = course;
        dispatch(updateTrainee(trainee))
        alert("successfully enrolled")
    }
    return (
        <div className='tableContainer'>  
            <div className="grid" id="schemeHead">
                <div>ID</div>
                <div>Scheme Name</div>
                <div>Objective</div>
                <div>Eligibility</div>
                <div>Launch Date</div>
                <div>Type</div>
                <div>Course Name</div>
                <div>Enroll</div>

            </div>
            {schemes && schemes.map((scheme) => (
                <div className="grid" key={scheme.schemeId}>
                    <div>{scheme.schemeId}</div>
                    <div>{scheme.schemeName}</div>
                    <div>{scheme.schemeObjective}</div>
                    <div>{scheme.schemeEligibility}</div>
                    <div>{scheme.launchDate}</div>
                    <div>{scheme.schemeType}</div>
                    <div>{scheme.trainingCourse.courseName}</div>
                    <div><button className='buttonBlue' onClick={() =>handleClick(scheme.trainingCourse)}>Enroll</button></div>
                </div>
            ))}
        </div>
    )
}
