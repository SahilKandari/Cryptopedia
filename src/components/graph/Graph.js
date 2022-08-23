import "./Graph.css";
import React, { useState, useEffect } from "react";

import { chart_api_url } from "../../backend";
import axios from "axios";
import LineChart from "./LineChart";

const Graph = () => {
  const [poolingData, setPoolingpoolingData] = useState({});
  const [timeSpan, setTimeSpan] = useState("1weeks");
  const [timeFormat, setTimeFormat] = useState("1hours");
  const [loading, setLoading] = useState(false);

  //   const [chartpoolingData, setChartpoolingData] = useState({
  //     poolingDatasets: [
  //       {
  //         // poolingData: [{x:20, y:10}, {x:10, y:20},{x:20, y:10}, {x:10, y:20},{x:20, y:10}, {x:10, y:20},],
  //         poolingData: poolingData.values?.map((item) => ({ x: item.x, y: item.y })),
  //         label: "The number of Bitcoin transactions added to the mempool per second."
  //       },
  //     ],
  //     // labels: poolingData.values?.map((item, index) => index),
  //   });

  // let oneCurrency = true;
  useEffect(() => {
    // if (oneCurrency) {
    //   oneCurrency = false;
    setLoading(true);
    axios
      .get(
        `${chart_api_url}timespan=${timeSpan}&rollingAverage=${timeFormat}&format=json&cors=true`
      )
      .then((res) => {
        setPoolingpoolingData(res.data);
        console.log("res.data",res.data);
      })
      .catch((err) => {
        console.log("error",err.message);
      });

    // }
    setLoading(false);
  }, [timeSpan, timeFormat]);

  return (
    <div className=" row graph-section">
      <div className="col-md-2 col-sm-12 graph-buttons">
        <div className="row ">
          <button
            onClick={() => setTimeSpan("1days")}
            className="btn my-1 btn-secondary"
          >
            24 Hours
          </button>
          <button
            onClick={() => setTimeSpan("1weeks")}
            className="btn my-1 btn-secondary"
          >
            7 Days
          </button>
          <button
            onClick={() => setTimeSpan("1months")}
            className="btn my-1 btn-secondary"
          >
            30 Days
          </button>
          <button
            onClick={() => setTimeSpan("12months")}
            className="btn my-1 btn-secondary"
          >
            12 Months
          </button>
          <button
            onClick={() => setTimeSpan("36months")}
            className="btn my-1 btn-secondary"
          >
            3 Years
          </button>
          <button
            onClick={() => setTimeSpan("60months")}
            className="btn my-1 btn-secondary"
          >
            5 Years
          </button>
        </div>
        <div className="row">
          <h5>Select Format</h5>
          <button
            onClick={() => setTimeFormat("1minutes")}
            className="btn my-1 btn-secondary"
          >
            Per Minute
          </button>
          <button
            onClick={() => setTimeFormat("1hours")}
            className="btn my-1 btn-secondary"
          >
            Per Hour
          </button>
          <button
            onClick={() => setTimeFormat("24hours")}
            className="btn my-1 btn-secondary"
          >
            Per Day
          </button>
        </div>
      </div>
      {!loading && (
        <div className="col-md-10 col-sm-12 graph-chart">
          {loading && <h3>Loading...</h3>}
          <LineChart chartData={poolingData} />
        </div>
      )}
      {loading && (
        <div className="col-md-10 col-sm-12 graph-chart-loading">
          <h3>Loading...</h3>
        </div>
      )}
    </div>
  );
};
export default Graph;
