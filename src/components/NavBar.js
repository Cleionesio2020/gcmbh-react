import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ boxShadow: "0px 4px 3px -4px rgba(0,0,0,0.33)" }}
    >
      <Link className="navbar-brand" to="/">
        {" "}
      </Link>
      GCMBH
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
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Pronto" className="nav-link">
              Pronto
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Sobre" className="nav-link">
              Sobre
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Admin" className="nav-link">
              Admin
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Escala" className="nav-link">
              Escala
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Banco-Hora" className="nav-link">
              Banco de Horas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
