// import { useState, React } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./PaginaFeed.css";
import { IconName } from "react-icons/go";
import LinhaDoTempo from "./LinhaDoTempo/LinhaDoTempo";

export function PaginaPrincipal() {
  return (
    <div className="principal">
      {/* <div className="destaque-feed"></div> */}
      <Navbar></Navbar>
      <LinhaDoTempo></LinhaDoTempo>
    </div>
  );
}
