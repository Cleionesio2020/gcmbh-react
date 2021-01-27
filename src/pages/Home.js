import React, { useState } from "react";
import moment from "moment";
import ModalGlobal from "../components/Modal";
import Button from "react-bootstrap/Button";

function Home() {
  const [show, setShow] = useState(false);

  const agora = moment(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
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
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
    </div>
  );
}

export default Home;
