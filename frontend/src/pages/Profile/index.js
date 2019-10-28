import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdAddCircleOutline } from 'react-icons/md';
import { updateProfileRequest } from '../../store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    const schema = Yup.object().shape({
        name: Yup.string('Nome obrigatório!'),
        email: Yup.string()
            .email()
            .required('Email obrigatório!'),
        oldPassword: Yup.string().min(6),
        password: Yup.string()
            .min(6, 'Necessário pelo menos 6 caracteres!')
            .when('old_password', (old_password, field) =>
                old_password ? field.required() : field
            ),
        confirmPassword: Yup.string().when('password', (password, field) =>
            password ? field.required().oneOf([Yup.ref('password')]) : field
        ),
    });

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
    }

    return (
        <Container>
            <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome Completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu endereço de e-mail"
                />
                <hr />
                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Senha atual"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmação de senha"
                />

                <div>
                    <button type="submit">
                        <MdAddCircleOutline size="24" />
                        <span>Salvar perfil</span>
                    </button>
                </div>
            </Form>
        </Container>
    );
}
