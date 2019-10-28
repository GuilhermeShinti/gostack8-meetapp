import styled from 'styled-components';

export const Container = styled.div`
    max-width: 940px;
    margin: 50px auto;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 50px;

        h1 {
            display: flex;
            color: #fff;
            font-size: 32px;
        }

        div {
            display: flex;

            button {
                border: none;
                display: flex;
                padding: 15px 15px;
                border-radius: 4px;
                color: #fff;

                span {
                    margin-left: 10px;
                    font-size: 16px;
                }
            }

            button.edit {
                margin-right: 20px;
                background-color: #4dbaf9;
            }

            button.cancel {
                background-color: #f94d6a;
            }
        }
    }

    section {
        img.banner {
            width: 940px;
            height: 300px;
        }

        div.description {
            color: #fff;
            margin-top: 30px;
        }

        footer.info {
            display: flex;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.6);
            /* line-height: 21px; */
            margin-top: 30px;
            /* justify-content: space-around; */

            div.date {
                display: flex;
                margin-right: 30px;
                span {
                    margin-left: 10px;
                }
            }

            div.location {
                display: flex;

                span {
                    margin-left: 10px;
                }
            }
        }
    }
`;
