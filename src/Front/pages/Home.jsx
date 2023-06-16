import React from "react";
import "../styles/home.css";
import imgColegio from "../img/escuela1.jpg";
import imgEmpresa from "../img/empresa 1.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="category">
        <Link to={"/colegios"}>
          <img src={imgColegio} alt="" />
          <p className="categoriTitle">COLEGIOS</p>
        </Link>
      </div>
      <div className="category">
        <img src={imgEmpresa} alt="" />
        <p>EMPRESAS</p>
      </div>
    </div>
  );
};

export default Home;
