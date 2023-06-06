import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import imagen6 from "/workspace/criptoner-aplicacion-movil/src/front/img/Perfil_app.jpg";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Perfil = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/"); // Redirige a "/otraVista"
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
        src={imagen6}
        style={{ height: "900px", width: "900px", position: "relative" }}
      ></img>
     
      <br />
    </div>
  );
};
