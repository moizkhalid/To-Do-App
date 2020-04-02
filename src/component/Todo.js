import React from 'react';
import { Button } from 'react-bootstrap';
export default function Todo(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ textDecoration: props.todo.complete ? 'line-through' : '' }} onClick={props.toggleComplete}>
        {props.todo.text}
        <Button className='btn mt-2 ml-2 btn-cancle' onClick={props.onDelete}>
          X
        </Button>
      </div>
    </div>
  );
}
