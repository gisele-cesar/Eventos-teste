import React, { useState } from 'react';
import './home.css';
// import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar/';
import { useSelector } from 'react-redux';

function Home() {
    return (
        <>
            <NavBar />
            <h1>{useSelector(state => state.userEmail)}</h1>
            <h1>Logado: {useSelector(state => state.userLogged)}</h1>
        </>
    )
}

export default Home;