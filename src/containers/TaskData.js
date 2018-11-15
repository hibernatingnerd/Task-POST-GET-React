import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
// I iterate over the previous task retrieved from Store.
function TaskData({ data }) {
  if(!data) {
    return (
      <div>
        No Data
      </div>
    )
  }
  return (
      <div>
          <h1>Previously Submitted Tasks</h1>
          {data.map((task) => <Task key={task.id} post={task} />)}
      </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, null)(TaskData);
