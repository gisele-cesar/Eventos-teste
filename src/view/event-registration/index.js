import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './event-registration.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar/';

import firebase from '../../config/firebase';


function EventRegistration() {
    const [loading, setLoading] = useState();
    const [msgType, setMsgType] = useState();
    const [title, setTitle] = useState();
    const [type, setType] = useState();
    const [details, setDetails] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [file, setFile] = useState();
    const userEmail = useSelector(state => state.userEmail);

    const storage = firebase.storage();
    const db = firebase.firestore();

    function register() {
        setMsgType(null);
        setLoading(1);

        storage.ref(`imagens/${file.name}`).put(file)
            .then(() => {
                db.collection('eventos').add({
                    title: title,
                    type: type,
                    details: details,
                    date: date,
                    hour: hour,
                    user: userEmail,
                    views: 0,
                    file: file.name,
                    public: 1,
                    create: new Date()
                }).then(() => {
                    setMsgType('sucesso');
                    setLoading(0);
                }).catch(erro => {
                    setMsgType('erro');
                    setLoading(0);
                });
            });
    }

    return (
        <>
            <NavBar />
            <div className="col-12 mt-5">
                <div className="row">
                    <h3 className="mx-auto font-weight-bold">Novo Evento</h3>
                </div>
                <form>
                    <div className="form-group">
                        <label>Título:</label>
                        <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Tipo do Evento:</label>
                        <select onChange={(e) => setType(e.target.value)} className="form-control">
                            <option disabled selected value>-- Selecione um tipo --</option>
                            <option>Festa</option>
                            <option>Teatro</option>
                            <option>Show</option>
                            <option>Evento</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Descrição do Evento:</label>
                        <textarea onChange={(e) => setDetails(e.target.value)} className="form-control" rows="3" />
                    </div>
                    <div className="form-group row">
                        <div className="col-6">
                            <label>Data:</label>
                            <input onChange={(e) => setDate(e.target.value)} type="date" className="form-control" />
                        </div>
                        <div className="col-6">
                            <label>Hora:</label>
                            <input onChange={(e) => setHour(e.target.value)} type="time" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Upload da Foto:</label>
                        <input onChange={(e) => setFile(e.target.files[0])} type="file" className="form-control" />
                    </div>

                    <div className="row">
                        {
                            loading > 0 ? <div class="spinner-border text-danger mx-auto" role="status"><span class="sr-only">Loading...</span></div>
                                : <button onClick={register} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Publicar Evento</button>
                        }

                    </div>

                </form>

                <div className="msg-login text-center mt-2">
                    {msgType === 'sucesso' && <span><strong>WoW!</strong>Evento Publicado &#128526;</span>}
                    {msgType === 'erro' && <span><strong>Ops!</strong>Não foi possível publicar o evento &#128546;</span>}
                </div>

            </div>
        </>
    )

}

export default EventRegistration;
