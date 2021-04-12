import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom';
import api from '../Services/api';
import {Main, Form} from '../Styles/forms.style';
import ToDoLogo from '../assets/to-do-list.png';

function Signup({ history }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await api.post("/user/signup", { name, email, password });

            if (result.status === 200) history.push('/');
            else return alert('Cadastro invalido, tente usar outro email');

        } catch (err) {
            alert("Algo deu errado com suas credenciais!!!");
        }
    }
    const validateForm = () => email.length > 0 && password.length > 0 && name.length > 0;

    return (
        <Main>
            <img src={ToDoLogo} alt="ToDo list App"/>
            <h1>Cadastro:</h1>
            <Form onSubmit={e => handleSubmit(e)} autocomplete="off">
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
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
                    Cadastrar
                </button>
            </Form>
            <Link to="/">Já tem conta? Então faça o login!!!</Link>
        </Main>
    )
}

export default withRouter(Signup);