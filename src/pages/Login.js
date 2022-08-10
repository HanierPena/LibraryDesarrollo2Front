import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl = "https://hiderbrandon-library.herokuapp.com/api/dj-rest-auth/";
const cookies = new Cookies();

class Login extends Component {
    state = {
        form: {
            username: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion = async () => {
        await axios.post(baseUrl + "login/",
            {
                username: this.state.form.username,
                password: this.state.form.password,
                email: "hanierpe@gmail.com"
            })
            .then(async response => {
                console.log(response.data.key);
                let key = response.data.key
                const userInfo = await axios.get(baseUrl + "user/",
                    { headers: { "Authorization": `token ${key}` } })
                console.log(userInfo);
                return userInfo;
            })
            .then(response => {
                console.log(response)
                if (response.status == 200) {
                    var respuesta = response[0];
                    cookies.set('id', response.data.pk, { path: "/" });
                    cookies.set('apellido_paterno', response.data.last_name, { path: "/" });
                    cookies.set('nombre', response.data.first_name, { path: "/" });
                    cookies.set('username', response.data.username, { path: "/" });
                    alert(`Bienvenido ${response.data.first_name} ${response.data.last_name}`);
                    window.location.href = "./menu";
                } else {
                    alert('El usuario o la contraseña no son correctos');
                }
            })
            .catch(error => {
                console.log(error);
            })

    }

    componentDidMount() {
        if (cookies.get('username')) {
            window.location.href = "./menu";
        }
    }


    render() {
        return (
            <div>
                <h1 className='titulo'>Library</h1>
                <div className="containerPrincipal">
                    <div className="containerSecundario">
                        <div className="form-group">
                            <label>Usuario: </label>
                            <br />
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={this.handleChange}
                            />
                            <br />
                            <label>Contraseña: </label>
                            <br />
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={this.handleChange}
                            />
                            <br />
                            <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>Iniciar Sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;