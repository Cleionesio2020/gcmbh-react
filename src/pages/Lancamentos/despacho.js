import React from "react";
import { FaList } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Despacho() {
    let navigate = useNavigate();
    return (

        <div className="jumbotron">

            <div className='top-table' >
                <div><h4>Registrar Despacho</h4></div>
                <button className="btn btn-secondary" onClick={() => navigate('/Protocolo')}> <FaList size="15" />&nbsp;&nbsp;Voltar lista</button>
            </div>

            <form>
                <div className="empresa">
                    <div className="row">
                        <div className="col-sm-3">
                            <label for="num_prot" className="control-label">Nº Protocolo</label>
                            <input id="num_prot" className="form-control input-md" name="data_num_prot" type="text" />
                        </div>
                        <div className="col-sm-3">
                            <label for="data_prot" className="control-label">Data Despacho</label>
                            <input id="data_prot" className="form-control input-md" name="data_protocolo" type="datetime-local" />
                        </div>
                    </div>
                </div>
                <div className="empresa">
                    <h5>Orígem Despacho</h5>
                    <div className="row">
                        <div className="col-sm-2">
                            <label className="control-label" for="bm_origem">BM / Matrícula</label>
                            <input id="bm_origem" className="form-control input-md" type="text" name="bm_origem" />
                        </div>

                        <div className="col-sm-5">
                            <label for="nome_ori" className="control-label">Nome Funcional </label>
                            <div className="ng-autocomplete orm-control" >
                                <input id="nome_ori" className="form-control input-md" name="data_protocolo" type="text" />
                            </div>
                        </div>

                        <div className="col-sm-5">
                            <label for="ger_ori" className="control-label">Setor Origem Despacho</label>
                            <input id="ger_ori" className="form-control" type="text" name="secretaria_origem" />
                        </div>
                    </div>
                </div>

                <div className="empresa">
                    <h5>Destino Despacho</h5>
                    <div className="row">
                        <div className="col-sm-2">
                            <label className="control-label" for="bm_des">BM / Matrícula</label>
                            <input id="bm_des" className="form-control" type="text" name="bm_destino" />
                        </div>

                        <div className="col-sm-5">

                            <label for="nome_dest" className="control-label">Nome Funcional </label>
                            <div className="ng-autocomplete orm-control" >
                                <input id="nome_ori" className="form-control input-md" name="data_protocolo" type="text" />
                            </div>
                        </div>

                        <div className="col-sm-5">
                            <label for="ger_dest" className="control-label">Setor destino despacho</label>
                            <input id="ger_dest" className="form-control" type="text"
                                name="secretaria_destino" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <label for="num_prot" className="control-label">Despacho</label>
                            <textarea id="num_prot" className="form-control input-md" name="data_num_prot"></textarea>
                        </div>
                    </div>
                    <hr />
                    <button id="Cadastrar" name="Cadastrar" className="btn btn-success" type="Submit">Salvar Despacho</button>
            &emsp;
            <button id="Cancelar" name="Cancelar" className="btn btn-danger" type="Reset"> Cancelar </button>

                </div>
            </form>
        </div>

    )
}
export default Despacho;
