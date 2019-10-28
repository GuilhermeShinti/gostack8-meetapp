import styled from 'styled-components';

export const Container = styled.View`
    height: 50px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2);
    padding: 0 10px;
`;

export const TInput = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255, 255, 255, 0.8)',
})`
    flex: 1;
    font-size: 18px;
    color: #ffffff;
`;
