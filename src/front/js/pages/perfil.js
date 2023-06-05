import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import imagen6 from "/workspace/Criptoner1/src/front/img/Perfil.jpg";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Perfil = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/"); // Redirige a "/otraVista"
  };

  return (
    <div className="panel" style={{ marginBottom: "5cm" }}>
      <img
        src={imagen6}
        style={{ height: "1000px", width: "1900px", position: "relative" }}
      ></img>
      <button
        className="transparentButton"
        onClick={handleHome}
        style={{
          position: "absolute",
          top: "100%",
          left: "7%",
          transform: "translate(-50%, -50%)",
          background: "transparent",
          color: "transparent",
          border: "transparent",
          paddingLeft: "4cm",
          paddingRight: "6cm",
        }}
      >
        Click me
      </button>
      <br />
    </div>
  );
};
