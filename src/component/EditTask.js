import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/action/taskAction';

const EditTask = ({task}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [newTask, setNewTask] = useState(task.text)
    const handleInput=(e)=>{
        setNewTask(e.target.value)
    }
    const dispatch=useDispatch()

    const send=()=>{
        dispatch(
            editTask({id:task.id,text:newTask})
            )
    }


  return (
    <div>
          <Button  onClick={handleShow}>
        EditTask
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>create new task
          </Modal.Title>
        </Modal.Header>
        <Form.Control  className='box2' size="lg" type="text"  value={newTask} onChange={handleInput} />
        <Modal.Footer>
          <Button  onClick={handleClose}>
            Close
          </Button>
          <Button  onClick={send} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default EditTask