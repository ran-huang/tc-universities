// 导入你的 logo 图片
import brandLogo from '../img/pku-logo.png';
import githubLogo from '../img/github-mark-white.png';
import { pkuRed, bannerTextColor } from '../styles/color.js'

const navStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  height: '60px',
  backgroundColor: pkuRed,
  zIndex: '1',
};

const imgStyle = {
  height: '30px',
};

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <a href="#">
        <img src={brandLogo} style={imgStyle} alt="PKU Logo" />
      </a>
      <a href="https://github.com/galty687/tc-universities">
        <img src={githubLogo} style={imgStyle} alt="Github Logo" />
      </a>
    </nav>
  );
};

export default NavBar;