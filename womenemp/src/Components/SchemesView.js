import React from 'react'

export default function SchemesView({ schemes }) {
    return (
        <div className='tableContainer'>  
            <div className="grid" id="schemeHead">
                <div>ID</div>
                <div>Scheme Name</div>
                <div>Objective</div>
                <div>Eligibility</div>
                <div>Launch Date</div>
                <div>Type</div>

            </div>
            {schemes && schemes.map((scheme) => (
                <div className="grid" key={scheme.schemeId}>
                    <div>{scheme.schemeId}</div>
                    <div>{scheme.schemeName}</div>
                    <div>{scheme.schemeObjective}</div>
                    <div>{scheme.schemeEligibility}</div>
                    <div>{scheme.launchDate}</div>
                    <div>{scheme.schemeType}</div>

                </div>
            ))}
        </div>
    )
}
