import styled from 'styled-components';

import Button from '~/components/Button';

export const Container = styled.View`
    display: flex;
    background: #fff;
    padding: 15px 15px;
    margin-bottom: 20px;
    border-radius: 4px;
    flex-direction: column;
`;

export const Banner = styled.Image`
    width: 100%;
    height: 150px;
`;

export const Info = styled.View`
    margin-bottom: 10px;
`;

export const Title = styled.Text`
    font-size: 18px;
    margin-bottom: 10px;
`;

export const View = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const Text = styled.Text`
    margin-left: 5px;
    font-size: 13px;
    color: #999999;
`;

export const ActionButton = styled(Button)`
    font-weight: 400;
    font-size: 16px;
`;
