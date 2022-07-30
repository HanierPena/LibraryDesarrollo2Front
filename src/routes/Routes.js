import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Menu from '../pages/Menu';

function Routesz() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Login}/>
        <Route exact path="/menu" component={Menu}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Routesz;