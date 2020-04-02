import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { Button } from 'react-bootstrap';

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: 'all',
    toggleAllComplete: true
  };
  addTodo = todo => {
    this.setState(state => ({
      todos: [todo, ...state.todos]
    }));
  };
  toggleComplete = id => {
    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          // suppose to update
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    }));
  };
  updateTodoToShow = s => {
    this.setState({
      todoToShow: s
    });
  };
  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };
  removeAllTodosThatAreComplete = () => {
    this.setState(state => ({
      todos: state.todos.filter(todo => !todo.complete)
    }));
  };
  render() {
    let todos = [];
    if (this.state.todoToShow === 'all') {
      todos = this.state.todos;
    } else if (this.state.todoToShow === 'active') {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === 'complete') {
      todos = this.state.todos.filter(todo => todo.complete);
    }
    return (
      <div style={{ textAlign: 'center' }}>
        <h2 className='display-4'>To Do List</h2>

        <TodoForm onSubmit={this.addTodo} />
        {todos.map(todo => (
          <Todo key={todo.id} toggleComplete={() => this.toggleComplete(todo.id)} onDelete={() => this.handleDeleteTodo(todo.id)} todo={todo} />
        ))}
        <div>todos left: {this.state.todos.filter(todo => !todo.complete).length}</div>
        <div>
          <Button className='other-btn btn' onClick={() => this.updateTodoToShow('all')}>
            all
          </Button>
          <Button className='other-btn btn' onClick={() => this.updateTodoToShow('active')}>
            active
          </Button>
          <Button className='other-btn btn' onClick={() => this.updateTodoToShow('complete')}>
            complete
          </Button>
        </div>
        {this.state.todos.some(todo => todo.complete) ? (
          <div>
            <Button className='other-btn btn' onClick={this.removeAllTodosThatAreComplete}>
              remove all complete todos
            </Button>
          </div>
        ) : null}
        <div>
          <Button
            className='other-btn btn'
            onClick={() =>
              this.setState(state => ({
                todos: state.todos.map(todo => ({
                  ...todo,
                  complete: state.toggleAllComplete
                })),
                toggleAllComplete: !state.toggleAllComplete
              }))
            }
          >
            toggle all complete {this.state.toggleAllComplete}
          </Button>
        </div>
      </div>
    );
  }
}