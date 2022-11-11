import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SchemesView from './Scheme/SchemesView';
import Nav from './Nav'
import { fetchSchemes } from '../Actions/SchemeActions';
import { fetchTrainee } from '../Actions/TraineeActions';
import { fetchNgos } from '../Actions/NgoActions';
import { Link, useNavigate } from 'react-router-dom';
import NgosView from './NGO/NgosView';

function Home() {
  const dispatch = useDispatch();
  const schemes = useSelector((state) => state.allSchemes.schemes)
  const ngos = useSelector((state) => state.allNgos.ngos)
  const user = useSelector((state) => state.user)
  const navigate = useNavigate();
  const handleScheme = ()=>{
    document.getElementById('schemes').style.display = "block";
    document.getElementById('ngos').style.display = "none";
  }
  const handleNgo = ()=> {
    document.getElementById('schemes').style.display = "none";
    document.getElementById('ngos').style.display = "block";
  }
  const handleFeed = ()=>{
    navigate("/feedback/home")
  }
  useEffect(()=>{
    dispatch(fetchTrainee(user.userId))
    dispatch(fetchSchemes())
    dispatch(fetchNgos())
    document.getElementById('schemes').style.display = "none";
    document.getElementById('ngos').style.display = "none";
  },[])
  // console.log(schemes)
  return (
    <div>
        <Nav />
        <button className='buttonBlue' onClick={handleScheme}> View Schemes</button>
        <button className='buttonBlue' onClick={handleNgo}> View NGOs</button>
        <button className='buttonBlue' onClick={handleFeed}> Feedback</button>
        <div id='schemes'><SchemesView schemes={schemes} /></div>
        <div id='ngos'><NgosView ngos={ngos} /></div>
    </div>
  )
}

export default Home