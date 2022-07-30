import React from "react";
import { Link } from "react-router-dom";

export const Main = () => {
  return <div>
    <h1>My projects</h1>
    <ul>
      <li>
        <Link to='/calc'> 
          Calculator
        </Link>
      </li>
    </ul>
  </div>
};