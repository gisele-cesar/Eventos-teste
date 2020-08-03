import React, { useState } from 'react';
import './login.css';
import { Link, Redirect } from 'react-router-dom';

import firebase from '../../config/firebase';
import 'firebase/auth';

import { useSelector, useDispatch } from 'react-redux';

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msgType, setMsgType] = useState();

    const dispatch = useDispatch();

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(result => {
                setMsgType('sucesso')
                setTimeout(() => {
                    dispatch({ type: 'LOG_IN', userEmail: email })
                }, 2000);
            })
            .catch(erro => {
                setMsgType('erro');
            });
    }

    return (
        <div className="login-content d-flex align-items-center">

            {useSelector(state => state.userLogged) > 0 ? <Redirect to='/' /> : null}

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <i className="far fa-smile-wink text-white fa-5x"></i>
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />

                <button onClick={logar} className="btn btn-lg btn-block btn-login" type="button">Logar</button>

                <div className="msg-login text-white text-center my-5">
                    {msgType === 'sucesso' && <span><strong>WoW!</strong>Você está conectado! &#128526;</span>}
                    {msgType === 'erro' && <span><strong>Ops!</strong>Verifique se a senha ou usuário estão corretos! &#128546;</span>}
                </div>

                <div className="options-login mt-5 text-center">
                    <Link to="/recoveruserpassword" className="mx-2">Recuperar Senha</Link>
                    <span className="text-white">&#9733;</span>
                    <Link to="newuser" className="mx-2">Quero cadastrar</Link>
                </div>

            </form>
        </div>
    )
}

export default Login;