import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';

import './user-new.css';

function NewUser() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msgType, setMsgType] = useState();
    const [msg, setMsg] = useState();
    const [loading, setLoading] = useState();

    function cadastrar() {

        setLoading(1);

        setMsgType(null);

        if (!email || !password) {
            setMsgType('erro')
            setMsg('Você precisa informar email e senha para fazer o cadastro!')
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                setLoading(0);
                setMsgType('sucesso')
            }).catch(erro => {
                setLoading(0);
                setMsgType('erro')
                switch (erro.message) {
                    case 'Password should be at least 6 characters':
                        setMsg('A senha deve conter pelo menos 6 caracteres!');
                        break;
                    case 'The email address is already in use by another account.':
                        setMsg('Este email já está sendo utilizado por outro usuário!');
                        break;
                    case 'The email address is badly formatted.':
                        setMsg('O formato do seu email é inválido!');
                        break;
                    default:
                        setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
                }
            })
    }

    return (
        <div className="form-cadastro">
            <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>

                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />

                {
                    loading ? <div class="spinner-border text-danger" role="status"><span class="sr-only">Loading...</span></div>
                        : <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Cadastrar</button>
                }

                <div className="msg-login text-black text-center my-5">
                    {msgType === 'sucesso' && <span><strong>WoW!</strong>Usuário cadastrado com sucesso! &#128526;</span>}
                    {msgType === 'erro' && <span><strong>Ops!</strong> {msg} &#128546;</span>}
                </div>

            </form>
        </div>
    )
}

export default NewUser;