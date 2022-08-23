import "./Navigation.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [showNav, setShowNav]= useState(false)
  
  return (
    <div className="row navigation-section">
      <div className="col-6  navigation-heading ">
        <img
          alt="bitcoin"
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=023"
        ></img>
        <h2>
          <b>Crypto</b>pedia
        </h2>
      </div>
      {/* <div className="col-6 navigation-list"> */}
      <ul className="col-6   navigation-list">
      
        <li>
          {" "}
          <NavLink activeClassName="activeNavLink" to="/home">
            Home
          </NavLink>
        </li>

        <li>
          {" "}
          <NavLink activeClassName="activeNavLink" to="/convertor">
            Convertor
          </NavLink>
        </li>

        <li>
          {" "}
          <NavLink activeClassName="activeNavLink" to="/graph">
            Graphs
          </NavLink>
        </li>
      </ul>
      <ul className="col-6 navigation-list-small">
      <li>
          <button onClick={()=> setShowNav(!showNav)}  className="btn">
            <i class="fa fa-bars text-white"></i>
          </button>
        </li>
       {showNav && <li>
          {" "}
          <NavLink activeClassName="activeNavLink-small" to="/home">
            Home
          </NavLink>
        </li>}

       {showNav && <li>
          {" "}
          <NavLink activeClassName="activeNavLink-small" to="/convertor">
            Convertor
          </NavLink>
        </li>}

      {showNav &&  <li>
          {" "}
          <NavLink activeClassName="activeNavLink-small" to="/graph">
            Graphs
          </NavLink>
        </li>}
      
      </ul>

      {/* </div> */}
    </div>
  );
};
export default Navigation;
