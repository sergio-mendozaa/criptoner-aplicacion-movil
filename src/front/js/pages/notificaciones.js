import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import imagen5 from "/workspace/Criptoner1/src/front/img/Notificaciones.jpg";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Notificaciones = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const handlePerfil = () => {
    navigate("/perfil"); // Redirige a "/otraVista"
  };

  return (
    <div className="panel" style={{ marginBottom: "5cm" }}>
      <img
        src={imagen5}
        style={{ height: "1000px", width: "1900px", position: "relative" }}
      ></img>
      <button
        className="transparentButton"
        onClick={handlePerfil}
        style={{
          position: "absolute",
          top: "45%",
          left: "7%",
          transform: "translate(-50%, -50%)",
          background: "transparent",
          color: "transparent",
          border: "transparent",
          paddingLeft: "4cm",
          paddingRight: "4cm",
        }}
      >
        Click me
      </button>
      <br />
    </div>
  );
};
