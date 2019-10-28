import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/m.svg';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, Profile, Button } from './styles';

export default function Header() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Content>
                <div>
                    <Link to="/">
                        <img src={logo} alt="meetup" />
                    </Link>
                </div>

                <aside>
                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <Button onClick={handleSignOut}>Sair</Button>
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
