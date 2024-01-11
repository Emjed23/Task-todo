import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action/taskAction';

const AddTask = () => {
    const [input, setInput] = useState("")
    const handleInput=(e)=>{
        setInput(e.target.value)
    }
const dispatch=useDispatch()

  return (
    <div className='addnewtask'>
      <Form.Control className='inputtext' size="lg" type="text" placeholder="New task" onChange={handleInput} />
      <Button onClick={()=>dispatch(addTask({id:Math.random(),text:input}))} >Add Task</Button>

    </div>
  )
}

export default AddTask