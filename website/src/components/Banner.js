import { pkuRed, bannerTextColor } from "../styles/color";
import banner from '../img/banner.jpg';

export default function Banner() {
  const bannerStyle = {
    position: "relative",
    width: "100%",
    // background: "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.1))",
    background: `url(${banner}) no-repeat center top`,
    backgroundSize: "cover",
  }
  const wrapperStyle = {
    paddingTop: "300px",
    paddingLeft: "20px",
    paddingBottom: "100px",
  }

  const textAreaStyle = {
    width: "60vw",
    maxWidth: "600px",
    padding: "20px",
    backgroundColor: bannerTextColor,
    color: "white",
  }
  const largeTextStyle = {
    fontSize: "3em",
  }
  const smallTextStyle = {
    fontSize: ".8em",
  }

  return (
    <div style={bannerStyle}>
      <div style={wrapperStyle}>
        <div style={textAreaStyle}>
          <p style={largeTextStyle}>已开设技术传播课程的高校</p>
          <p style={smallTextStyle}>Minim commodo sunt ex cillum aute exercitation laborum excepteur quis exercitation aliquip culpa reprehenderit commodo. Sint commodo sunt et mollit nisi in incididunt est ipsum.</p>
        </div>
      </div>
    </div>
  )
}