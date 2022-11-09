import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const handleProfile = ()=>{
    navigate("/home/profile")
  }
  return (
    <div>
      <nav id="navbar">
        <span>Women Empowerment</span>
        <div>
          <button onClick={handleProfile}>MyProfile</button>
          <button>Logout</button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
