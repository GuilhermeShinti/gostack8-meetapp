import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { signUpRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';

import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
    const dispatch = useDispatch();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loading = useSelector(state => state.auth.loading);

    function handleSubmit() {
        dispatch(signUpRequest(name, email, password));
        setName('');
        setEmail('');
        setPassword('');
        navigation.navigate('SignIn');
    }

    return (
        <Background>
            <Container>
                <Image source={logo} />

                <Form>
                    <FormInput
                        autoCorrect={false}
                        // autoCapitalize="none"
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
                        returnKeyType="next"
                        onSubmitEditing={() => {
                            passwordRef.current.focus();
                        }}
                        ref={emailRef}
                    />

                    <FormInput
                        secureTextEntry
                        placeholder="Sua senha secreta"
                        value={password}
                        onChangeText={setPassword}
                        ref={passwordRef}
                    />

                    <SubmitButton loading={loading} onPress={handleSubmit}>
                        Criar conta
                    </SubmitButton>

                    <SignLink onPress={() => navigation.navigate('SignIn')}>
                        <SignLinkText>Já tenho login</SignLinkText>
                    </SignLink>
                </Form>
            </Container>
        </Background>
    );
}

SignUp.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};
