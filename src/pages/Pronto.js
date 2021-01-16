import React, { useState } from "react";

import Api from "../services/api";
import { FaRegEdit, FaTrashAlt, FaSearch } from "react-icons/fa";
import "./pronto.css";

function Pronto() {
  const [servidores, setServidores] = useState([]);
  const [codLotacao, setCodLotacao] = useState("");
  const [bm, setBm] = useState("");

  function buscarPorBm(event) {
    event.preventDefault();
    Api.get(`/servidores_proprio/${bm}`)
      .then((resp) => {
        setServidores(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function buscarPorCodigo(event) {
    event.preventDefault();
  }

  return (
    <div>
      <div style={{ padding: "20px", backgroundColor: "#F5F5F5" }}>
        <div className="card-title">
          <h5>Registro de Pronto - {new Date().toLocaleString("pt-BR")}</h5>
        </div>
        <form>
          <div className="row">
            <div className="col-sm-2">
              <span>
                <input
                  type="text"
                  name="bm"
                  placeholder="Bm"
                  size="5"
                  onChange={(e) => setBm(e.target.value)}
                />
                <button className="btn" onClick={buscarPorBm}>
                  <FaSearch />
                </button>
              </span>
            </div>
            <div className="col-sm-2">
              <span>
                <input
                  type="text"
                  name="cod"
                  size="5"
                  placeholder="Cod lotação"
                  onChange={(e) => setCodLotacao(e.target.value)}
                />
                <button className="btn" onClick={buscarPorCodigo}>
                  <FaSearch />
                </button>
              </span>
            </div>
          </div>
          <br />
        </form>
      </div>
      <div className="overflow-auto" style={{ height: 400 }}>
        <div className="card" style={{ padding: 20 }}>
          <table className="table table-sm" style={{ fontSize: "12px" }}>
            <thead>
              <tr>
                <th scope="col">Nome Funcional</th>
                <th scope="col">Bm</th>
                <th scope="col">Escala</th>
                <th scope="col">Início</th>
                <th scope="col">Fim</th>
                <th scope="col">Pro</th>
                <th scope="col">Fal</th>
                <th scope="col">Dis</th>
              </tr>
            </thead>
            <tbody>
              {servidores.map((item) => {
                return (
                  <tr>
                    <td>{item.nomeFuncional}</td>
                    <td>{item.bm}</td>
                    <td>{item.escala.escala}</td>
                    <td>{item.escala.horaInicio}</td>
                    <td>{item.escala.horaFim}</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="align-self-end">
            <button className="btn btn-primary" style={{ marginRight: "30px" }}>
              Salvar Pronto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pronto;
