import React, { useState,useEffect } from "react";
import moment from "moment";
import ModalGlobal from "../components/Modal";
import Alert from "../components/Alert"
import Api from "../services/api"

function Home() {
  const [agora, setAgora] = useState(
    moment(new Date())
  )
  const [servidor, setServidor] = useState({
    bm: "",
    nomeFuncional: "",
    lotacao: { codProprio: "", nomeProprio: "" },
    escala: { escala: "", horaInicio: "", horaFim: "" },
    prontos: [{
      data: "",
      obsPronto: "",
      tipo: "",
      tipoPronto: "", //INICIO_SERVICO, FIM_SERVICO, INICIO_INTERVALO, FIM_INTERVALO
      usuario: { id: 0 },
    }]
  });

  const [pronto, setPronto] = useState({
    data: agora.format("YYYY-MM-DD HH:mm"),
    obsPronto: "",
    tipo: "p",
    tipoPronto: "INICIO_SERVICO", //INICIO_SERVICO, FIM_SERVICO, INICIO_INTERVALO, FIM_INTERVALO
    usuario: { id: 1 },
    servidor: { bm: "87134-X" }
  })

  ///modal**************************************************************************************
  const [show, setShow] = useState(false);
  const [obsProntoTemp, setObsprontoTemp] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  const handleObservacao=(event)=>{
    setObsprontoTemp(event.target.value) ;
  }

  useEffect(() => {
    console.log('Do something after counter has changed');
    console.log(pronto);
 }, [pronto]);
 
  function setObservacao(){
    setPronto(  {...pronto, obsPronto:obsProntoTemp})
    console.log(pronto);
    handleClose();
  }

  //modal fim ********************************************************************************

  function handleServidorChange(event) {
    setServidor({ ...servidor, bm: event.target.value })
  }

  function handleClick() {
    Api.get(`servidor/servidor/${servidor.bm}`)
      .then(resp => {
        setServidor(resp.data)
      })
      .catch(error => {
        console.log(error);
      })
  }

  function handlePassarPronto() {
    setAgora(moment(new Date()))//seta a data pra na hora do click
    pronto.servidor = servidor
    console.log(pronto)
    Api.post("pronto", pronto).then(response => {
      console.log(response.data)
    }).catch(erro => {
      console.log(erro.response.data.message)
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
          <button className='btn btn-light' onClick={handleClick}>Ok</button>

        </div>


        <hr />

        <div className="card">
          <div className="card-body">
            <h4>{agora.format("DD/MM/YYYY - HH:mm")}</h4>
            <p><b>Nome: </b>{servidor.nomeFuncional} - <b>BM: </b>{servidor.bm}</p>
            <p><b>Próprio: </b>{servidor.lotacao.nomeProprio} - <b>Código: </b>{servidor.lotacao.codProprio} </p>
            <p><b>Escala: </b>{servidor.escala.escala} </p>
            <p><b>Início: </b>{servidor.escala.horaInicio} </p>
            <p><b>Fim: </b>{servidor.escala.horaFim} </p>
            <button className="btn btn-primary" onClick={handleShow}>
              Pronto Serviço
            </button>
            
            <p />

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
                {servidor.prontos.map(item => {
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
      </div>
      <ModalGlobal
        title={"Confirmar o pronto?"}
        body={"Observação do pronto"}
        show={show} handleClose={handleClose}
        setObservacao={setObservacao}
        handleObservacao={handleObservacao}
      />
    </div>
  );
}

export default Home;
