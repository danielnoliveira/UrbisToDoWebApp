import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom';
import api from '../Services/api';
import { login } from '../Services/tokenManager';
import {setInfo} from '../Services/infoManager';
import {Main, Form} from '../Styles/forms.style';
import ToDoLogo from '../assets/to-do-list.png';

function Signin({history}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await api.post("/user/signin",{email,password});

            if(result.data.auth) {
                setInfo('todo-user-name',result.data.name);
                login(result.data.token);
            }else {
                return alert('Login invalido');
            }
            history.push('/app');
        }catch(err){
            alert("Algo deu errado com suas credenciais!!!");
        }
    }
    const validateForm = () => email.length > 0 && password.length > 0;

    return (
        <Main>
            <img src={ToDoLogo} alt="ToDo List Logo"/>
            <h1>Login:</h1>
            <Form onSubmit={e=>handleSubmit(e)}>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" disabled={!validateForm()}>
                    Entrar
                </button>
            </Form>
            <Link to="/signup">Não tem conta? Então crie uma agora mesmo!!!</Link>
        </Main>
    )
}

export default withRouter(Signin);