import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";

import AsyncSelect from "react-select/async";
import Select from "react-select";
import Api from "../../services/api";
import moment from "moment";
import { FaList } from "react-icons/fa";
import ViewViatura from "./components/view-vtr";

function LancamentoNovo() {

const [ controleViatura, setControleViatura ] = useState({componentes:[], viatura:{}, hodInicial:0,hodFinal:0})

const [ controleGuarnicao, setControleGuarnicao ] = useState({ guarnicao:{}, controleViatura:[] })

  const [guarnicao, setGuarnicao] = useState({ codigo: "", viaturas: [] });
  const [lancamento, setLancamento] = useState({});
  const [viatura, setViatura] = useState({ placa: ""});
  const [componenteVtr, setComponenteVtr] = useState({});
  const [teste, setTeste]=useState(null);
const text = useRef();
  
  //AO ALTERAR STATE DA GUARNICAO
  function handleChangeGuarnicao(e) {
    const valor = e.value;
    setGuarnicao({ ...guarnicao, codigo: valor });
    console.log(guarnicao);
  }

  //AO ALTERAR STATE DA CONTROLE GURANICAO
  function handleChangeControleGuarnicao(e) {
    const { value, name } = e.target;
    setControleGuarnicao({ ...controleGuarnicao, [name]: value });
  }

  //AO ALTERAR STATE DA VTR
  function handleChangeViatura(e) {
    const { value, name } = e.target;
    setViatura({ ...viatura, [name]: value }); 
  }

  //AO ALTERAR STATE DO CONTROLE DE VIATURA
  function handleChangeControleViatura(e) {
    const { value, name } = e.target;
    setControleViatura({ ...controleViatura, [name]: value });
  }

  //AO ALTERAR STATE DO COMPONETE DA VTR
  function handleChangevCompVtr(e) {
    const {label, value, name } = e.target;
    if(name==='nomeFuncional'){
      setComponenteVtr({ ...componenteVtr, nomeFuncional: label, bm:value });
    }else{
      setComponenteVtr({ ...componenteVtr, [name]:value });
    }
    e =null
  }
  //AO ADICIONAR COMPONETE A VIATURA
  function addComponenteAViatura() {
    const componenteExploded = [...controleViatura.componentes, componenteVtr];
    setControleViatura({ ...controleViatura, componentes: componenteExploded });
    
   // setComponenteVtr({});
    
  }
  //  AO ADICIONAR UMA VIATURA A GUARNICAO
  function addViaturaAguarnicao() {
    const controleGuarnicaoExplod = [...controleGuarnicao.controleViatura, controleViatura];
    setControleGuarnicao({ ...controleGuarnicao, controleViatura: controleGuarnicaoExplod });
    setControleViatura({componentes:[], viatura:{}, hodInicial:0,hodFinal:0})
    }

  //Quando a viatura for alterada
  useEffect(() => {
    setControleViatura({...controleViatura, viatura:viatura})
  }, [viatura]);


  useEffect(() => {
    //const controleGuarnicaoExplod = [...controleGuarnicao.controleViatura,controleViatura]
    //setControleGuarnicao({...controleGuarnicao, controleViatura:controleGuarnicaoExplod})
    console.log(controleViatura) 
  }, [controleViatura]);


  useEffect(() => {
   console.log(controleGuarnicao) 
  }, [controleGuarnicao]);


  //TRATAMENTO DO SELECT QUE BUSCAM DADOS DA API
  const loadGuarnicaoOptions = (input, callback) => {
    return fetch(`http://localhost:8080/guarnicao?codigo=${input}`)
      .then((res) => res.json())
      .then((data) => {
        callback(data.map((x) => ({ label: x.codigo, value: x.codigo })));
      });
  };

  const loadViaturaOptions = (input, callback) => {
    return fetch(`http://localhost:8080/viatura?placa=${input}`)
      .then((res) => res.json())
      .then((data) => {
        callback(data.map((x) => ({ label: x.placa, value: x.placa })));
      });
  };

  
  const loadComponenteVtrOptions = (input, callback) => {
    return fetch(`http://localhost:8080/guarda?nome_funcional=${input}`)
      .then((res) => res.json())
      .then((data) => {
        callback(data.map((x) => ({ label: x.nomeFuncional, value: x.bm })));
      });
  };

 

  return (
    <div>
    
      <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="row">

        {'>>>>>>>'+ teste}
          <div className="col-md-2">
            <label for="data_doc" className="control-label">
              Data do Lancamento
            </label>
            <input
              id="data_doc"
              className="form-control"
              name="dataLancamento"
              type="date"
              onChange={handleChangeControleGuarnicao}
            />
          </div>

          <div className="col-md-3">
            <label for="data_doc" className="control-label">
              Guarnição
            </label>
            <AsyncSelect //********************** */
              cacheOptions
              defaultOptions
              loadOptions={loadGuarnicaoOptions}
              onChange={(val) => {
                handleChangeControleGuarnicao({
                  target: { name: "guarnicao", value: val.value },
                });
              }}
            />
          </div>
        </div>

        <ViewViatura controleViatura={controleViatura} />
      </div>
      <div id="accordion" style={{ marginTop: "10px" }}>
        <div class="card" style={{ marginTop: "10px" }}>
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Formar guarnicão
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <div className="row">
                <div className="col-md-3">
                  <label for="data_doc" className="control-label">
                    Placa da viatura
                  </label>
                  <AsyncSelect //********************** */
                    cacheOptions
                    defaultOptions
                    loadOptions={loadViaturaOptions}
                    onChange={(val) => {
                      handleChangeViatura({
                        target: { name: "placa", value: val.value },
                      });
                    }}
                  />
                </div>

                <div className="col-md-2">
                  <label for="data_doc" className="control-label">
                    Hodometro Inicial
                  </label>
                  <input
                    id="data_doc"
                    className="form-control"
                    name="dataDocumento"
                    type="text"
                    name="hodInicial"
                    value={controleViatura.hodInicial || ""}
                    onChange={handleChangeControleViatura}
                  />
                </div>
                <div className="col-md-2">
                  <label for="data_doc" className="control-label">
                    Hodometro Final
                  </label>
                  <input
                    id="data_doc"
                    className="form-control"
                    name="dataDocumento"
                    type="text"
                    name="hodFinal"
                    value={controleViatura.hodFinal || ""}
                    onChange={handleChangeControleViatura}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label for="data_doc" className="control-label">
                    Componente da VTR (Nome Funcional)
                  </label>
                  <AsyncSelect //********************** */
                    defaultOptions
                    onChange={(val) => {
                      handleChangevCompVtr({
                        target: { name: "nomeFuncional", value: val.value, label:val.label },
                      });
                    }}
                    loadOptions={loadComponenteVtrOptions}
                    
                  />
                </div>

                <div className="col-md-8">
                  <label for="data_doc" className="control-label">
                    Função
                  </label>
                  <br />
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="Motorista"
                      name="funcao"
                      onChange={handleChangevCompVtr}
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Motorista
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="inlineRadio2"
                      value="Patrulheiro"
                      name="funcao"
                      onChange={handleChangevCompVtr}
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      Patrulhero
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="Comandante"
                      name="funcao"
                      onChange={handleChangevCompVtr}
                    />
                    <label class="form-check-label" for="inlineRadio3">
                      3 Comandante
                    </label>
                  </div>
                  <button
                    className="btn btn-secondary"
                    onClick={addComponenteAViatura}
                  >
                    Adicionar
                  </button>
                </div>
              </div>

              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-sm-12">
                  <button
                    className="btn btn-primary"
                    onClick={addViaturaAguarnicao}
                  >
                    Confirmar a viatura
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card" style={{ marginTop: "10px" }}>
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Atividades da guarnição
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div class="card-body">
              <div className="row">
                <div className="col-md-3">
                  <div class="form-group">
                    <label for="id1" className="control-label">
                      Tipo de Atividade
                    </label>
                    <select class="form-control" id="id1">
                      <option>PONTO BASE (PB)</option>
                      <option>PASSAGEM PERIODICA (PP)</option>
                      <option>VISITA TRANQUILIZADORA (VI)</option>
                      <option>COBRIMENTO DE EVENTO (CE)</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-2">
                  <label for="data_doc" className="control-label">
                    Hora Início
                  </label>
                  <input
                    id="data_doc"
                    className="form-control"
                    name="dataDocumento"
                    type="time"
                  />
                </div>
                <div className="col-md-2">
                  <label for="data_doc" className="control-label">
                    Hora Fim
                  </label>
                  <input
                    id="data_doc"
                    className="form-control"
                    name="dataDocumento"
                    type="time"
                  />
                </div>

                <div className="col-md">
                  <label for="data_doc" className="control-label">
                    Próprio visitado (caso seja um próprio)
                  </label>
                  <input
                    id="data_doc"
                    className="form-control"
                    name="dataDocumento"
                    type="text"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label className="control-label">
                    Logradouro (caso não seja um proprio municipal)
                  </label>
                  <hr />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label for="data_doc" className="control-label">
                    Logradouro
                  </label>
                  <input
                    id="data_doc"
                    className="form-control"
                    name="dataDocumento"
                    type="text"
                  />
                </div>

                <div className="col-md-1">
                  <label for="data_doc" className="control-label">
                    Numero
                  </label>
                  <input
                    id="data_doc"
                    className="form-control"
                    name="dataDocumento"
                    type="text"
                  />
                </div>

                <div className="col-md-5">
                  <label for="data_doc" className="control-label">
                    Bairro
                  </label>
                  <input
                    id="data_doc"
                    className="form-control"
                    name="dataDocumento"
                    type="text"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <br />
                  <hr />
                </div>
              </div>

              <div className="row">
                <div className="col-md-2">
                  <label for="data_doc" className="control-label">
                    Hora do acionamento
                  </label>
                  <input
                    id="data_doc"
                    className="form-control"
                    name="dataDocumento"
                    type="time"
                  />
                </div>

                <div className="col-md-4">
                  <label for="data_doc" className="control-label">
                    Orgão acionador
                  </label>
                  <select class="form-control" id="id1">
                    <option>CECOGE</option>
                    <option>COP-BH</option>
                    <option>CICC</option>
                    <option>INSPETORIA DA REGIONAL</option>
                    <option>GERENTE DO LOCAL</option>
                    <option>POPULARES</option>
                    <option>INICIATIVA PROPRIA</option>
                  </select>
                </div>

                <div className="col-md-1.5">
                  <label for="data_doc" className="control-label">
                    N° pessoas anotados
                  </label>
                  <input
                    id="data_doc"
                    className="form-control"
                    name="dataDocumento"
                    type="number"
                    size="5"
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "10px" }}>
                <div className="col-md-2">
                  <button className="btn btn-secondary">
                    Adicionar atividade
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card"
        style={{ height: "200px", overflow: "scroll", marginTop: "10px" }}
      >
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LancamentoNovo;
