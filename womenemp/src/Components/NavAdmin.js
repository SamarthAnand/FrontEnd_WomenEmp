import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavAdmin() {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    navigate("/")
  }
  const handleHome = ()=>{
    navigate("/admin")
  }
  return (
    <div>
      <nav className="navbarCustom">
        <span>Women Empowerment</span>
        <div>
          <button type="button" class="btn btn-outline-light" onClick={handleLogout} >Logout</button>
          <button type="button" class="btn btn-outline-light" onClick={handleHome} >Home</button>
        </div>
      </nav>
    </div>
  );
}

export default NavAdmin;
