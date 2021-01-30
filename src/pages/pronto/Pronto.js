import React from "react";
import {
    Link, Outlet
} from "react-router-dom";

function Pronto() {
    return (
        <>
            <div className="content" style={{ marginTop: "20px" }} >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <Link className="nav-link active" id="home-tab" data-toggle="tab" to="" role="tab" aria-controls="home" aria-selected="true">Lancamento Pronto </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" id="contact-tab" data-toggle="tab" to="RelatorioPronto" role="tab" aria-controls="contact" aria-selected="false">Relatório de Pronto</Link>
                    </li>

                </ul>
                <div className="panel-toobar">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Pronto;
