import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msgType, setMsgType] = useState();

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(result => {
                setMsgType('sucesso');
            })
            .catch(erro => {
                setMsgType('erro');
            });
    }

    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src="/docs/4.5/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />

                <button onClick={logar} class="btn btn-lg btn-block btn-login" type="button">Logar</button>

                <div className="msg-login text-white text-center my-5">
                    {msgType === 'sucesso' && <span><strong>WoW!</strong>Você está conectado! &#128526;</span>}
                    {msgType === 'erro' && <span><strong>Ops!</strong>Verifique se a senha ou usuário estão corretos! &#128546;</span>}
                </div>

                <div className="options-login mt-5 text-center">
                    <a href="#" className="mx-2">Recuperar Senha</a>
                    <span className="text-white">&#9733;</span>
                    <Link to="newuser" className="mx-2">Quero cadastrar</Link>
                </div>

            </form>
        </div>
    )
}

export default Login;