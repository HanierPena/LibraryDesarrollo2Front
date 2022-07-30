import React from 'react';
import ReactDOM from 'react-dom/client';
import Routesz from './routes/Routes';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); 
root.render(
  <React.StrictMode>
    <Routesz />
  </React.StrictMode>
);