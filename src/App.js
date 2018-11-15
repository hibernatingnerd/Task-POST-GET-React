import React, { Component } from 'react';
import TaskData from './containers/TaskData';
import TaskForm from './components/TaskForm';

class App extends Component {
  render() {
    return (
    <div className="App">
        <TaskForm />
        <TaskData />
    </div>
    );
  }

}


export default App;
