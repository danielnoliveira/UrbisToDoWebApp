import styled from  'styled-components';

export const Main = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #50758d;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1,a{
        color: #fad33a;
    }
    img {
        width: 200px;
        height: 200px;
        margin-top: -50px;
        margin-bottom: 20px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    * {
        margin: 10px 0;
    }
    input {
        font-size: 24px;
        line-height: 32px;
        border: 2px solid #c1c1c1;
        margin:8px 0;
        border-radius: 50px;
        padding: 0 10px;
        outline: none;
    }
    button {
        height: 35px;
        width: 100%;
        border-radius: 50px;
        border: none;
        font-size: 18px;
        font-weight: bold;
    }
    button:not(:disabled):hover {
        cursor:pointer;
        background-color: black;
        color: white;
    }
`;