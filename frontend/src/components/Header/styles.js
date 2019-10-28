import styled from 'styled-components';

export const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0 30px;
`;

export const Content = styled.div`
    height: 92px;
    max-width: 940px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    aside {
        display: flex;
        align-items: center;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    div {
        text-align: right;

        strong {
            margin-right: 30px;
            display: block;
            font-size: 14px;
            color: #fff;
        }

        a {
            margin-right: 30px;
            display: block;
            font-size: 14px;
            color: #999999;
            margin-top: 2px;
        }
    }
`;
export const Button = styled.div`
    /* width: 71; */
    /* height: 42; */
    padding: 15px 25px;
    background-color: #d44059;
    color: #fff;
    border-radius: 4px;
`;
