import React from 'react';
import data from "../data.json"
import "../css/tableview.css"

const tdStyle = {
  padding: "10px",
  textAlign: "left",
}

function TableHeader(props) {
  const tableHeaderData = {
    "university": "高校",
    "school": "学院",
    "course": "课程",
    "lecturer": "授课老师",
    "audience": "授课对象",
    "startYear": "开课年份",
    "courseURL": "课程网址",
    "note": "备注"
  }

  const thKeys = Object.keys(tableHeaderData);

  return (
    <thead>
      <tr>
        {thKeys.map((key, index) => (
          <th key={`key`} style={tdStyle}>{tableHeaderData[key]}</th>
        ))}
      </tr>
    </thead>
  )

}

function TableBody(props) {
  const cityData = data[props.city];

  return (
    <tbody>
        {
          cityData.map((row, index) => (
            <tr key={`row-${index}`}>
              <td className="university" style={tdStyle}>{row.university}</td>
              <td className="school" style={tdStyle}>{row.school}</td>
              <td className="course" style={tdStyle}>{row.course}</td>
              <td className="lecturer" style={tdStyle}>{row.lecturer}</td>
              <td className="audience" style={tdStyle}>{row.audience}</td>
              <td className="startYear" style={tdStyle}>{row.startYear}</td>
              <td className="courseURL" style={tdStyle}>{row.courseURL}</td>
              <td className="note" style={tdStyle}>{row.note}</td>
            </tr>
          ))
        }
      </tbody>
  )
}

function TableView(props) {

  const city = props.city;

  const tableStyle = {
    maxWidth: "800px",
  }

  return (
    <table style={tableStyle}>
      <TableHeader />
      <TableBody city={city}/>
    </table>
  );
}

export default TableView;