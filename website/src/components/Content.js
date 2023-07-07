import React from "react";
import TableView from "./TableView.js";
import Map from "./Map.js";
import data from "../data.json";
import boyata from "../img/pku-boyata.png";

function CitySection(props) {
  const titleStyle = {
    fontWeight: "bold",
    fontSize: "30px",
    marginTop: "20px",
    marginBottom: "20px",
  };
  const sectionStyle = {
    marginBottom: "50px",
    overflowX: "auto",
  };

  return (
    <div style={sectionStyle}>
      <h2 className="cityTitle" style={titleStyle}>
        {props.city}
      </h2>
      <TableView city={props.city} />
    </div>
  );
}

function CitySections() {
  const contentStyle = {
    position: "relative",
    margin: "auto",
    marginTop: "80px",
    marginBottom: "100px",
    maxWidth: "800px",
    width: "80%",
  };

  const cityList = Object.keys(data);

  return (
    <div style={contentStyle}>
      {cityList.map((city, index) => {
        return <CitySection city={city} key={index} />;
      })}
    </div>
  );
}

function SectionSplit() {
  const splitStyle = {
    borderTop: "1px solid #fcdcdc",
    width: "100%",
  };
  return <div style={splitStyle}></div>;
}

export default function Content() {
  const contentStyle = {
    marginTop: "20px",
    background: `url(${boyata}) right bottom no-repeat`,
    backgroundSize: "20% auto"
  }
  return (
    <div style={contentStyle}>
      <Map />
      <CitySections />
    </div>
  );
}
