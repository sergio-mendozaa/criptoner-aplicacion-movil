import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import imagen5 from "/workspace/criptoner-aplicacion-movil/src/front/img/Notificaciones_app.jpg";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Notificaciones = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const handlePerfil = () => {
    navigate("/perfil"); // Redirige a "/otraVista"
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
        src={imagen5}
        style={{ height: "900px", width: "900px", position: "relative" }}
      ></img>
      <button
        className="transparentButton"
        onClick={handlePerfil}
        style={{
          position: "absolute",
          top: "93%",
          left: "60%",
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
