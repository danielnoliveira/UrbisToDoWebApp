import React, { useEffect, useState } from 'react'
import api from '../Services/api';
import { getInfo } from '../Services/infoManager';
import { Link, withRouter } from 'react-router-dom';
import {logout } from '../Services/tokenManager';
import {Main,SecondaryMain, Form, TasksContainer} from '../Styles/main.style';
import Task from './Components/Task';


function ToDoApp({ history }) {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState([]);

    const getTasks = async () => {
        try {
            const result = await api.get('/list/items');
            if (result.status === 200) {
                setTasks(result.data);
            } else {
                alert("Algo deu errado");
            }
        } catch (err) {
            alert('Algo deu errado!!!');
        }

    }
    useEffect(() => {
        getTasks();
    }, []);

    const addTask = async (e) => {
        e.preventDefault();
        const result = await api.post('/list/item/create',{name:task});
        if(result.status === 200){
            getTasks();
            setTask("");
        }else{
            alert('Algo deu errado');
        }
    }
    const validateForm = _ => task.length > 0; 
    return (
        <Main>
            <header>
                <h1>Bem vindo ao ToDo List App {getInfo('todo-user-name')}</h1>
                <Link to="/" onClick={_ => logout()}>Sair</Link>
            </header>
            <SecondaryMain>
                <Form onSubmit={addTask}>
                    <input type="text" placeholder="Adicionar Tarefa" value={task} onChange={e => setTask(e.target.value)} />
                    <button type="submit" disabled={!validateForm()}>+</button>
                </Form>
                <TasksContainer>
                    <h2>Suas tarefas</h2>
                    <ul>
                        {tasks.map(task => {
                            return (<Task task={task} reloadTasks={getTasks}/>
                            );
                        })}
                    </ul>
                </TasksContainer>
            </SecondaryMain>

        </Main>
    )
}

export default withRouter(ToDoApp);