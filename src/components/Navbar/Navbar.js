import React, { useContext } from "react";
import "./Navbar.css";
import { FaBeer } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-concord-01.svg";
import { AuthContext } from "../../App";


export function Navbar() {
  const {setAuth, auth} = useContext(AuthContext);
  return (
    <div className="conteiner">
      <div className="logo">
        {" "}
        <img src={logo} alt="logo" />
      </div>
      <div className="btn-nav">
        <div className="item">
          <NavLink className="btn-linhadotempo" to="/">
            Linha do Tempo
          </NavLink>
        </div>
        <div className="item">
          <NavLink className="btn-linhadotempo" to="/postar">
            Postar
          </NavLink>
        </div>
        <div className="item">
          <NavLink className="btn-linhadotempo" to="#" onClick={() => {
            setAuth({ token:null })
          }}>
            Logout
          </NavLink>
        </div>
        <div className="item">
          <NavLink className="btn-linhadotempo" to="#">
            {auth.nome}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
