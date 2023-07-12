import React from "react";
import TableView from "./TableView.js";
import Map from "./Map.js";
import data from "../data.json";
import { pkuRed } from "../styles/color.js";
import boyata from "../img/pku-boyata.png";

function CitySection(props) {
  const sectionStyle = {
    marginBottom: "50px",
    overflowX: "auto",
  };

  const titleStyle = {
    marginTop: "20px",
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "30px",
  };
  const decorStyle = {
    display: "inline-block",
    position: "relative",
    top: "-20px",
    left: "0px",
    width: "30px",
    margin: "0",
    borderTop: `5px solid ${pkuRed}`,
    borderRadius: "3px",
  }

  return (
    <div style={sectionStyle}>
      <h2 className="cityTitle" style={titleStyle}>
        {props.city}
      </h2>
      <div style={decorStyle}></div>
      <TableView city={props.city} />
    </div>
  );
}

function CitySections() {
  const contentStyle = {
    position: "relative",
    margin: "0 auto",
    marginTop: "80px",
    marginBottom: "100px",
    maxWidth: '1200px',
    width: '80%',
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

// function SectionSplit() {
//   const splitStyle = {
//     borderTop: "1px solid #fcdcdc",
//     width: "100%",
//   };
//   return <div style={splitStyle}></div>;
// }

export default function Content() {
  const contentStyle = {
    marginTop: "20px",
    background: `url(${boyata}) right bottom no-repeat`,
    backgroundSize: "20% auto",
    zIndex: "1",
  }
  return (
    <div style={contentStyle}>
      <Map />
      <CitySections />
    </div>
  );
}
