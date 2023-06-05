import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import imagen3 from "/workspace/Criptoner1/src/front/img/Tarjetas.jpg";
import { useNavigate } from "react-router-dom";
export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const navigate = useNavigate();
  const handleTransacciones = () => {
    navigate("/transacciones"); // Redirige a "/otraVista"
  };

  return (
    <div className="panel" style={{ marginBottom: "5cm" }}>
      <img
        src={imagen3}
        style={{ height: "1000px", width: "1900px", position: "relative" }}
      ></img>
      <button
        className="transparentButton"
        onClick={handleTransacciones}
        style={{
          position: "absolute",
          top: "34%",
          left: "10%",
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
