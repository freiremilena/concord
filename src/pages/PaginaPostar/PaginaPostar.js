import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./PaginaPostar.css";

export function PaginaPostar() {
  return (
    <div className="container-form">
      <Navbar></Navbar>
      <form className="box">
        <textarea rows="10" cols="60"></textarea>
        <input type="button" className="btn-form" value="Enviar"></input>
      </form>
    </div>
  );
}
