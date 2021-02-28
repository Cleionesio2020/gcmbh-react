import React, { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/AuthContext";
import Api from "../services/api"
import "./login.css";
import avatar from "../assets/images/avatar_login.png";

function Login() {
  const {setUser } = useContext(Context);
  const [state, setState] = useState(null)

  useEffect(() => {
    async function verifica() {
      const userLogado = await JSON.parse(localStorage.getItem("userLogado"))
      try {
        setUser(userLogado);
      } catch {
        localStorage.clear();
      }
    }
    verifica() ;
  }, [])

  function logar(state) {
    Api.post('/api/auth/signin', state)
      .then(resp => {
        if (resp.data !== null) {
          const userTemp = { id: resp.data.id, name: resp.data.name, username: resp.data.username, token: resp.data.accessToken }
          localStorage.setItem("userLogado", JSON.stringify(userTemp));
          setUser(userTemp);
        }
      })
  }


  function handleSubmit(event) {
    event.preventDefault();
    logar(state)
  }

  function handleChange(event) {
    let id = event.target.id;
    let valor = event.target.value;
    setState({ ...state, [id]: valor })
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
      <form className="form-signin" onSubmit={handleSubmit}>
        <span id="reauth-email" className="reauth-email"></span>

        <input
          type="text"
          id="username"
          className="form-control"
          placeholder="Usuário"
          onChange={handleChange}
        />

        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Senha"
          required
          onChange={handleChange}
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
