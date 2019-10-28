import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { padding: 20 },
})``;

export const EmptyList = styled.View`
    margin-top: 50px;
    align-self: center;
    max-width: 300px;
`;

export const EmptyListText = styled.Text`
    color: #fff;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
`;
