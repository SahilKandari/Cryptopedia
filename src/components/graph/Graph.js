import "./Graph.css";
import React, { useState, useEffect } from "react";

import { chart_api_url } from "../../backend";
import axios from "axios";
import LineChart from "./LineChart";

const Graph = () => {
  const [poolingData, setPoolingpoolingData] = useState({});
  const [timeSpan, setTimeSpan] = useState("1weeks");
  const [timeFormat, setTimeFormat] = useState("1hours");
 
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
 
  let oneCurrency = true;
  useEffect(() => {
    if (oneCurrency) {
      oneCurrency = false;
      axios
        .get(
          `${chart_api_url}timespan=${timeSpan}&rollingAverage=${timeFormat}&format=json`
        )
        .then((res) => {
          setPoolingpoolingData(res.data);
          
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [timeSpan, timeFormat]);

  return (
    <div className=" row graph-section">
      <div className="col-2 graph-buttons">
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
      <div className="col-10 graph-chart">
        <LineChart chartData={poolingData} />
      </div>
    </div>
  );
};
export default Graph;
