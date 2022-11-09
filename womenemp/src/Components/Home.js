import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SchemesView from './Scheme/SchemesView';
import Nav from './Nav'
import { fetchSchemes } from '../Actions/SchemeActions';
import { fetchTrainee } from '../Actions/TraineeActions';
import { Link } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const schemes = useSelector((state) => state.allSchemes.schemes)
  const user = useSelector((state) => state.user)
  const handleScheme = ()=>{
    document.getElementById('schemes').style.display = "block";
    document.getElementById('ngos').style.display = "none";
  }
  const handleNgo = ()=> {
    document.getElementById('schemes').style.display = "none";
    document.getElementById('ngos').style.display = "block";
  }
  useEffect(()=>{
    dispatch(fetchTrainee(user.userId))
    dispatch(fetchSchemes())
    document.getElementById('schemes').style.display = "none";
    document.getElementById('ngos').style.display = "none";
  },[])
  // console.log(schemes)
  return (
    <div>
        <Nav />
        <button className='buttonBlue' onClick={handleScheme}> View Schemes</button>
        <button className='buttonBlue' onClick={handleNgo}> View NGOs</button>
        <div id='schemes'><SchemesView schemes={schemes} /></div>
        <div id='ngos'></div>
        <Link to="/feedback">Add new Feedback</Link>
    </div>
  )
}

export default Home