import React, { useState, useEffect } from "react";
import moment from "moment";
import ModalGlobal from "../components/Modal";
import Alert from "../components/Alert"
import Api from "../services/api"

function Home() {
  //este state sera chamado caso o pronto ocorra erro de horario incompativel
  //e nessecitar de oma obervacao pra validar 
  const [prontoCompativel, setProntoCompativel] = useState(false);
  const [msg, setMsg] = useState("");
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

  const handleObservacao = (event) => {
    setObsprontoTemp(event.target.value);
  }

  //este efect entra em acao assim que tenta passar o pronto, depois do retorno da api

  useEffect(() => {
    if (prontoCompativel) {
      setMsg("Pronto passado com sucesso.")
    } else {
      setMsg("Erro pronto incompatível, adicione uma observação!")
    }
  }, [prontoCompativel]);

  //este efect entra em acao assum que clicar em passar o plrnto na odal
  useEffect(() => {
    handlePassarPronto();
  }, [pronto]);

  function setObservacao() {
    setPronto({ ...pronto, obsPronto: obsProntoTemp })
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
    Api.post("pronto", pronto).then(response => {
      handleClose(); //fecha a modal
      setProntoCompativel(true)
    }).catch(erro => {
      console.log(erro.response.data.message)
      setProntoCompativel(false)
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
        <h5>Sistema registro de pronto de serviço </h5>
        <div   className={prontoCompativel? 
        "alert alert-primary alert-dismissible:alert}"
        :"alert alert-danger alert-dismissible}"} 
        role="alert">
          
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          {msg}
        </div>
        
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
            <button className="btn btn-primary" onClick={handleShow} disabled={servidor.nomeFuncional===""}>
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
