import {useEffect, useState} from 'react'
import TaskItem from './TaskItem'
import isTomorrow from 'date-fns/isTomorrow'
import { isToday } from 'date-fns'
import parseISO from 'date-fns/parseISO'
import startOfToday from 'date-fns/startOfToday'

export default function Main() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [tasks, setTasks] = useState([])

    const sortTasks = (task_list) =>{
        let new_list = {
            missed : [],
            today: [],
            tomorrow: [],
            upcomming: [],
        }
        task_list.forEach(task => {
            if(parseISO(task.due_date) < startOfToday()){
                new_list.missed.push(task)
            }
            else if(isToday(parseISO(task.due_date))){
                new_list.today.push(task)
            } else if(isTomorrow(parseISO(task.due_date))){
                new_list.tomorrow.push(task)
            } else{
                new_list.upcomming.push(task)
            }
        });
        return new_list
    }

    useEffect(() => {
        fetch('http://127.0.0.1:8000/')
            .then(res => res.json())
            .then(result => {
                setTasks(sortTasks(result))
                setIsLoaded(true);
            },
            (error) => {
                setError(error);
                setIsLoaded(true);
            })
    }, [])

    if(!isLoaded){
        return <div>Loading...</div>
    } else if(error){
        return <div>something went wrong</div>
    } else{
        return (
            <div className="main_wrapper">
                {tasks.missed.length > 0 && 
                    <div className='missed'>
                        <h1>Missed</h1>
                        <ul>
                            {tasks.missed.map(task => {
                                return <TaskItem key={task.id} t={task} />
                            })}
                        </ul>
                    </div>
                }
                {tasks.today.length > 0 && 
                    <div className='today'>
                        <h1>Today</h1>
                        <ul>
                            {tasks.today.map(task => {
                                return <TaskItem key={task.id} t={task} />
                            })}
                        </ul>
                    </div>
                }
                {tasks.tomorrow.length > 0 && 
                    <div className='tomorrow'>
                        <h1>Tomorrow</h1>
                        <ul>
                            {tasks.missed.map(task => {
                                return <TaskItem key={task.id}tomorrow t={task} />
                            })}
                        </ul>
                    </div>
                }
                {tasks.upcomming.length > 0 && 
                    <div className='upcomming'>
                        <h1>Upcomming</h1>
                        <ul>
                            {tasks.upcomming.map(task => {
                                return <TaskItem key={task.id} t={task} />
                            })}
                        </ul>
                    </div>
                }
            </div>
        )
    }
    
}
