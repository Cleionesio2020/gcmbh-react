import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Api from "../../services/api";
import moment from "moment";
import { FaList } from "react-icons/fa";
import ViewViatura from "./components/view-vtr";

function LancamentoNovo() {
  const [guarnicao, setGuarnicao] = useState({codigo:"", viaturas:[]});
  const [lancamento, setLancamento] = useState({});
  const [viatura, setViatura] = useState({ placa: "", componetes: [] });
  const [componenteVtr, setComponenteVtr] = useState({});

  //AO ALTERAR STATE DA GUARNICAO
  function handleChangeGuarnicao(e) {
    const { value, name } = e.target;
    setGuarnicao({ ...guarnicao, [name]: value });
    console.log(guarnicao);
  }

  //AO ALTERAR STATE DA LANCAMENTO
  function handleChangeLancamento(e) {
    const { value, name } = e.target;
    setLancamento({ ...lancamento, [name]: value });
    console.log(lancamento);
  }

  //AO ALTERAR STATE DA VTR
  function handleChangeviatura(e) {
    const { value, name } = e.target;
    setViatura({ ...viatura, [name]: value });
  }

  //AO ALTERAR STATE DO COMPONETE DA VTR
  function handleChangevCompVtr(e) {
    const { value, name } = e.target;
    setComponenteVtr({ ...componenteVtr, [name]: value });
  }
  //AO ADICIONAR COMPONETE A VIATURA
  function addComponenteAViatura() {
    const componenteExploded = [...viatura.componetes, componenteVtr];
    setViatura({ ...viatura, componetes: componenteExploded });
    setComponenteVtr({});
  }
  //  AO ADICIONAR UMA VIATURA A GUARNICAO
  function addViaturaAguarnicao() {
    const viaturaExploded = [ ...guarnicao.viaturas, viatura ]
    setGuarnicao({ ...guarnicao , viaturas:viaturaExploded})
  }

  useEffect(() => {
    console.log(guarnicao)
  }, [guarnicao]);

  return (
    <div>
      <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="row">
          <div className="col-md-2">
            <label for="data_doc" className="control-label">
              Data do Lancamento
            </label>
            <input
              id="data_doc"
              className="form-control"
              name="dataLancamento"
              type="date"
              onChange={handleChangeLancamento}
            />
          </div>

          <div className="col-md-3">
            <label for="data_doc" className="control-label">
              Guarnição
            </label>
            <input
              id="data_doc"
              className="form-control"
              name="codigo"
              type="text"
              onChange={handleChangeGuarnicao}
            />
          </div>
        </div>

        <ViewViatura viatura={viatura} />
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
                  <input
                    id="data_doc"
                    type="text"
                    className="form-control"
                    name="placa"
                    value={viatura.placa || ""}
                    onChange={handleChangeviatura}
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
                    value={viatura.hodInicial || ""}
                    onChange={handleChangeviatura}
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
                    value={viatura.hodFinal || ""}
                    onChange={handleChangeviatura}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label for="data_doc" className="control-label">
                    Componente da VTR (Nome Funcional)
                  </label>
                  <input
                    id="data_doc"
                    className="form-control"
                    type="text"
                    name="nome"
                    value={componenteVtr.nome || ""}
                    onChange={handleChangevCompVtr}
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
