import React, { Component } from 'react';
import shortid from 'shortid';
import { Button } from 'react-bootstrap';

class TodoForm extends Component {
  state = {
    text: ''
  };
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ''
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='todo..' value={this.state.text} className='todo-inputField form-control' onChange={this.handleChange} />
          <Button className='add-btn btn' onClick={this.handleSubmit}>
            add Todo
          </Button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
