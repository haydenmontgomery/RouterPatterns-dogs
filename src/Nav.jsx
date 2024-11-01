import React from "react";
import { Link } from "react-router-dom";

const Nav = ({dogs}) => {
  
  return (
    <nav className="NavBar">
      {dogs.map(({ name, age, src, facts }, idx) => (
        <button key={idx}><Link to={`/dogs/${name}`} >
        {String(name).charAt(0).toUpperCase() + String(name).slice(1)}
      </Link>
      </button>

      ))}
    </nav>
  );
}

export default Nav;