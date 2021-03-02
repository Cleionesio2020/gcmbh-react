
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'




export default function ModalGlobal(props) {

  return (
    <div>
      <Modal show={props.show} >
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.body}
          <br/>
          <textarea className="form-control" onChange={props.handleObservacao}></textarea>
        </Modal.Body>
       
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={props.handleClose}>
            Sair
          </button>
          <button className="btn btn-primary" onClick={props.setObservacao}>
            Confirmar o pronto
          </button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}
