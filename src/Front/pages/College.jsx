import React from "react";
import "../styles/college.css";
import Cjockey from "../img/jockey.png";
import Cniños from "../img/ninos.png";
import Cins from "../img/ins.png";
import Cvida from "../img/vida.png";
import Cbehappy from "../img/behappy.png";
import NavBar from "../components/NavBar";

const College = () => {
  return (
    <div className="collegeContainer">
      <div className="banner jockey">
        <img src={Cjockey} alt="" />
      </div>
      <div className="banner niños">
        <img src={Cniños} alt="" />
      </div>
      <div className="banner ins">
        <img src={Cins} alt="" />
      </div>
      <div className="banner vida">
        <img src={Cvida} alt="" />
      </div>
      <div className="banner be">
        <img src={Cbehappy} alt="" />
      </div>
    </div>
  );
};

export default College;
