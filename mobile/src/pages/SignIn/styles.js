import styled from 'styled-components';

import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.View`
    flex: 1;
    padding: 0 30px;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 50px;
`;
export const FormInput = styled(Input)`
    margin-top: 10px;
`;
export const SubmitButton = styled(Button)`
    margin-top: 10px;
`;
export const SignLink = styled.TouchableOpacity`
    margin-top: 10px;
`;
export const SignLinkText = styled.Text`
    color: #fff;
    text-align: center;
    margin-top: 10px;
`;
