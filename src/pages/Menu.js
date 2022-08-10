import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Libro from '../components/Libro';
import Navbar from '../components/Navbar';
import axios from 'axios';

const cookies = new Cookies();
const baseUrl = "https://hiderbrandon-library.herokuapp.com/api/";
let key = cookies.get('key');

class Menu extends Component {
    
    async componentDidMount() {
    let response = await axios.get(baseUrl, { headers: { "Authorization": `token ${key}` } });
    console.log(response.data);
        if (!cookies.get('username')) {
            window.location.href = "./";
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <Libro usuario={cookies.get('nombre')} />
                <br />
            </div>
        );
    }
}

export default Menu;