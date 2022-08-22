import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="row footer-section">
      <div className="col-3 footer-fonts">
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
      <div className="col-4 footer-main">
        <img alt="bitcoin" src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=023"></img>
        <h3>Cryptopedia</h3>
      </div>
    </div>
  );
};
export default Footer;
