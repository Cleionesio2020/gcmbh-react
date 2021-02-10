import React from "react";
import "./navBar.css"
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ boxShadow: "0px 4px 3px -4px rgba(0,0,0,0.33)" }}
    >
      <Link className="navbar-brand" style={{ marginRight: '5px' }} to="/">

        GCMBH
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <NavLink to="/Protocolo" className="nav-link" activeClassName="active">
              Protocolo
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Pronto" className="nav-link" activeClassName="active">
              Pronto
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to={"/Lotacao"} className="nav-link" activeClassName="active">
              Lotacao
            </NavLink>
          </li>


          <li className="nav-item">
            <NavLink to="/Servidor" className="nav-link" activeClassName="active">
              Servidores
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Banco-Hora" className="nav-link" activeClassName="active">
              Banco de Horas
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
