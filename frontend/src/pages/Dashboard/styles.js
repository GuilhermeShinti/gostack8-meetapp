import styled from 'styled-components';

export const Container = styled.div`
    max-width: 940px;
    margin: 50px auto;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            display: flex;
            color: #fff;
            font-size: 32px;
        }

        button {
            display: flex;
            border: 0;
            padding: 15px 20px;
            background-color: #f94d6a;
            border-radius: 4px;
            color: #fff;
            font-size: 16px;

            span {
                margin-left: 10px;
            }
        }
    }
`;

export const MeetupList = styled.ul`
    margin-top: 30px;

    li {
        color: #fff;
        display: flex;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 15px 20px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        aside {
            display: flex;
            span {
                font-size: 18px;
                color: rgba(255, 255, 255, 0.6);
                margin-right: 20px;
            }

            a {
                color: #fff;
            }
        }
    }
`;
