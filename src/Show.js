import React, { Component } from "react";
import { Line, Doughnut, HorizontalBar } from "react-chartjs-2";
import "./Show.css";

//right now, we have bootcampObj in the second console.log
//I need to load up info from this prop only after it is loaded
function Show(props) {
  let lineData = {
    labels: ["0", "90 days", "180 days"],
    datasets: [
      {
        label: "Median Salary",
        backgroundColor: "rgba(106, 54, 217, 0.5)",
        // backgroundColor: "#4EA6B0",
        data: [],
        borderWidth: 1,
        borderColor: "#FFFFFF"
      }
    ]
  };

  let lineOptions = { responsive: true, maintainAspectRatio: true };

  let doughnutData = {
    labels: [],
    datasets: [
      {
        label: "Median Salary",
        backgroundColor: [
          "#222640",
          "#4EA6B0",
          "#F2CA80",
          "#F28B66",
          "#F26052"
        ],
        data: [],
        borderWidth: 1,
        borderColor: "#FFFFFF"
      }
    ]
  };
  let doughnutOptions = { responsive: true, maintainAspectRatio: true };

  let employmentResultsData = {
    labels: ["90 days", "180 days"],
    datasets: [
      {
        label: "Employed in field",
        backgroundColor: ["rgba(106, 54, 217, 0.5)", "rgba(106, 54, 217, 0.5)"],
        data: [],
        borderWidth: 1,
        borderColor: "#FFFFFF"
      },
      {
        label: "Employed out of field",
        backgroundColor: ["rgba(54, 154, 217, 0.5)", "rgba(54, 154, 217, 0.5)"],
        data: [],
        borderWidth: 1,
        borderColor: "#FFFFFF"
      },
      {
        label: "Nonreporting",
        backgroundColor: [],
        data: [],
        borderWidth: 1,
        borderColor: "#FFFFFF"
      },
      {
        label: "Not Employed",
        borderColor: "rgba(193, 108, 62, 1)",
        backgroundColor: [
          "rgba(193, 108, 62, 0.50)",
          "rgba(193, 108, 62, 0.50)"
        ],
        data: [],
        borderWidth: 1,
        borderColor: "#FFFFFF"
      }
    ]
  };
  let employmentResultsOptions = {
    responsive: true,
    maintainAspectRatio: true,
    tooltips: {
      mode: "label"
    },
    elements: {
      line: {
        fill: false
      }
    },
    scales: {
      xAxes: [
        { stacked: true },
        {
          ticks: {
            min: 0
          }
        }
      ],
      yAxes: [{ stacked: true }]
    }
  };

  let salaryRangePercentagesData = {
    labels: ["90 days", "180 days"],
    datasets: [
      {
        label: "Range1",
        backgroundColor: ["rgba(106, 54, 217, 0.5)", "rgba(106, 54, 217, 0.5)"],
        data: [],
        borderWidth: 1,
        borderColor: "#FFFFFF"
      },
      {
        label: "Range2",
        backgroundColor: ["rgba(54, 154, 217, 0.5)", "rgba(54, 154, 217, 0.5)"],
        data: [],
        borderWidth: 1,
        borderColor: "#FFFFFF"
      },
      {
        label: "Range3",
        backgroundColor: ["rgba(217, 54, 54, 0.5)", "rgba(217, 54, 54, 0.5)"],
        data: [],
        borderWidth: 1,
        borderColor: "#FFFFFF"
      },
      {
        label: "Range4",
        borderColor: "rgba(193, 108, 62, 1)",
        backgroundColor: [
          "rgba(193, 108, 62, 0.50)",
          "rgba(193, 108, 62, 0.50)"
        ],
        data: [],
        borderWidth: 1,
        borderColor: "#FFFFFF"
      },
      {
        label: "Range5",
        backgroundColor: ["rgba(217, 54, 132, 0.5)", "rgba(217, 54, 132, 0.5)"],
        data: [],
        borderWidth: 1,
        borderColor: "#FFFFFF"
      },
      {
        label: "Range6",
        backgroundColor: ["rgba(3, 87, 140, 0.5)", "rgba(3, 87, 140, 0.5)"],
        data: [],
        borderWidth: 1,
        borderColor: "#FFFFFF"
      }
    ]
  };
  let salaryRangePercentagesOptions = {
    responsive: true,
    maintainAspectRatio: true,
    tooltips: {
      mode: "label"
    },
    elements: {
      line: {
        fill: false
      }
    },
    scales: {
      xAxes: [
        { stacked: true },
        {
          ticks: {
            min: 0
          }
        }
      ],
      yAxes: [{ stacked: true }]
    }
  };

  let bootcampName = () => {
    let camelCaseBootcampName = props.match.params.id;
    let uncapitalizedSplitBootcampName = camelCaseBootcampName.replace(
      /([a-z])([A-Z])/g,
      "$1 $2"
    );

    let capitalizedSplitBootcampName =
      uncapitalizedSplitBootcampName[0].toUpperCase() +
      uncapitalizedSplitBootcampName.substring(1);

    return capitalizedSplitBootcampName;
  };
  let employmentResults = {};
  let gradsIncluded = 0;
  let graduationsOnTime = 0;
  let jobTitles = {};
  let medianSalary = {};
  let reportingPeriod = {};
  let salaryRangePercentages = {};
  let salaryRangeKeys = [];
  let jobTitlesArr = [];

  const waitForBootcampsObjFetch = () => {
    if (props.bootcampsObj[props.match.params.id] && props.bootcampsObj) {
      employmentResults =
        props.bootcampsObj[props.match.params.id].employmentResults;
      gradsIncluded = props.bootcampsObj[props.match.params.id].gradsIncluded;
      medianSalary = props.bootcampsObj[props.match.params.id].medianSalary;
      salaryRangePercentages =
        props.bootcampsObj[props.match.params.id].salaryRangePercentages;
      salaryRangeKeys = Object.keys(salaryRangePercentages["90Days"]);
      console.log(salaryRangeKeys);
      lineData.datasets[0].data = [
        0,
        medianSalary["90Days"],
        medianSalary["180Days"]
      ];
      jobTitlesArr = Object.keys(
        props.bootcampsObj[props.match.params.id].jobTitles
      );
      doughnutData.labels = jobTitlesArr;
      jobTitlesArr.forEach(jobTitle => {
        doughnutData.datasets[0].data.push(
          props.bootcampsObj[props.match.params.id].jobTitles[jobTitle] * 100
        );
      });

      employmentResultsData.datasets[0].data = [
        (employmentResults["90Days"]["employedInField"] * 100).toFixed(2),
        (employmentResults["180Days"]["employedInField"] * 100).toFixed(2)
      ];

      employmentResultsData.datasets[1].data = [
        (employmentResults["90Days"]["employedOutOfField"] * 100).toFixed(2),
        (employmentResults["180Days"]["employedOutOfField"] * 100).toFixed(2)
      ];

      employmentResultsData.datasets[2].data = [
        (employmentResults["90Days"]["nonReporting"] * 100).toFixed(2),
        (employmentResults["180Days"]["nonReporting"] * 100).toFixed(2)
      ];

      employmentResultsData.datasets[3].data = [
        (employmentResults["90Days"]["notEmployed"] * 100).toFixed(2),
        (employmentResults["180Days"]["notEmployed"] * 100).toFixed(2)
      ];

      salaryRangePercentagesData.datasets[0].label = salaryRangeKeys[5];
      salaryRangePercentagesData.datasets[1].label = salaryRangeKeys[0];
      salaryRangePercentagesData.datasets[2].label = salaryRangeKeys[1];
      salaryRangePercentagesData.datasets[3].label = salaryRangeKeys[2];
      salaryRangePercentagesData.datasets[4].label = salaryRangeKeys[3];
      salaryRangePercentagesData.datasets[5].label = salaryRangeKeys[4];

      let key1 = salaryRangeKeys[5];
      let key2 = salaryRangeKeys[0];
      let key3 = salaryRangeKeys[1];
      let key4 = salaryRangeKeys[2];
      let key5 = salaryRangeKeys[3];
      let key6 = salaryRangeKeys[4];

      salaryRangePercentagesData.datasets[0].data = [
        salaryRangePercentages["90Days"][key1],
        salaryRangePercentages["180Days"][key1]
      ];

      salaryRangePercentagesData.datasets[1].data = [
        salaryRangePercentages["90Days"][key2],
        salaryRangePercentages["180Days"][key2]
      ];

      salaryRangePercentagesData.datasets[2].data = [
        salaryRangePercentages["90Days"][key3],
        salaryRangePercentages["180Days"][key3]
      ];

      salaryRangePercentagesData.datasets[3].data = [
        salaryRangePercentages["90Days"][key4],
        salaryRangePercentages["180Days"][key4]
      ];

      salaryRangePercentagesData.datasets[4].data = [
        salaryRangePercentages["90Days"][key5],
        salaryRangePercentages["180Days"][key5]
      ];

      salaryRangePercentagesData.datasets[5].data = [
        salaryRangePercentages["90Days"][key6],
        salaryRangePercentages["180Days"][key6]
      ];
    }
  };

  return (
    <div className="background">
      <div className="ui centered raised card">
        <h1 style={{ color: "#5c6566" }}>{bootcampName()}</h1>
      </div>
      {props.bootcampsObj[props.match.params.id] && props.bootcampsObj
        ? waitForBootcampsObjFetch()
        : "loading..."}

      <div className="ui grid container">
        <div className="eight wide column">
          <div
            className="ui raised card mediansalary"
            style={{ width: "500px" }}
          >
            <h2 style={{ color: "#5c6566" }}>Median Salary</h2>
            <Line options={lineOptions} data={lineData} />
          </div>
        </div>

        <div className="eight wide column">
          <div className="ui raised card jobtitles" style={{ width: "500px" }}>
            <h2 style={{ color: "#5c6566" }}>Most Frequent Job Titles</h2>
            <Doughnut options={doughnutOptions} data={doughnutData} />
          </div>
        </div>

        <div className="eight wide column">
          <div
            className="ui raised card employmentresults"
            style={{ width: "500px" }}
          >
            <h2 style={{ color: "#5c6566" }}>Employment Results</h2>
            <HorizontalBar
              options={employmentResultsOptions}
              data={employmentResultsData}
            />
          </div>
        </div>

        <div className="eight wide column">
          <div
            className="ui raised card salaryrange"
            style={{ width: "500px" }}
          >
            <h2 style={{ color: "#5c6566" }}>Salary Ranges</h2>
            <HorizontalBar
              options={salaryRangePercentagesOptions}
              data={salaryRangePercentagesData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
