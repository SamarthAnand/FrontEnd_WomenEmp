import React from 'react'
import { useEffect } from "react";
import SchemesView from "./SchemesView";
import { useSelector, useDispatch } from "react-redux";
import { fetchSchemes } from "../../Actions/SchemeActions"


function SchemesList() {
    const schemes = useSelector((state) => state.allSchemes.schemes)
    const dispatch = useDispatch() 
    useEffect(() => {
        dispatch(fetchSchemes())
    }, []);
    return (
        <div>
            <SchemesView schemes={schemes} />

        </div>
    );
}

export default SchemesList