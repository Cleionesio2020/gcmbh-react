import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Async, { makeAsyncSelect } from "react-select/async";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { useForm } from "react-hook-form";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "./main.css";
import Modal from "react-modal";

import ptbrLocale from "@fullcalendar/core/locales/pt-br";

function EmpenhoHome() {
  let subtitle;
  const [isOpen, setIsOpen] = useState(false);
  const [valor, setValor] = useState(false);
  const [event, setEvent] = useState(false);
  const { register, handleSubmit, watch} = useForm();

  async function loadOptions(inputValue, callback) {
    if (inputValue.length > 2) {
      const response = await axios.get(
        `http://localhost:8080/guarnicao?codigo=${inputValue}`
        //"https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.data;
      const retorno = data.map((item) => {
        return { label: item.codigo, value: item.id };
      });
      callback(retorno);
      // inputValue=""
    }
  }

  const selectValue = (teste) => {
    setValor(teste.map(item=>({id:item.value,codigo:item.label})))
  };

  //MANIPULANDO OS DADOS DO FOFMULARIO MODALL COM HOOKFORM*******************************************/
 
  const onSubmit = (data,e) => {
    ///data = {...data, vtrEmpenhada:[...valor]};
    alert(JSON.stringify(data));
   
  };

//************************************************************************************************* */
  const handleInputChange = (texto) => {
    const inputValue = texto.replace(/\W/g, "");
    return inputValue;
  };

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  let events = [
    {
      title: "Passear com o cachorro",
      start: getDate("YEAR-MONTH-01"),
      autor: "Cleionesio",
    },
  ];

  function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
      month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
  }

  const handleDateClick = (arg) => {
    console.log(arg.event);
    setEvent(arg.event);
    setIsOpen(!isOpen);
  };

 


  return (
    <div>
      <FullCalendar
        defaultView="dayGridMonth"
        header={{
          left: "prev,next, today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={events}
        locale={ptbrLocale}
        eventLimit={3}
        eventAllow={true}
        dateClick={null}
        eventClick={(arg) => handleDateClick(arg)}
      />
      <Modal
        isOpen={isOpen}
        onAfterClose={()=>onSubmit(null)}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={100}
        style={{ overlay: { zIndex: 10 } }}
      >
        <div class="modal-header">
          <h5 class="modal-title">Detalhes do empenho</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={toggleModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="body-modal">

          
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-row">
              <div class="form-group col-md-3">
                <label>Data inicio</label>
                <input type="datetime-local" class="form-control" name="dataInicio" ref={register}/>
              </div>

              <div class="form-group col-md-3">
                <label for="inputPassword4">Data fim</label>
                <input type="datetime-local" class="form-control" name="dataFim" ref={register}/>
              </div>

              <div class="form-group col-md-6">
                <label for="inputState">Origem do empenho</label>
                <select class="form-control"  name="origem" ref={register}>
                  <option selected>selecione um...</option>
                  <option>CECOGE</option>
                  <option>INSPETORIA 1</option>
                  <option>DOP</option>
                  <option>DME</option>
                  <option>INPETORIA BARREIRO</option>
                  <option>INSPETORIA PAMPULHA</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-3">
                <label>Num Empenho</label>
                <input
                  type="text"
                  class="form-control"
                  value={new Date().getTimezoneOffset()}
                  name="numEmpenho" ref={register}
                />
              </div>
              <div class="form-group col-md-5">
                <label>Responsavel</label>
                <input type="text" class="form-control"  name="responsavel" ref={register}/>
              </div>
              <div class="form-group col-md-4">
                <label>Cod Proprio</label>
                <input type="text" class="form-control"  ref={register}/>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-4">
                <label>Atividade </label>
                <input type="text" class="form-control" name="atividade" ref={register}/>
              </div>

              <div class="form-group col-md-1"></div>

              <div class="form-group col-md-7 ">
                <p></p>
                <br />
                <div class="form-check form-check-inline center">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="situacao"
                    id="inlineRadio1"
                    value="Execultado"
                    ref={register}
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Execultado
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="situacao"
                    id="inlineRadio2"
                    value="Execultado em Parte"
                    ref={register}
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Execultado em parte
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="situacao"
                    id="inlineRadio3"
                    value="Nao execultado"
                    ref={register}
                  />
                  <label class="form-check-label" for="inlineRadio3">
                    Não execultado
                  </label>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>Endereço</label>
              <input type="text" class="form-control" name="endereco"
              ref = { register({ required: true, maxLength: 20 }) }
               />
            </div>

            <div class="form-group">
              <label>Viaturas empenhadas</label>

              <AsyncSelect
                isMulti
                cacheOptions
                loadOptions={loadOptions}
                onInputChange={handleInputChange}
                onChange={selectValue}
              />
            </div>

            <div class="form-group">
              <label>Prescrição diversa</label>
              <textarea class="form-control" rows="2"></textarea>
            </div>

            <div class="form-row">
              <button type="submit" class="btn btn-primary block">
                Salvar Evento
              </button>

              <button class="btn btn-ligth" onClick={toggleModal}>
                Sair
              </button> 
              <br></br>
              <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input inline"
                id="exampleCheck1"
                name="repetirEvento"
                ref={register}
              />
              <label class="form-check-label" for="exampleCheck1">
                Repetir este evento?
              </label>
            </div>
            </div>

            
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default EmpenhoHome;
