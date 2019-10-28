import React, { useEffect, useState, useMemo } from 'react';
import {
    Alert,
    RefreshControl,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, subDays, addDays, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import {
    Container,
    List,
    EmptyList,
    EmptyListText,
    DatePicker,
    TextDate,
} from './styles';

export default function Dashboard() {
    const [refreshing, setRefresh] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingMoreMeetup, setLoadingMoreMeetup] = useState(false);
    const [meetups, setMeetups] = useState([]);
    const [date, setDate] = useState(new Date());
    const [page, setPage] = useState(1);

    function meetupsDateFormat(unformattedMeetups) {
        return unformattedMeetups.map(meetup => ({
            ...meetup,
            formattedDate: format(
                parseISO(meetup.date),
                "d 'de' MMMM 'de' yyyy 'às' HH:mm",
                { locale: pt }
            ),
        }));
    }

    async function loadMeetups() {
        try {
            setLoading(true);
            const response = await api.get('meetups', {
                params: {
                    date: date.toISOString(),
                    page,
                },
            });

            const newMeetups = meetupsDateFormat(response.data);
            setMeetups(newMeetups);
            setLoading(false);
            // setLoadingMoreMeetup(false);
            // setPage(page + 1);
        } catch (err) {
            setLoading(false);
            Alert.alert('Erro', 'Falha ao buscar Meetups');
        }
    }

    async function handleSubscribe(id) {
        try {
            await api.post('subscription', null, {
                params: { meetupId: id },
            });
            setMeetups(meetups.filter(f => f.id !== id));
        } catch (err) {
            Alert.alert('Erro', 'Falha ao se inscrever na Meetup.');
        }
    }

    async function handleRefresh() {
        setRefresh(true);
        await loadMeetups();
        setRefresh(false);
    }

    useEffect(() => {
        loadMeetups();
    }, []);

    useEffect(() => {
        setPage(1);
        loadMeetups();
    }, [date]);

    const dateFormatted = useMemo(
        () => format(date, "dd 'de' MMMM", { locale: pt }),
        [date]
    );

    function handlePreviusDay() {
        if (loading) return;
        setMeetups([]);
        setDate(subDays(date, 1));
    }

    function handleNextDay() {
        if (loading) return;
        setMeetups([]);
        setDate(addDays(date, 1));
    }

    // function handleNextPage() {
    //     setLoading(true);
    //     setPage(page + 1);
    // }

    // function handleLoadingFooter() {
    //     if (loading) return <ActivityIndicator size="small" color="##fff" />;
    // }
    // function renderFooter() {
    //     return (
    //         <ActivityIndicator size="small" color="##fff" />
    //     );
    // }}

    function renderFooter() {
        if (!loadingMoreMeetup) return null;
        return <ActivityIndicator />;
    }

    return (
        <Background>
            <Header />
            <DatePicker>
                <TouchableOpacity onPress={handlePreviusDay}>
                    <Icon name="navigate-before" size={36} color="#fff" />
                </TouchableOpacity>
                <TextDate>{dateFormatted}</TextDate>
                <TouchableOpacity onPress={handleNextDay}>
                    <Icon name="navigate-next" size={36} color="#fff" />
                </TouchableOpacity>
            </DatePicker>
            <Container>
                {loading ? (
                    <ActivityIndicator size="large" color="##fff" />
                ) : (
                    <List
                        data={meetups}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => (
                            <Meetup
                                data={item}
                                buttonText="Realizar Inscrição"
                                buttonAction={() => {
                                    handleSubscribe(item.id);
                                }}
                            />
                        )}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={() => {
                                    handleRefresh();
                                }}
                            />
                        }
                        ListEmptyComponent={
                            <EmptyList>
                                <EmptyListText>
                                    Nenhuma meetup foi encontrada.
                                </EmptyListText>
                            </EmptyList>
                        }
                        onEndReached={() => {
                            // loadMeetups();
                        }}
                        onEndReachedThreshold={0.1}
                        ListFooterComponent={renderFooter}
                    />
                )}
            </Container>
        </Background>
    );
}

const icone = ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
);

icone.propTypes = {
    tintColor: PropTypes.string.isRequired,
};

Dashboard.navigationOptions = {
    tabBarLabel: 'Meetups',
    tabBarIcon: icone,
};
