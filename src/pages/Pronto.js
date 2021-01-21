import React, { useState } from "react";
import Api from "../services/api";
import { FaSearch } from "react-icons/fa";
import "./pronto.css";

function Pronto() {
  const data = [
    {
      escala: {
        horaInicio: "06:00",
        horaFim: "18:00",
        escala: "12X36-D1"
      },

      nomeFuncional: "Cleionesio",
      bm: "87134-X",

      pronto: {
        tipo: ""
      }
    },
    {
      escala: {
        horaInicio: "06:30",
        horaFim: "18:30",
        escala: "12X36-D2"
      },

      nomeFuncional: "Amarildo",
      bm: "87333-X",
      pronto: {
        tipo: ""
      }
    },
    {
      escala: {
        horaInicio: "07:00",
        horaFim: "19:00",
        escala: "12X36-D1"
      },

      nomeFuncional: "Janaina",
      bm: "23564-4",
      pronto: {
        tipo: ""
      }
    },
    {
      escala: {
        horaInicio: "06:00",
        horaFim: "18:00",
        escala: "12X36-D1"
      },

      nomeFuncional: "Clodoaudo",
      bm: "83568-X",
      pronto: {
        tipo: ""
      }
    }
  ];

  const [pronto, setPronto] = useState({
    horaInicio: "",
    horaFim: "",
    horaPrevistaInicio: "",
    horaPrevistaFim: "",
    obsPronto: "",
    tipo: "",
    verificado: "",
    usuario: { id: "" },
    servidor: { bm: "" }
  });

  const [servidores, setServidores] = useState([]);
  const [bm, setBm] = useState("");

  function buscarPorBm(event) {
    event.preventDefault();
    Api.get(`/servidores_proprio/${bm}`)
      .then((resp) => {
        const data = resp.data;
        data.proto = "";
        setServidores(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function buscarPorCodigo(event) {
    event.preventDefault();
  }

  const teste = (event, tipo) => {
    const a = servidores.map((item) => {
      return item;
      if (item.bm === event.target.value) {
        setServidores(a);
      }
    });

    console.log(a);
  };

  return (
    <div>
      <div style={{ padding: "5px", backgroundColor: "#F5F5F5" }}>
        <div className="card-title">
          <h5>Registro de Pronto - {new Date().toLocaleString("pt-BR")}</h5>
        </div>
        <form>
          <div className="row">
            <div className="col-sm-6">
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
            </div>
            <div className="col-sm-6">
              <span>
                <input
                  type="text"
                  name="cod"
                  size="5"
                  placeholder="Cod lotação"
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
                      <input
                        type="checkbox"
                        value={item.bm}
                        checked={item.pronto === "p"}
                        onChange={(e) => teste(e, "p")}
                      />
                    </td>
                    <td>
                      <input
                        value={item.bm}
                        type="checkbox"
                        checked={item.pronto === "f"}
                        onChange={(e) => teste(e, "f")}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        value={item.bm}
                        checked={item.pronto === "d"}
                        onChange={(e) => teste(e, "d")}
                      />
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
