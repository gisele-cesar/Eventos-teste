import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './event-registration.css';
import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar/';

import firebase from '../../config/firebase';


function EventRegistration() {
    return (
        <>
            <NavBar />
            <h1>Cadastro de evento</h1>
        </>
    )

}

export default EventRegistration;
