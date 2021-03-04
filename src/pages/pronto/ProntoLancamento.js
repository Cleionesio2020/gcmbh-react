import React, { useState } from "react";
import Api from "../../services/api";
import "./pronto.css";

function ProntoLancamento() {


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
        setServidores(data);
        console.log(servidores);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function buscarPorCodigo(event) {
    event.preventDefault();
  }

  const teste = (index, tipo) => {
    const newServidores = [...servidores];
    if (servidores[index].pronto === undefined) {
      servidores[index].pronto = tipo;
    } else {
      servidores[index].pronto = undefined;
    }
    setServidores(newServidores);
  };

  return (
    <div>
      <div>
        <form> 

          <div className='top-table' >
            <div>
              <input className="input-person" type="text" size="15" name="bm" placeholder="Bm" onChange={(e) => setBm(e.target.value)} />
              &nbsp;<button className='btn btn-light' onClick={buscarPorBm}>Buscar</button>
                &nbsp;&nbsp;&nbsp;
              <input className="input-person" type="text" name="cod" size="15" placeholder="Cod lotação" onChange={(e) => setBm(e.target.value)} />
              &nbsp;<button className='btn btn-light' onClick={buscarPorCodigo}>Buscar</button>
            </div>

          </div>
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
              {servidores.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className={item.prontos.length > 0 ? "passou-pronto" : ""}
                  >
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
                        onChange={() => teste(index, "p")}
                      />
                    </td>
                    <td>
                      <input
                        value={item.bm}
                        type="checkbox"
                        checked={item.pronto === "f"}
                        onChange={() => teste(index, "f")}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        value={item.bm}
                        checked={item.pronto === "d"}
                        onChange={() => teste(index, "d")}
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

export default ProntoLancamento;
