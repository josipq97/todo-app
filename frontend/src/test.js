import {isTomorrow} from 'date-fns/isTomorrow'
import { isToday } from 'date-fns'
const test= [
    {
        "id": 2,
        "title": "Plan the family trip to Norway",
        "due_date": "2021-05-09T06:00:00Z",
        "completed": false,
        "deleted": false,
        "created_at": "2021-05-08T15:42:27.307858Z",
        "created_by": 2
    },
    {
        "id": 3,
        "title": "Plan David's birthday event",
        "due_date": "2021-05-09T00:00:00Z",
        "completed": false,
        "deleted": false,
        "created_at": "2021-05-08T15:43:02.069458Z",
        "created_by": 1
    },
    {
        "id": 4,
        "title": "Groceries for dinner",
        "due_date": "2021-05-09T18:00:00Z",
        "completed": false,
        "deleted": false,
        "created_at": "2021-05-08T15:43:44.952776Z",
        "created_by": 1
    },
    {
        "id": 5,
        "title": "Send the presentation to Jeff",
        "due_date": "2021-05-09T15:44:00Z",
        "completed": false,
        "deleted": false,
        "created_at": "2021-05-08T15:44:19.931299Z",
        "created_by": 1
    },
    {
        "id": 6,
        "title": "Take the jacket to dry cleaning",
        "due_date": "2021-05-09T15:44:48Z",
        "completed": false,
        "deleted": false,
        "created_at": "2021-05-08T15:44:53.106629Z",
        "created_by": 1
    },
    {
        "id": 7,
        "title": "Fix dad's tablet",
        "due_date": "2021-05-09T15:45:06Z",
        "completed": false,
        "deleted": false,
        "created_at": "2021-05-08T15:45:09.842109Z",
        "created_by": 1
    },
    {
        "id": 8,
        "title": "Talk with Steve about the trip",
        "due_date": "2021-05-10T15:45:24Z",
        "completed": false,
        "deleted": false,
        "created_at": "2021-05-08T15:45:27.696814Z",
        "created_by": 1
    },
    {
        "id": 9,
        "title": "josip task",
        "due_date": "2021-05-09T11:44:33Z",
        "completed": false,
        "deleted": false,
        "created_at": "2021-05-09T11:44:39.977736Z",
        "created_by": 2
    },
    {
        "id": 10,
        "title": "admin task",
        "due_date": "2021-05-09T11:44:33Z",
        "completed": false,
        "deleted": false,
        "created_at": "2021-05-09T11:51:41.538318Z",
        "created_by": 1
    },
    {
        "id": 11,
        "title": "josip task2",
        "due_date": "2021-05-09T11:44:33Z",
        "completed": false,
        "deleted": false,
        "created_at": "2021-05-09T11:51:56.746806Z",
        "created_by": 2
    },
    {
        "id": 12,
        "title": "sutra",
        "due_date": "2021-05-09T20:49:01Z",
        "completed": false,
        "deleted": false,
        "created_at": "2021-05-09T20:49:11.289175Z",
        "created_by": 1
    }
]

const today = test.map(task => {
    if(isToday(task.due_date)){
        console.log('today: ', task) 
        return task        
    }
})
const tomorrow = test.map(task => {
    if(isTomorrow(task.due_date)){
        console.log('tomorrow: ', task) 
        return task
    }
})