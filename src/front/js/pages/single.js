import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import imagen3 from "/workspace/criptoner-aplicacion-movil/src/front/img/Tarjetas_APP.jpg";
import { useNavigate } from "react-router-dom";
export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  const handleTransacciones = () => {
    navigate("/transacciones"); // Redirige a "/otraVista"
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
        src={imagen3}
        style={{ height: "900px", width: "900px", position: "relative" }}
      ></img>
      <button
        className="transparentButton"
        onClick={handleTransacciones}
        style={{
          position: "absolute",
          top: "93%",
          left: "45%",
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

Single.propTypes = {
  match: PropTypes.object,
};
