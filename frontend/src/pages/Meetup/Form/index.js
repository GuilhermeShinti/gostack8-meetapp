import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import api from '../../../services/api';
import history from '../../../services/history';

import 'react-datepicker/dist/react-datepicker.css';

import BannerInput from './BannerInput';
import { Container } from './styles';

// match
export default function MeetupForm({ location: local }) {
    const [selectedDate, setDate] = useState(null);
    const meetup = local.state && local.state.meetup;
    console.log(meetup);
    const schema = Yup.object().shape({
        // file_id: Yup.number().required('Banner obrigatório!'),
        file_id: Yup.number(),
        title: Yup.string().required('Título obrigatório!'),
        description: Yup.string().required('Descrição obrigatória!'),
        location: Yup.string().required('Local obrigatório!'),
        date: Yup.date().required('Data obrigatória!'),
    });

    async function handleSubmit({ id, title, description, location, file_id }) {
        const data = Object.assign(
            { id, title, description, location, file_id },
            { date: selectedDate }
        );

        try {
            if (meetup) {
                await api.put(`meetups/${data.id}`, data);
                toast.success('Meetup atualizado com sucesso!');
            } else {
                await api.post('meetups', data);
                toast.success('Meetup criado com sucesso!');
            }

            history.push('/');
        } catch (err) {
            toast.error('Falha naa solicitação, tente novamente');
        }
    }

    return (
        <Container>
            <Form initialData={meetup} onSubmit={handleSubmit}>
                <Input name="id" hidden />
                <BannerInput name="file_id" />
                <Input name="title" placeholder="Título do Meetup" />
                <Input
                    multiline
                    name="description"
                    placeholder="Descrição completa"
                />
                <ReactDatePicker
                    className="date"
                    name="date"
                    placeholderText="Data do meetup"
                    // dateFormat="YYYY-MM-DDThh-mm-ss"
                    // 2019-10-31T03:00:00.000Z
                    selected={selectedDate}
                    onChange={date => setDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
                <Input name="location" placeholder="Localização" />
                <div>
                    <button type="submit">Salvar meetup</button>
                </div>
            </Form>
        </Container>
    );
}

MeetupForm.propTypes = {
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
