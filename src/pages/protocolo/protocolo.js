import React from "react";
import './style.css'
import {
  Link, Outlet
} from "react-router-dom";

function Protocolo() {
  return (
    <div className="bg-light" style={{borderRadius:"5px",padding:"10px"}}>
    <h6 className="card-title" style={{padding:"10px",backgroundColor:"#fff",borderRadius:"5px"}}>Gerenciar protocolos</h6>
      <Outlet />
    </div>
  );
}

export default Protocolo;
