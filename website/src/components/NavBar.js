import '../css/navbar.css';
import brandLogo from '../img/pku-logo-red.png';
import githubLogo from '../img/github-mark.png';
import { pkuRed, bannerTextColor } from '../styles/color.js'

const NavBar = () => {
  const navStyle = {
    backgroundColor: "white",
  };
  const PkuLogoStyle = {
    height: '45px',
  }
  const ghLogoStyle = {
    height: '30px',
  };

  return (
    <nav style={navStyle}>
      <div className="nav_wrapper">
        <a href="#">
          <img src={brandLogo} style={PkuLogoStyle} alt="PKU Logo" />
        </a>
        <a href="https://github.com/galty687/tc-universities">
          <img src={githubLogo} style={ghLogoStyle} alt="Github Logo" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;