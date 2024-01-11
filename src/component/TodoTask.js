import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditTask from './EditTask'
import { Button } from 'react-bootstrap'
import { deleteTask } from '../redux/action/taskAction'

const TodoTask = () => {
    const tasks=useSelector(store=>store)
const dispatch=useDispatch()

  return (
    <div>
    {tasks && tasks.map((task)=>
    <div style={{display:"flex"}} >
       <h1 className='newtask'> {task.text}  </h1>
       <EditTask task={task} />
       <Button className='delete' onClick={()=>dispatch(deleteTask(task.id))} >delete</Button>
    </div> )}
    
    </div>
  )
}

export default TodoTask