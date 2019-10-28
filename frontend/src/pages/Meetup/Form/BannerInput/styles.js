import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-self: center;

    label {
        cursor: pointer;

        img {
            height: 300px;
            width: 100%;
            min-width: 940px;
            background: rgba(0, 0, 0, 0.2);
            border: 0;
            border-radius: 4px;
        }

        input {
            display: none;
            span {
                display: block;
            }
        }
    }
`;
