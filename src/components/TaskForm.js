import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as createTask from '../actions/index.js';

// TaskForm will be our component allowing a user to create a new task

class TaskForm extends Component {
  // create blank refs for our form
  getTitle = React.createRef();
  getDescription = React.createRef();
  // contructor is run immediatly
  constructor(props){
    super(props)
    // this is the default local state.
    this.state = {
      text: '',
      description: '',
    }
  }
  // method that updates state as user types
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  submitTask(input){
    this.props.createTask(input);
  }

  handleSubmit = (e) => {
    // prevent default submit action
    e.preventDefault();
    // retrieve the data from new task form
    const title = this.getTitle.current.value;
    const description =  this.getDescription.current.value;
    const data = {
                    id: new Date().getTime(),
                    title,
                    description
    }
    // dispatch the action, pass the data
    this.submitTask(data)
    // clear the input fields
    this.getTitle.current.value = '';
    this.getDescription.current.value = '';
  }

  render() {
    return (
      <div>
        <h1>Add a new Task</h1>
        <form onSubmit={ this.handleSubmit }>
        <input
          required
          type="text"
          ref={ this.getTitle }
          onChange={this.handleChange}
          value={this.state.text}
          name="text"
          placeholder="Enter Task Title"
        />
        <br />
        <textarea
          required
          rows="4"
          ref={ this.getDescription }
          cols="28"
          onChange={this.handleChange}
          value={this.state.description}
          name="description"
          placeholder="Enter Task Description"
        />
        <br />
        <button>Save</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: state.tasks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  createTask: task => dispatch(createTask.createTask(task))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
