import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import imagen2 from "/workspace/criptoner-aplicacion-movil/src/front/img/Home (1).jpg";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Demo = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const handleTarjetas = () => {
    navigate("/single/:theid"); // Redirige a "/otraVista"
  };

  return (
    <div
      className="panel"
      style={{
        marginBottom: "5cm",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={imagen2}
        style={{
          height: "900px",
          width: "900px",
          position: "relative",
        }}
      ></img>
      <button
        className="transparentButton"
        onClick={handleTarjetas}
        style={{
          position: "absolute",
          top: "93%",
          left: "40%",
          transform: "translate(-50%, -50%)",
          background: "transparent",
          color: "transparent",
          border: "transparent",
        }}
      >
        Click me
      </button>
      <br />
    </div>
  );
};
