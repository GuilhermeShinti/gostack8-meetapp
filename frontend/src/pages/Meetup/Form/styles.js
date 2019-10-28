import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 940px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 50px;

        textarea,
        input {
            background: rgba(0, 0, 0, 0.2);
            border: 0;
            border-radius: 4px;
            color: #fff;
            margin: 0 0 10px;
            font-size: 18px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.5);
            }
        }

        input {
            height: 50px;
            padding: 0 15px;
        }

        textarea {
            width: 100%;
            max-width: 940px;
            height: 200px;
            padding: 10px 15px;
            font-size: 18px;
        }

        .date {
            color: #fff;
            width: 100%;
        }

        > div {
            display: flex;
            justify-content: flex-end;

            > button {
                padding: 15px 25px;
                margin: 5px 0 0;
                height: 50px;
                border: 0px;
                border-radius: 4px;
                background: #f94d6a;
                color: #fff;
                font-size: 18px;
                transition: background 0.2s;

                &:hover {
                    background: ${darken(0.03, '#f94d6a')};
                }
            }
        }
    }
`;
