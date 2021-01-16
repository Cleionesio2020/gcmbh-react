import React, { useContext } from "react";
import { Context } from "../contexts/AuthContext";
import "./login.css";
import avatar from "../assets/images/avatar_login.png";

function Login() {
  const { setUser } = useContext(Context);

  function logar(event) {
    event.preventDefault();
    setUser({ login: "Cleionesio", senha: "1234" });
  }

  return (
    <div className="card_login card-container">
      <img
        id="profile-img"
        className="profile-img-card"
        src={avatar}
        alt="avatar"
      />

      <p id="profile-name" className="profile-name-card"></p>
      <form className="form-signin" onSubmit={logar}>
        <span id="reauth-email" className="reauth-email"></span>

        <input
          type="email"
          id="inputEmail"
          className="form-control"
          placeholder="Usuário"
        />

        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="senha"
          required
        />

        <div id="remember" className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Lembrar
          </label>
        </div>

        <button
          className="btn btn-lg btn-primary btn-block btn-signin"
          type="submit"
        >
          Entrar
        </button>
      </form>

      <a href="/" className="forgot-password">
        Esqueceu a senha?
      </a>
    </div>
  );
}

export default Login;
