import "./Navigation.css";
import React from "react";
import {  NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="row navigation-section">
      <div className="col-6 navigation-heading ">
        <img alt="bitcoin" src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=023"></img>
        <h2>Cryptopedia</h2>
      </div>
      {/* <div className="col-6 navigation-list"> */}
        <ul className="col-6 navigation-list"> 
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
      {/* </div> */}
    </div>
  );
};
export default Navigation;
