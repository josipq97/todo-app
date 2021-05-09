import {useState} from 'react'
import getCookie from './functions'

export default function TaskItem({t}) {
    const [task, setTask] = useState(t)

    const handleClick = (e) =>{
        console.log(task)
        setTask({
            ...task,
            completed: !task.completed
        })
        console.log(JSON.stringify(task))
        const csrftoken = getCookie('csrftoken');
        const url = `http://127.0.0.1:8000/update-task/${task.id}`;
        fetch(url, {
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(task)
        }).catch(error => {
            setTask({
                ...task,
                completed: !task.completed
            })
            console.log(error)
        })
    }
    
    return (
        <li className={`${task.completed && 'completed'}`}>
            {task.completed ? 
                <i className="fas fa-check-circle" onClick={handleClick}></i> : 
                <i className="far fa-circle" onClick={handleClick}></i>
            }                
            {task.title}
        </li>
    )
}
