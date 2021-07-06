import React from "react";
import "./navBar.css";
import logo from "../assets/images/icon.png";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ boxShadow: "0px 4px 3px -4px rgba(0,0,0,0.33)" }}
    >
      <Link className="navbar-brand" style={{ marginRight: "5px" }} to="/">
        <div className="logo">
          <img src={logo} alt="logo" width="35" />
          &nbsp; GCMBH
        </div>
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
            <NavLink
              to="/lancamento"
              className="nav-link"
              activeClassName="active"
            >
              Controle viaturas
            </NavLink>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Registros
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">

            <NavLink to="/ambulante" className="dropdown-item"  activeClassName="active" >
              Ambulante
            </NavLink>

            <NavLink to="/Flanelinha" className="dropdown-item"  activeClassName="active" >
              Flanelinha
            </NavLink>

              <a class="dropdown-item" href="#">
                Another action
              </a>

              <div class="dropdown-divider"></div>

              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>

          

          <li className="nav-item">
            <NavLink
              to={"/empenhos"}
              className="nav-link"
              activeClassName="active"
            >
            Empenhos Programados
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/Banco-Hora"
              className="nav-link"
              activeClassName="active"
            >
              Banco de Horas
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
