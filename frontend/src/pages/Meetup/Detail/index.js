import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
    MdDeleteForever,
    MdModeEdit,
    MdEvent,
    MdLocationOn,
} from 'react-icons/md';
import api from '../../../services/api';
import history from '../../../services/history';

import { Container } from './styles';

export default function detail({ location }) {
    const { meetup } = location.state;

    async function handleEditMeetup(data) {
        // to="/meetup/edit"
        history.push('/meetups/edit', { meetup: data });
    }

    async function handleCancelMeetup() {
        try {
            await api.delete(`/meetups/${meetup.id}`);
            toast.success('Meetup cancelado com sucesso.');
            history.push('/');
        } catch (err) {
            toast.error(err);
        }
    }

    return (
        <Container>
            <header>
                <h1>{meetup.title}</h1>
                <div>
                    <button
                        type="button"
                        className="edit"
                        onClick={() => handleEditMeetup(meetup)}
                    >
                        <MdModeEdit size="20" />
                        <span>Editar Meetup</span>
                    </button>
                    <button
                        type="button"
                        className="cancel"
                        onClick={() => handleCancelMeetup()}
                    >
                        <MdDeleteForever size="20" />
                        <span>Cancelar</span>
                    </button>
                </div>
            </header>
            <section>
                <img className="banner" src={meetup.banner.url} alt="" />
                <div className="description">
                    <p>{meetup.description}</p>
                </div>
                <footer className="info">
                    <div className="date">
                        <MdEvent size="20" />
                        <span>{meetup.formattedDate}</span>
                    </div>
                    <div className="location">
                        <img src="" alt="" />
                        <MdLocationOn size="20" />
                        <span>{meetup.location}</span>
                    </div>
                </footer>
            </section>
        </Container>
    );
}

detail.propTypes = {
    location: PropTypes.shape({
        state: PropTypes.shape({
            meetup: PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string,
                description: PropTypes.string,
                location: PropTypes.string,
                formattedDate: PropTypes.string,
                banner: PropTypes.shape({
                    url: PropTypes.string,
                }),
            }),
        }),
    }).isRequired,
};
