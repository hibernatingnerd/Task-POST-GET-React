import React, { Component } from 'react';
// I just display pervious tasks
class Task extends Component {
  render() {
  return (
    <div>
      <h2>title: {this.props.post.title}</h2>
      <p>description: {this.props.post.description}</p>
      <p>id: {this.props.post.id}</p>
    </div>
  );
 }
}

export default Task;
