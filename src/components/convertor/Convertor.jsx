import "./Convertor.css";
import React, { useEffect, useState } from "react";
import { convertor_api_url } from "../../backend";
import { info_api_url } from "../../backend";
import axios from "axios";

const Convertor = () => {
  const [currencyObj, setCurrencyObj] = useState({});
  const [priceChange, setPriceChange] = useState("");
  const [countryChange, setCountryChange] = useState("");
  const [bitcoinPrice, setBitcoinPrice] = useState("");

  const getPrice = () => {
    axios
      .get(`${convertor_api_url}${countryChange}&value=${priceChange}`)
      .then((res) => {
        setBitcoinPrice(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // let oneCurrency = true;
  useEffect(() => {
    // if (oneCurrency) {
    //   oneCurrency = false;
    axios
      .get(`${info_api_url}`)
      .then((res) => {
        setCurrencyObj(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // }
  }, []);

  let counteryCodes = [];
  for (const key in currencyObj) {
    counteryCodes.push({ country: key });
  }

  const countrySelectHandler = (event) => {
    setCountryChange(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    getPrice();
    setPriceChange("");
    setCountryChange("");
  };
  return (
    <div className="row convertor-section">
      <div className="col-6 convertor-bitcoin">
        <div className="row ">
          <h3 className="col-12 text-center my-4">Convert to Bitcoin</h3>
          <h2 className="col-12 text-center my-4">{bitcoinPrice}</h2>
        </div>

        <form onSubmit={formSubmitHandler} className="row convertor-form  ">
          <div className="convertor-form">
            <input
              value={priceChange}
              onChange={(e) => setPriceChange(e.target.value)}
              type="number"
              className="form-control my-3 "
            />

            <select
              onChange={countrySelectHandler}
              className="form-select my-3"
            >
              <option defaultValue>Country Code</option>
              {counteryCodes?.map((code) => {
                return <option key={code.country}>{code.country}</option>;
              })}
            </select>
          </div>
          <div className="row convertor-button my-4">
            <button type="submit" className="btn col-3 btn-secondary">
              Get Price
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Convertor;
