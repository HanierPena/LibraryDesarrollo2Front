import React from "react";
import { MenuItems } from "../resources/MenuItems";
import { Tabs, Tab } from "react-bootstrap";
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';


const cookies = new Cookies();
class Navbar extends React.Component{

    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }
    render (){
    return <div className="nav">
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
    }
  
}
export default Navbar;