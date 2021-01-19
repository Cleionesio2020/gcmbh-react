import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Escala from "../pages/Escala";


export default function Rotas() {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/">
                        <Escala />
                    </Route>
                    <Route path="/Lotacao">
                        <h3>Lotacao</h3>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}