import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="row footer-section">
      <div className="col-md-3 col-sm-3 col-xs-6 footer-fonts">
        <a  rel="noreferrer" target="_blank" href="https://www.facebook.com/">
          {" "}
          <i className="fa-brands fa-square-facebook" />
        </a>

        <a  rel="noreferrer" target="_blank" href="https://www.instagram.com">
          <i className="fa-brands fa-square-instagram" />{" "}
        </a>

        <a  rel="noreferrer" target="_blank" href="https://twitter.com/login">
          {" "}
          <i className="fa-brands fa-square-twitter" />{" "}
        </a>
      </div>
      <div className="col-md-4 col-sm-4 col-xs-6  footer-main">
        <img alt="bitcoin" src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=023"></img>
        <h3><b>Crypto</b>pedia</h3>
      </div>
    </div>
  );
};
export default Footer;
