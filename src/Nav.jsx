import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  
  return (
    <nav className="NavBar">
      <Link to="/dogs/duke" >
        Duke
      </Link>
      <Link to="/dogs/perry" >
        Perry
      </Link>
      <Link to="/dogs/tubby" >
        Tubby
      </Link>
      <Link to="/dogs/whiskey" >
        Whiskey
      </Link>
    </nav>
  );
}

export default Nav;