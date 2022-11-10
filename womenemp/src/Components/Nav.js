import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const handleProfile = ()=>{
    navigate("/home/profile")
  }
  const handleLogout = ()=>{
    navigate("/")
  }
  return (
    <div>
      <nav id="navbar">
        <span>Women Empowerment</span>
        <div>
          <button type="button" class="btn btn-outline-light" onClick={handleProfile}>MyProfile</button>
          <button type="button" class="btn btn-outline-light" onClick={handleLogout} >Logout</button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
