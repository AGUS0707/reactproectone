import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "bootstrap/dist/css/bootstrap.css"

import NavBar from "./component/NavBar";
import Routing from "./component/Routing";
import Register from "./component/Register";
import NotFound from "./component/NotFound";



ReactDOM.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>,
  document.getElementById('root')
);


