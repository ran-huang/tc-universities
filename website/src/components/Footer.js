import React from 'react';
import { footerColor } from '../styles/color';
import logo from '../img/pku-logo.png'

const Footer = () => {
  const footerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // width: '100%',
    backgroundColor: footerColor,
    color: 'white',
    textAlign: 'center',
    paddingTop: '30px',
    paddingBottom: '20px'
  };

  const imgStyle = {
    maxWidth: '150px',
    marginBottom: '20px'
  }

  const textStyle = {
    fontSize: '0.8em',
  }

  return (
    <div style={footerStyle}>
      <img src={logo} alt="logo" style={imgStyle}/>
      <p style={textStyle}>Copyright &copy; 2023 北京大学技术传播协会</p>
    </div>
  );
};

export default Footer;