import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex: 1;
    /* align-items: center;
    justify-content: center; */
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { padding: 20 },
})``;

export const EmptyList = styled.View`
    /* margin-top: 50px; */
    align-self: center;
    /* max-width: 300px; */
`;

export const EmptyListText = styled.Text`
    color: #fff;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
`;

export const DatePicker = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const TextDate = styled.Text`
    color: #fff;
    font-size: 20px;
    margin: 0 15px;
`;
