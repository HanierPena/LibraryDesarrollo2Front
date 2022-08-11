import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Libro from '../components/Libro';
import Navbar from '../components/Navbar';
import axios from 'axios';

const cookies = new Cookies();
const baseUrl = "https://hiderbrandon-library.herokuapp.com/api/";
let key = cookies.get('key');

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = { Books: [] };
    }


    async componentDidMount() {
        let bookList = await axios.get(baseUrl, { headers: { "Authorization": `token ${key}` } });

        this.setState(this.state.Books = bookList.data)
        console.log(this.state.Books)



        if (!cookies.get('username')) {
            window.location.href = "./";
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                {this.state.Books.map((mybook) => <Libro book={mybook} key={mybook.title} />)}
            </div>
        );
    }
}

export default Menu;