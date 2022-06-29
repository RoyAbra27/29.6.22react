// import './App.css';
import { Outlet, Link } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";
import MainContainer from "./MainContainer";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <MainContainer />
      <Footer />

    </div >
  );
}

export default App;
