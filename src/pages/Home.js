import React, { useState } from "react";
import moment from "moment";
import ModalGlobal from "../components/Modal";
import Alert from "../components/Alert"
import Api from "../services/api"

function Home() {
  const [agora, setAgora] = useState(
    moment(new Date())
  )

const[servidor,setServidor]=useState({});
  const [pronto, setPronto] = useState([{
    data: agora,
    obsPronto: "",
    tipo: "p",
    tipoPronto: "INICIO_SERVICO", //INICIO_SERVICO, FIM_SERVICO, INICIO_INTERVALO, FIM_INTERVALO
    usuario: { id: 1 },
    servidor: {
      bm: "",
      nomeFuncional: "",
      lotacao: { codProprio: "", nomeProprio: "" },
      escala: { escala: "", horaInicio: "", horaFim: "" }
    }
  }])

  function handleServidorChange(event) {
    setServidor({ ...servidor, bm: event.target.value })
  }

  function handleClick() {
    Api.get(`pronto_servidor/${servidor.bm}`)
      .then(resp => {
        setPronto(resp.data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  function handlePassarPronto() {
    setAgora(moment(new Date()))//seta a data pra na hora do click

    Api.post("pronto", { pronto, servidor }).then(response => {
      console.log(response.data)
    }).catch(erro => {
      console.log(erro)
    })
  }




  function converteTipoPronto(tipoEntrada) {
    let texto = "";
    if (tipoEntrada === "INICIO_SERVICO") {
      texto = "Inicio de Serviço"
    } else if (tipoEntrada === "INICIO_INTERVALO") {
      texto = "Inicio de Intervalo";
    } else if (tipoEntrada === "FIM_INTERVALO") {
      texto = "Fim de Intervalo";
    } else if (tipoEntrada === "FIM_SERVICO") {
      texto = "Fim de Serviço";
    }
    return texto
  }
  return (
    <div>
      <div className="jumbotron">
        <div><input className="input-person" placeholder="BM / Matrícula" name="nome" type="text" size="20" onChange={handleServidorChange} />
          <button className='btn btn-light' onClick={handleClick}>Ok</button> </div>


        <hr />
        
          <div className="card">
            <div className="card-body">
              <h4>{agora.format("DD/MM/YYYY - HH:mm")}</h4>
              <p><b>Nome: </b>{servidor.nomeFuncional} - <b>BM: </b>{pronto.servidor.bm}</p>
              <p><b>Próprio: </b>{pronto.servidor.lotacao.nomeProprio} - <b>Código: </b>{servidor.lotacao.codProprio} </p>
              <p><b>Escala: </b>{pronto.servidor.escala.escala} </p>
              <p><b>Início: </b>{pronto.servidor.escala.horaInicio} </p>
              <p><b>Fim: </b>{pronto.servidor.escala.horaFim} </p>
              <button className="btn btn-primary" onClick={handlePassarPronto}>
                Registrar Início Serviço
            </button>

            </div>
          </div>
        

        <table className="table table-sm" style={{ fontSize: "12px" }}>
          <thead>
            <tr>
              <th scope="col">Data Pronto</th>
              <th scope="col">Hora</th>
              <th scope="col">Tipo de Pronto</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {pronto.map(item => {
              return (
                <tr>
                  <td> {moment.utc(item.data).format('DD/MM/YYYY')}</td>
                  <td> {moment.utc(item.data).format('HH:mm')}</td>
                  <td>{converteTipoPronto(item.tipoPronto)}</td>
                  <td>Gerenciar - Excluir</td>
                </tr>
              )
            })}

          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Home;
