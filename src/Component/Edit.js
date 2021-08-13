import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {editTask} from '../JS/Action/action';
 
const Edit = ({task}) => {

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [newText, setNewText]=useState (task.text)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit =()=> {
  
    dispatch(editTask(task.id,newText));
    handleClose();  
}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header >
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input value={newText} onChange={(e) => setNewText(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;