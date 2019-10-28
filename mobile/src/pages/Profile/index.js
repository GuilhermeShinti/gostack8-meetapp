import React, { useRef, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import Background from '~/components/Background';
import Header from '~/components/Header';

import {
    Container,
    Form,
    FormInput,
    Separator,
    SubmitButton,
    LogoutButton,
} from './styles';

export default function Profile() {
    const dispatch = useDispatch();

    const profile = useSelector(state => state.user.profile);

    const emailRef = useRef();
    const newPasswordRef = useRef();
    const confirmPasswordRef = useRef();

    const [name, setName] = useState(profile.name ? profile.name : '');
    const [email, setEmail] = useState(profile.email ? profile.email : '');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function handleSubmit() {
        try {
            dispatch(
                updateProfileRequest({
                    name,
                    email,
                    oldPassword,
                    newPassword,
                    confirmPassword,
                })
            );
        } catch (err) {
            Alert.alert('Erro', 'Falha ao atualizar os dados.');
        }
    }

    async function handleLogout() {
        dispatch(signOut());
    }

    useEffect(() => {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    }, [profile]);

    return (
        <Background>
            <Header />
            <Container>
                <Form>
                    <FormInput
                        autoCorrect={false}
                        placeholder="Nome completo"
                        value={name}
                        onChangeText={setName}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            emailRef.current.focus();
                        }}
                    />

                    <FormInput
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChangeText={setEmail}
                        ref={emailRef}
                    />

                    <Separator />

                    <FormInput
                        secureTextEntry
                        autoCorrect={false}
                        placeholder="Senha atual"
                        value={oldPassword}
                        onChangeText={setOldPassword}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            newPasswordRef.current.focus();
                        }}
                    />

                    <FormInput
                        secureTextEntry
                        autoCorrect={false}
                        placeholder="Nova Senha"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        ref={newPasswordRef}
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            confirmPasswordRef.current.focus();
                        }}
                    />

                    <FormInput
                        secureTextEntry
                        autoCorrect={false}
                        placeholder="Confirmação de senha"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        ref={confirmPasswordRef}
                    />

                    <SubmitButton onPress={handleSubmit}>
                        Salvar perfil
                    </SubmitButton>

                    <LogoutButton onPress={handleLogout}>
                        Sair do Meetup
                    </LogoutButton>
                </Form>
            </Container>
        </Background>
    );
}

const icone = ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
);

icone.propTypes = {
    tintColor: PropTypes.string.isRequired,
};

Profile.navigationOptions = {
    tabBarLabel: 'Meu perfil',
    tabBarIcon: icone,
};
