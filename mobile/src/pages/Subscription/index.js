import React, { useState, useEffect } from 'react';
import { Alert, RefreshControl, ActivityIndicator } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container, List, EmptyList, EmptyListText } from './styles';
import Meetup from '~/components/Meetup';

export default function Subscription() {
    const [refreshing, setRefresh] = useState(false);
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [scrolling, setScrolling] = useState(false);
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

    async function loadSubscription() {
        try {
            setLoading(true);
            const response = await api.get('subscription');
            const subs = response.data.map(sub => ({
                ...sub.Meetup,
            }));

            setSubscriptions(meetupsDateFormat(subs));
            setLoading(false);
        } catch (err) {
            setLoading(false);
            Alert.alert('Erro', 'Falha ao buscar inscrições');
        }
    }

    async function handleUnsubscribe(id) {
        try {
            await api.delete(`subscription/${id}`);
            setSubscriptions(subscriptions.filter(sub => sub.id !== id));
        } catch (err) {
            Alert.alert('Erro', 'Falha ao cancelar inscrições');
        }
    }

    async function handleRefresh() {
        setRefresh(true);
        await loadSubscription();
        setRefresh(false);
    }

    useEffect(() => {
        loadSubscription();
    }, []);

    function handleNextPage() {
        if (scrolling) {
            setPage(page + 1);
        }
    }

    return (
        <Background>
            <Header />
            <Container>
                {loading ? (
                    <ActivityIndicator size="large" color="##fff" />
                ) : (
                    <List
                        data={subscriptions}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => (
                            <Meetup
                                data={item}
                                buttonText="Cancelar Inscrição"
                                buttonAction={() => {
                                    handleUnsubscribe(item.id);
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
                                    Você não se inscreveu em nenhuma meetup
                                    ainda.
                                </EmptyListText>
                            </EmptyList>
                        }
                        onEndReached={() => {
                            handleNextPage();
                        }}
                        onEndReachedThreshold={0.5}
                        onMomentumScrollBegin={() => {
                            setScrolling(true);
                        }}
                    />
                )}
            </Container>
        </Background>
    );
}

const icone = ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
);

icone.propTypes = {
    tintColor: PropTypes.string.isRequired,
};

Subscription.navigationOptions = {
    tabBarLabel: 'Inscrições',
    tabBarIcon: icone,
};
