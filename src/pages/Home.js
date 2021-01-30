import React, { useState } from "react";
import moment from "moment";
import ModalGlobal from "../components/Modal";
import Alert from "../components/Alert"

function Home() {
  const [show, setShow] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const agora = moment(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Alert message={"Salvo com Sucesso"} showMessage={showMessage} onclose={()=>setShowMessage(false)}/>
      <buton onClick={() => setShowMessage(true)}>Show Alert</buton>
      <div className="jumbotron">
        <h2>Pagina inicial</h2>
        {agora.format("DD/MM/YYYY HH:mm")}
      </div>

      <ModalGlobal
        title={"Confirmação"}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
      <button className="btn btn-primary" onClick={handleShow}>
        Launch demo modal
      </button>
    </div>
  );
}

export default Home;
