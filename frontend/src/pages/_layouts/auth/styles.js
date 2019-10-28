import styled from 'styled-components';

// import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: linear-gradient(180deg, #22202c, #402845);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// export const Container = styled.div`
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

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

        button {
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

        a {
            margin-top: 15px;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.6);
            height: 21px;
        }
    }
`;
