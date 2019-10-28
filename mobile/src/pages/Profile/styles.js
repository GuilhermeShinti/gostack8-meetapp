import styled from 'styled-components';
import { Platform } from 'react-native';

import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
    behavior: Platform.OS === 'ios' ? 'padding' : null,
})`
    flex: 1;
`;
export const Form = styled.ScrollView.attrs({
    showVerticalScrollIndicator: false,
    contentContainerStyle: { padding: 20 },
})`
    align-self: stretch;
`;

export const FormInput = styled(Input)`
    margin-bottom: 15px;
`;

export const Separator = styled.View`
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 20px 0 15px;
`;

export const SubmitButton = styled(Button)``;

export const LogoutButton = styled(Button)`
    margin-top: 15px;
    height: 42;
    background: #d44059;
`;
