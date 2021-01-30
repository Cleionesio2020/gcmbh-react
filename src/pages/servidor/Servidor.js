import React, { useEffect, useState } from "react";
import {
  Link, NavLink, Outlet, useNavigate
} from "react-router-dom";

function Servidor() {

  return (
    <>
      <nav className="nav" style={{marginBottom:"20px"}}>
        <NavLink  className="nav-link" to="">Servidore GCMBH </NavLink>
      </nav>

      <Outlet />
    </>
  );
}

export default Servidor;
