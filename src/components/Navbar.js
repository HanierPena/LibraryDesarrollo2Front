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
    consultarLibro=()=>{
        window.location.href='./consulta';
    }
    inicio=()=>{
        window.location.href='./menu';
    }
    render (){
    return <div className="nav">
        <ul className="ul_">
            <li>
               <a href="#" onClick={()=> this.inicio()}>Inicio</a>
            </li>
            <li>

                <a href="#" onClick={()=> this.consultarLibro()}>Consulta</a>
            </li>
            <li>
                <a href="#">Más</a>
            </li>

        </ul>
        <div className="nombreInicio"> 
            <h1 >Hola, {cookies.get('nombre')} </h1>
        </div>
        <div className="btnCerrar">
        <a onClick={()=>this.cerrarSesion()}>Cerrar Sesión</a>
        </div>



    </div>
    }
  
}
export default Navbar;