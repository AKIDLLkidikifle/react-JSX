// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom/client";
import Practice from "./practice";

const [honda, tesla] = Practice;

const {model: hundamodel, coloursByPopularity:[Hcolor], speedStats:{topSpeed:hundaspeed}} = honda;

const {model: teslamodel, coloursByPopularity:[Tcolor], speedStats:{topSpeed:teslaspeed}} = tesla;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <table>
    <thead>
      <th>Brand</th>
      <th>Top color</th>
      <th>Top speed</th>
    </thead>
    <thead>
      <td>{teslamodel}</td>
      <td>{Tcolor}</td>
      <td>{teslaspeed}</td>
    </thead>
    <thead>
      <td>{hundamodel}</td>
      <td>{Hcolor}</td>
      <td>{hundaspeed}</td>
    </thead>
  </table>
);
