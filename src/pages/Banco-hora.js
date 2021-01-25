import { Alert } from 'bootstrap';
import React, { useState } from 'react';
import SelectServidorNome from '../components/SelectServidorNome';


function BancoHora() {

  const [lancamento, setLancamento] = useState({})

  const handleSubmit = event => {
    event.preventDefault();

    alert("Chamou")
  }


  return (
    <>
      <div className="container" style={{ marginTop: "20px", width: '50rem' }} >
        <form onSubmit={handleSubmit}>
          <div className='card'>

            <div className="card-body">
              <h5 className='card-title'>Lancamento Banco Banco de Horas</h5>

              <div className="form-row">
                <div className="form-group col-md-9">
                  <label>Servidor</label>
                 <SelectServidorNome/>
                </div>

                <div className="form-group col-md-3">
                  <label>Bm</label>
                  <input className="form-control" type="text" placeholder="Input padrão" />
                </div>

              </div>

              <div className="row">

                <div className="form-group col-md-5">
                  <label>Data do referência</label>
                  <input className="form-control" type="date" placeholder="Input padrão" />
                </div>

                <div className="form-group col-md-3">
                  <label>N Horas</label>
                  <input className="form-control" type="time" placeholder="Input padrão" />
                </div>

                <div className="form-group col-md-4">
                  <label for="">Tipo de lançamento</label>
                  <div>
                    <div class="form-check form-check-inline" style={{ marginRight: "50px" }}>
                      <input class="form-check-input" type="radio" name="radio" id="inlineRadio2" value="CREDITO" />
                      <label class="form-check-label">Cédito</label>
                    </div>

                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="radio" id="inlineRadio3" value="DEBITO" />
                      <label class="form-check-label"> Débito</label>
                    </div>
                  </div>
                </div>


              </div>

              <div className="form-group">
                <label>Descriçao lançamento</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>

              <button className="btn btn-primary" type="submit" >Salvar</button>
            </div>
          </div>
        </form>
      </div>
    </>

  )
}

export default BancoHora;
