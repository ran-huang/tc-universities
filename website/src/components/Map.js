import React from 'react'

export default function Map() {
  const divStyle = {
    maxWidth: "900px",
    width: "90%",
    margin: "0 auto",
  }
  return (
    <div style={divStyle}>
      <iframe width="100%" height="500px" src='https://d.dituzhe.com/ShareMap/498F0B?hideBar=true'></iframe>
    </div>

  )
}