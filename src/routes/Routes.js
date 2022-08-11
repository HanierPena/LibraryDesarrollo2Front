import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Consulta from '../pages/Consulta';

function Routesz() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element=<Login /> />
        <Route exact path="/menu" element=<Menu /> />
        <Route exact path="/consulta" element=<Consulta /> />
      </Routes>
    </BrowserRouter>
  );
}

export default Routesz;
