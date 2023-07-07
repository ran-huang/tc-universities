import NavBar from "./components/NavBar.js";
import Content from "./components/Content.js";
import Sidebar from "./components/Sidebar.js";
import Footer from "./components/Footer.js";
import Banner from "./components/Banner.js";
// import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Sidebar /> */}
      <Banner />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
