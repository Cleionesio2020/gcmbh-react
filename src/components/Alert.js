import { useState } from 'react';
import Alert from 'react-bootstrap/Alert'


function Alerta(props) {

    return (
        <>
            <Alert variant="success" onClose={props.onclose}  show={props.showMessage} dismissible style={{width:"300px"}}>
                 {props.message}
            </Alert>
           
        </>

    )


}
export default Alerta