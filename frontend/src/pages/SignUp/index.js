import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/m.svg';

import { signUpRequest } from '../../store/modules/auth/actions';

export default function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }
    return (
        <>
            <img src={logo} alt="meetup" />

            <Form onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder="Nome completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha secreta"
                />
                <button type="submit">Criar conta</button>
                <Link to="/register">Já tenho conta</Link>
            </Form>
        </>
    );
}
