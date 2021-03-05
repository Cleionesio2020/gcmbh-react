import { useState } from 'react';
import Alert from 'react-bootstrap/Alert'


function Alerta(props) {

    return (
        <>
            <Alert variant={props.variant} onClose={props.oncloseMessage}   dismissible >
                 {props.message}
            </Alert>
           
        </>

    )


}
export default Alerta