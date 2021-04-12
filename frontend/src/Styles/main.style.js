import styled, { css } from 'styled-components';

export const Main = styled.div`
    display:flex;
    min-height: 100vh;
    width: 100vw;
    background-color: #50758d;
    flex-direction: column;
    header {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        height: 50px;
        h1,a {
            color:  #fad33a;
            font-size: 20px;
        }
    }
`;

export const SecondaryMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: calc(100vh - 50px);
    align-items: center;
    justify-content: flex-start;
    padding-top: 100px;
    * {
        width: 80%;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction:row;
    input,button {
        height: 30px;
    }
    input {
        font-size: 20px;
        flex: 5;
        padding-left:10px;
        border-radius: 50px 0 0 50px;
        border:none;
        margin-right:3px;
        outline: none;
    }

    button {
        flex: 1;
        font-weight: bold;
        border-radius: 0 50px 50px 0;
        border: none;
        font-size: 32px;
        line-height: 32px;
        outline: none;
    }
    button:not(:disabled):hover {
        cursor: pointer;
        background: black;
        color: white;
    }
`;

export const TasksContainer = styled.div`

    h2 {
        color:  #fad33a;
        margin: 10px 0;
    }
    ul {
        list-style: none;
        width: 100%;
        background: white;
        border-radius: 5px;
        li{
            width: 100%;
            padding:8px 6px;
            border-bottom: 1px solid gray;
            margin: 0 5px;
            font-size: 20px;
            display: flex;
        }
    }
`;

export const ButtonsTask = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-evenly;
    button {
        border: none;
        opacity: 0.5;
        cursor: pointer;
        width:30px;
        height: 28px;
        outline: none;
        border: 1px solid #c9c9c9;
    }
    i {
        font-size: 20px;
    }
    button:hover{
        opacity: 1;
    }
    button:nth-child(1):hover {
        border: 1px solid green;
    }
    button:nth-child(2):hover {
        border: 1px solid red;
    }
    button:hover>i[class="fas fa-check"] {
        color: green;
    }
    button:hover>i[class="far fa-trash-alt"] {
        color: red;
    }
`;

export const TaskName = styled.span`
    ${props => props.concluded && css`
        text-decoration: line-through;
    `}
    flex: 3;
`;