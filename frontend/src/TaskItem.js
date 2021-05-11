import {useEffect, useState} from 'react'
import { IconContext } from "react-icons";
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteForever } from 'react-icons/md'
import getCookie from './functions'

export default function TaskItem({deleteTask, t}) {
    const [task, settask] = useState(t)

    const checkTask = () => {
        settask({
            ...task,
            completed: !task.completed
        })
    }
    
    useEffect(() => {
        const url = `http://127.0.0.1:8000/update-task/${task.id}`
        const csrf_token = getCookie('csrftoken');
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': csrf_token
            },
            body: JSON.stringify(task)
        }).catch(error => {
            console.log(error)
        })
    }, [task])

    return (
        <div className="TaskItem__container">
            {task.completed ?
                <IconContext.Provider value={{ color: "blue", className: "TaskItem__icon--completed" }}>
                    <div onClick={checkTask}>
                    <AiFillCheckCircle />
                    </div>
                </IconContext.Provider> :
              
                <IconContext.Provider value={{ color: "blue", className: "TaskItem__icon--uncompleted" }}>
                    <div onClick={checkTask}>
                        <AiOutlineCheckCircle />
                    </div>
                </IconContext.Provider>}

                <div className="TaskItem__text">
                    <span>{task.title}</span>
                </div>

                <div className="TaskItem__edit">
                    <FiEdit />
                </div>

                <div onClick={() => deleteTask(task.id)} className="TaskItem__delete">
                    <MdDeleteForever />
                </div>
        </div>
    )
}

