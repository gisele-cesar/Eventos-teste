import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';

import './event-card.css';

function EventCard({ id, img, title, details, views }) {

    const [urlImage, setUrlImage] = useState();

    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImage(url));
    }, [urlImage]);

    return (
        <div className='col-md-3 col-sm-12'>
            <img src={urlImage} className='card-img-top img-card' alt='Imagem do Evento' />

            <div className='card-body'>
                <h5>{title}</h5>
                <p className='card-text text-justify'>{details}</p>

                <div className='row foot-card d-flex align-items-center'>
                    <div className='col-6'>
                        <Link to={'/eventdetails/' + id} className='btn btn-sm btn-details'>+ detalhes</Link>
                    </div>

                    <div className='col-6 text-right'>
                        <i class="fas fa-eye"></i> <span>{views}</span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default EventCard;