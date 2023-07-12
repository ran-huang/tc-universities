import React from 'react';
import { pkuRed } from '../styles/color';
import '../css/sidebar.css'

function Sidebar() {
  const sidebarStyle = {
    position: "fixed",
    top: "calc(30%+550px)",
    left: '0',
    transform: 'translate(0, -50%)',
    padding: '20px',
    color: pkuRed,
  }

  const sidebarWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "end",
  }

  const aStyle = {
    margin: '10px',
  }

  return (
    <div style={sidebarStyle}>
      <div style={sidebarWrapperStyle}>
        <a href="#title1" style={aStyle}>Title 1</a>
        <a href="#title2" style={aStyle} className="active">Title 2</a>
        <a href="#title2" style={aStyle}>Title 3</a>
        <a href="#title2" style={aStyle}>Title 4</a>
        <a href="#title2" style={aStyle}>Title 5</a>
        {/* 更多链接... */}
      </div>

    </div>
  );
}

export default Sidebar;