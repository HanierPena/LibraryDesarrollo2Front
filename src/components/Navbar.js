import React from "react";
import { MenuItems } from "../resources/MenuItems";
import { Tabs, Tab } from "react-bootstrap";
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <div className="nav">
        <ul className="ul_">
            <li>
                <a href="#">Inicio</a>
            </li>
            <li>
                <a href="#">Consulta</a>
            </li>
            <li>
                <a href="#">Más</a>
            </li>

        </ul>
        <button className="btn_cerrar" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>



    </div>
  );
}