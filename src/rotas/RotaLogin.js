import React from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Login from "../login/Login";

export default function Rotas() {
    return (
        <Router basename='/site'>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    )
}