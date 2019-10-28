import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';

import { MdKeyboardArrowRight, MdAddCircleOutline } from 'react-icons/md';
import api from '../../services/api';
import history from '../../services/history';

import { Container, MeetupList } from './styles';

export default function Dashboard() {
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        async function loadMeetups() {
            const response = await api.get('organizing');
            const data = response.data.map(meetup => {
                return {
                    ...meetup,
                    parsedDate: parseISO(meetup.date),
                    formattedDate: format(
                        parseISO(meetup.date),
                        "dd 'de' MMMM, HH'h'"
                    ),
                };
            });

            setMeetups(data);
        }

        loadMeetups();
    }, []);

    function handleCreateNewMeetup() {
        history.push('/meetups/new');
    }

    function handleMeetupDetail(meetup) {
        history.push('/meetups/detail', { meetup });
    }

    return (
        <Container>
            <header>
                <h1>Meus meetups</h1>
                <button type="button" onClick={handleCreateNewMeetup}>
                    <MdAddCircleOutline size="24" />
                    <span>Novo Meetup</span>
                </button>
            </header>
            <MeetupList>
                {meetups.map(meetup => (
                    <li key={meetup.id}>
                        {meetup.title}
                        <aside>
                            <span>{meetup.formattedDate}</span>
                            <MdKeyboardArrowRight
                                size="24"
                                onClick={() => handleMeetupDetail(meetup)}
                            />
                        </aside>
                    </li>
                ))}
            </MeetupList>
        </Container>
    );
}
