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
          <p className="desc">通过问卷调查、朋友圈推荐收集的高校列表，因为覆盖面有限，如果您或贵校已经开设此类课程，但未收录，欢迎填写该<a href="http://pkutc-training.mikecrm.com/SqBlK2D">收集问卷</a>，我们会尽快更新到该列表中。</p>
        </div>
      </div>
    </div>
  )
}