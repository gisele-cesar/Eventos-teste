import React, { useState, useEffect } from 'react';
import './home.css';
import firebase from '../../config/firebase';
import NavBar from '../../components/navbar/';
import EventCard from '../../components/event-card/';
import { useSelector } from 'react-redux';

function Home() {

    const [events, setEvents] = useState([]);
    let eventList = [];

    useEffect(() => {
        firebase.firestore()
            .collection('eventos')
            .get()
            .then(async (result) => {
                await result.docs.forEach(doc => {
                    eventList.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setEvents(eventList)
            })
    });

    return (
        <>
            <NavBar />
            <h1>{useSelector(state => state.userEmail)}</h1>
            <h1>Logado: {useSelector(state => state.userLogged)}</h1>

            <div className='row'>
                {events.map(item => <EventCard key={item.id} img={item.file} title={item.title} details={item.details} views={item.views} />)}
            </div>
        </>
    )
}

export default Home;