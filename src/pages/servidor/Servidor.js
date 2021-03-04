import React, { useEffect, useState } from "react";
import { NavLink, Outlet
} from "react-router-dom";

function Servidor() {

  return (
    <div className="bg-light" style={{borderRadius:"5px",padding:"10px"}}>
    <h6 className="card-title" style={{padding:"10px",backgroundColor:"#fff",borderRadius:"5px"}}>Gerenciar Servidores</h6>
      <Outlet />
    </div>
  );
}

export default Servidor;
