import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import imagen4 from "/workspace/criptoner-aplicacion-movil/src/front/img/Transacciones_app.jpg";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Transacciones = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const handleNotificaciones = () => {
    navigate("/notificaciones"); // Redirige a "/otraVista"
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
        src={imagen4}
        style={{ height: "900px", width: "900px", position: "relative" }}
      ></img>
      <button
        className="transparentButton"
        onClick={handleNotificaciones}
        style={{
          position: "absolute",
          top: "93%",
          left: "55%",
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
