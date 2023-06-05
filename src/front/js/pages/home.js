import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import Swal from "sweetalert2";
import "../../styles/home.css";
import { imagen1 } from "/workspace/Criptoner1/src/front/img/Fondo.jpg";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const signInRef = React.useRef(null);
  const navigate = useNavigate();
  const handleSignUp = () => {
    Swal.fire({
      title: "Good job!",
      text: "Enhorabuena ya perteneces a Criptoner!",
      icon: "success",
      iconColor: "#FFF176",
      confirmButtonColor: "#FFF176",
    }).then(() => {
      signInRef.current.checked = true;
    });
  };
  const handleSignIn = () => {
    navigate("/demo"); // Redirige a "/otraVista"
  };
  return (
    <>
      <div className="login-wrap" style={{ marginTop: "3cm" }}>
        <div className="login-html">
          <input
            ref={signInRef}
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>

          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>

          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input id="user" type="text" className="input" />
              </div>

              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>

              <div className="group">
                <input
                  id="check"
                  type="checkbox"
                  className="check"
                  defaultChecked
                />
                <label htmlFor="check">
                  <span className="icon"></span> Keep me Signed in
                </label>
              </div>

              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Sign In"
                  onClick={handleSignIn}
                />
              </div>

              <div className="hr"></div>

              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>

            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input id="user" type="text" className="input" />
              </div>

              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>

              <div className="group">
                <label htmlFor="pass" className="label">
                  Repeat Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                />
              </div>

              <div className="group">
                <label htmlFor="pass" className="label">
                  Email Address
                </label>
                <input id="pass" type="text" className="input" />
              </div>

              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Sign Up"
                  onClick={handleSignUp}
                />
              </div>

              <div className="hr"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
