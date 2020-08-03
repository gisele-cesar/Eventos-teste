import React, { useState, useEffect } from 'react';
import './home.css';
import firebase from '../../config/firebase';
import NavBar from '../../components/navbar/';
import EventCard from '../../components/event-card/';
import { useSelector } from 'react-redux';

function Home() {

    const [events, setEvents] = useState([]);
    const [search, setSearch] = useState('');
    let eventList = [];

    useEffect(() => {
        firebase.firestore()
            .collection('eventos')
            .get()
            .then(async (result) => {
                await result.docs.forEach(doc => {
                    if (doc.data().title.indexOf(search) >= 0) {
                        eventList.push({
                            id: doc.id,
                            ...doc.data()
                        })
                    }
                })
                setEvents(eventList)
            })
    });

    return (
        <>
            <NavBar />

            <div className='row p-5'>
                <input onChange={(e) => setSearch(e.target.value)} type='text' className='form-control text-center' placeholder='Pesquisar evento pelo título...' />
            </div>

            <div className='row p-3'>
                {events.map(item => <EventCard key={item.id} id={item.id} img={item.file} title={item.title} details={item.details} views={item.views} />)}
            </div>
        </>
    )
}

export default Home;