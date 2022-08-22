import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line 
import { Chart as chartJS } from "chart.js/auto";

const LineChart = (props) => {
  const { chartData } = props;

  const labelsFunc = () => {
    let totalIndex = []
    for (let index = 0; index <= chartData.values?.length; index++) {
    totalIndex.push(index)
        
    }
   return totalIndex
  };
  

  const data = {
    labels: labelsFunc(),
    datasets: [
      {
        label: chartData?.description,
        data: chartData.values?.map((item) => ({ x: item.x, y: item.y })),

        lineTension: 0,
        fill: true,
        backgroundColor: "rgba(47,153,76,0.4)",
        borderCapStyle: "butt",
        borderDash: [],

        borderDashOffset: 0.0,
        borderColor: "#F8A847",
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(47,153,76,1)",
        pointBackgroundColor: "#fff",
        pointHoverBackgroundColor: "rgba(47,153,76,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointRadius: 1,
        pointHitRadius: 20,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 20,
          },
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: chartData.unit,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return value.toFixed(2) + " BTC";
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Quantity ",
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            return value;
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};
export default LineChart;
