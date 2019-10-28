import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 940px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;
        margin-top: 50px;

        input {
            background: rgba(0, 0, 0, 0.2);
            height: 50px;
            border: 0;
            padding: 0 15px;
            border-radius: 4px;
            color: #fff;
            margin: 0 0 10px;
            font-size: 18px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.5);
            }
        }

        hr {
            border: 0px;
            height: 1px;
            margin: 20px 0 15px;
            background: rgba(255, 255, 255, 0.1);
        }

        div {
            display: flex;
            justify-content: end;

            button {
                display: flex;
                width: 100%;
                max-width: 180px;
                margin-top: 10px;
                padding: 15px 0px;
                border: 0px;
                border-radius: 4px;
                background: #f94d6a;
                color: #fff;
                font-size: 18px;
                transition: background 0.2s;
                justify-content: center;

                span {
                    margin-left: 10px;
                }

                &:hover {
                    background: ${darken(0.03, '#f94d6a')};
                }
            }
        }
    }
`;
export const Form = styled.div``;
export const Input = styled.div``;
