import "./Home.css";
import React, { Fragment } from "react";

import AllCards from "./AllCards";

const Home = () => {
  return (
    <Fragment>
      {" "}
      <div className="row home-section ">
        <div className="col-12 home-head">
          <h2 className="text-center">Welcome to Cryptopedia...</h2>
        </div>
        <div className="row home-body">
          {" "}
          <div className="col-8">
            <p>
              You can't stop thing's like Bitcoin. It will be everywhere and the
              world will be readjust. World government will have to readjust.
              John Mcfree.
            </p>
          </div>
        </div>
      <AllCards />
      </div>
    </Fragment>
  );
};
export default Home;
