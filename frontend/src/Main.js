import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'

export default function Main() {
    const [tasks, setTasks] = useState([])
    const [isLoaded, setisLoaded] = useState(false)

    const fetchTasks = () => {
        const url = 'http://127.0.0.1:8000/'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTasks(data)
                setisLoaded(true)
            }).catch(error => {
                console.log(error)
            })
    }
    
    const deleteTask = (task_id) => {
        const url = `http://127.0.0.1:8000/delete-task/${task_id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(response => {
            setTasks(tasks.filter(task => task.id !== task_id   
            ))
        }).catch(error => {
            console.log(error)
        })
    }


    useEffect(() => {
        fetchTasks()
    }, [])

    if(!isLoaded){
        return <div>Loading...</div>

    } else{
        return(
            <div>
                {tasks.map(task => <TaskItem deleteTask={deleteTask} key={task.id} t={task}/>)}
            </div>
        )
    }
}
