import React,{useState} from 'react'
import api from '../../Services/api';
import {ButtonsTask,TaskName} from '../../Styles/main.style';


export default function Task({task,reloadTasks}) {
    const [concluded, setConcluded] = useState(false);

    const finishTask = async _ => {
        const result = await api.post('/list/item/update',{
            name: task.name,
            concluded:!concluded,
            id_task: task.id,
        });
        setConcluded(!concluded);
        result.status !== 200 && alert("Algo deu errado!!!");
    }
    const deleteTask = async _ => {
        const result = await api.delete('/list/item/delete',{data:{
            id_task: task.id,
        }});
        result.status !== 200 && alert("Algo deu errado!!!");
        reloadTasks();
    }
    return (
        <li key={task.id}>
            <TaskName concluded={concluded}>{task.name}</TaskName>
            <ButtonsTask>
                <button onClick={finishTask} disabled={concluded}>
                    <i class="fas fa-check" title="Concluir"></i>
                </button>
                <button onClick={deleteTask}>
                    <i class="far fa-trash-alt" title="Excluir"></i>
                </button>
            </ButtonsTask>
        </li>
    )
}
