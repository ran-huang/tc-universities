import '../css/banner.css'
import { pkuRed, bannerTextColor } from "../styles/color";
import banner from '../img/banner.jpg';

export default function Banner() {
  // const bannerStyle = {
  //   position: "relative",
  //   height: "80vh",
  //   maxHeight: "800px",
  //   background: `url(${banner}) no-repeat center top`,
  //   backgroundSize: "cover",
  //   overflowX: "hidden",
  //   overflowY: "hidden"
  // }
  // const wrapperStyle = {
  //   margin: "0 auto",
  // }
  const textAreaStyle = {
    backgroundColor: bannerTextColor,
  }

  return (
    <div className="banner">
      <div className="banner_wrapper">
        <img src={banner}></img>
        <div className="banner-text-area" style={textAreaStyle}>
          <p className="title">已开设技术传播课程的高校</p>
          <p className="desc">Minim commodo sunt ex cillum aute exercitation laborum excepteur quis exercitation aliquip culpa reprehenderit commodo. Sint commodo sunt et mollit nisi in incididunt est ipsum.</p>
        </div>
      </div>
    </div>
  )
}