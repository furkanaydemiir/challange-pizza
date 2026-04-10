import "../css/home.css";
import logo from "../../images/iteration-1-images/logo.svg";
import { Link } from "react-router-dom";
import Deneme from "../deneme/Deneme";
import { nanoid } from "nanoid";
import Footer from "../components/Footer";

function Home() {
  
  return (
    <div className="home">
      <Deneme value={"Landing Page"} />
      <div className="home-logo">
        <img src={logo} alt="" />
      </div>
      <div className="home-caption">
        <h1 style={{ marginLeft: "24px" }}>KOD ACIKTIRIR</h1>
        <h1>PİZZA, DOYURUR</h1>
      </div>
      <Link to={"/OrderPizza"} className="home-button">
        ACIKTIM
      </Link>
      <Footer/>
    </div>
  );
}

export default Home;
