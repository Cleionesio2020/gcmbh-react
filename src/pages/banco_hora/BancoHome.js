
import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import SelectServidorNome from "../../components/SelectServidorNome";
import Api from '../../services/api'
import {useNavigate}from "react-router-dom"

function BancoHome() {
let navigate = useNavigate();
  const lancamentoInicial = { 
    dataLancamento: new Date(),
    dataReferencia:"",
    tipoLancamento:"CREDITO",
    descricao:"",
    qtdHoras:"",
    servidor:{bm:"",nomeCompleto:""},
    usuario:{id:1}
  }

  const [lancamento, setLancamento] = useState(lancamentoInicial);

  //AO CLICAR EM SUBMETER O FORMULARIO O MESMO ECNVIADO PARA O END POINT CORRESPONDENTE
  const handleSubmit = (event) => {
    setLancamento(lancamentoInicial)
    console.log(lancamentoInicial)
    console.log(lancamento)
    event.preventDefault();
    Api.post(`/banco-horas`,lancamento).then(resp=>{
      console.log(resp.data)
      setLancamento(lancamentoInicial)
    })
    .catch(error=>{
      console.log(error)
    })

    event.target.reset();
  };

  //AQUI OS DADOS SAO ATUALIZADOS AO ALTERAR ALGUMA INFORMACAO NOS FORMS
  function handledChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setLancamento({ ...lancamento, [name]: value });
  }

  //AO SELECIONAR O VALOR NO CAMPO BUSCA O MESMO E ADICIONADO AO OBJETO LANCAMENTO NA VARIAVEL SERVIDOR
  function selecionaValor(valor) {
    const novoValor = { bm:valor.id, nomeCompleto:valor.name}
    setLancamento({ ...lancamento, servidor: novoValor});
  }

  return (
    <>
      <div className="container" style={{ marginTop: "20px", width: "50rem" }}>
      <div className='top-table' >
        <div><h4>Adicionar novo protocolo</h4></div>
        <button className="btn btn-secondary" onClick={()=>navigate('/Banco-Hora')}> <FaList size="15" />&nbsp;&nbsp;Voltar lista</button>
      </div>
        <form onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Lancamento Banco Banco de Horas</h5>

              <div className="form-row">
                <div className="form-group col-md-9">
                  <label>Servidor</label>
                  <SelectServidorNome selecionaValor={selecionaValor} />
                </div>

                <div className="form-group col-md-3">
                  <label>Bm</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Input padrão"
                    value={lancamento.servidor.bm}
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group col-md-5">
                  <label>Data do referência</label>
                  <input
                    className="form-control"
                    type="date"
                    placeholder="Input padrão"
                    name="dataReferencia"
                    onChange={handledChange}
                  />
                </div>

                <div className="form-group col-md-3">
                  <label>N Horas</label>
                  <input
                    className="form-control"
                    type="time"
                    placeholder="Input padrão"
                    name="qtdHoras"
                    onChange={handledChange}
                  />
                </div>

                <div className="form-group col-md-4">
                  <label for="">Tipo de lançamento</label>
                  <div>
                    <div
                      className="form-check form-check-inline"
                      style={{ marginRight: "50px" }}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tipoLancamento"
                        id="inlineRadio2"
                        value="CREDITO"
                        onChange={handledChange}
                      />
                      <label className="form-check-label">Crédito</label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="tipoLancamento"
                        id="inlineRadio3"
                        value="DEBITO"
                        onChange={handledChange}
                      />
                      <label className="form-check-label"> Débito</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Descriçao lançamento</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="descricao"
                  onChange={handledChange}
                ></textarea>
              </div>

              <button
                className="btn btn-primary"
                type="submit"
              >
                Salvar lançamento
              </button>
              
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default BancoHome;
