import React from "react";
import logo from "../assets/logo.svg";
function Header() {
  return (
    <nav>
      <ul style={{backgroundColor:"#a9a9a9d1",padding:"25px"}}>
        <li style={{listStyle:"none"}}>
          <img style={{height:"30px"}} src={logo} alt="logo E-mart" />
        </li>
      </ul>
    </nav>
  )
}

export default Header;
