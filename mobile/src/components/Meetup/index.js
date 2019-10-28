import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Info, Title, Text, View, ActionButton } from './styles';

export default function Meetup({ data, buttonText, buttonAction }) {
    return (
        <Container>
            <Image
                style={{ width: 200, height: 150 }}
                source={{ uri: data.banner.url }}
            />
            <Info>
                <Title>{data.title}</Title>
                <View>
                    <Icon name="today" size={14} color="#999999" />
                    <Text>{data.formattedDate}</Text>
                </View>
                <View>
                    <Icon name="location-on" size={14} color="#999999" />
                    <Text>{data.location}</Text>
                </View>
                <View>
                    <Icon name="person" size={14} color="#999999" />
                    <Text>Organizador: {data.User.name}</Text>
                </View>
            </Info>
            <ActionButton onPress={() => buttonAction()}>
                {buttonText}
            </ActionButton>
        </Container>
    );
}

Meetup.propTypes = {
    data: PropTypes.shape({
        banner: PropTypes.shape({
            url: PropTypes.string.isRequired,
        }),
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        formattedDate: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        User: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
    }).isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonAction: PropTypes.func.isRequired,
};
