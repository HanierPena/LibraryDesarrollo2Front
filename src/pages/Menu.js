import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Libro from '../components/Libro';
import Navbar from '../components/Navbar';


const cookies = new Cookies();

class Menu extends Component {

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('apellido_paterno: '+cookies.get('apellido_paterno'));
        console.log('apellido_materno: '+cookies.get('apellido_materno'));
        console.log('nombre: '+cookies.get('nombre'));
        console.log('username: '+cookies.get('username'));
        return (
            <div>
                <Navbar/>
                <Libro usuario={cookies.get('nombre')}/>
                <br />
            </div>
        );
    }
}

export default Menu;