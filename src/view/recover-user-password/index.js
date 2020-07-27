import React, { useState } from 'react';
import NavBar from '../../components/navbar/';
import './recover-user-password.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { auth } from 'firebase';

function RecoverUserPassword() {

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function recoverPassword() {
        firebase.auth().sendPasswordResetEmail(email)
            .then(result => {
                setMsg('Enviado email para redefinação de senha!');
            }).catch(erro => {
                setMsg('Verifique se o email está correto!');
            })
    }

    return (
        <>
            <NavBar />

            <form className="text-center form-login mx-auto mt-5">
                <h3 className="mb-3 font-weight-bold">Recuperar Senha</h3>
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />

                <div className="msg-4 text-center">
                    <span>{msg}</span>
                </div>
                <button onClick={recoverPassword} type="button" className="btn btn-lg btn-block btn-send">Recuperar Senha</button>

            </form>

        </>
    )
}

export default RecoverUserPassword;