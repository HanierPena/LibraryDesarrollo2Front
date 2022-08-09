import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Consultas extends Component {
    render() {
        return(
            <div>
            <Navbar/>
                <label>Libro: </label>
                <input text="nombreLibro"className="form-control" name="nombreLibro"/>

                <label>Autor: </label>
                <input text="autorLibro"className="form-control" name="autorLibro"/>
                <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Consultar</button>
                <br/>
            </div>
        );
    }    
}
export default Consultas;