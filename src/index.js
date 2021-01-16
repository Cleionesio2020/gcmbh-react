import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './contexts/AuthContext'

ReactDOM.render(
  <React.StrictMode>
<AuthProvider>

    <App />
    </AuthProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

