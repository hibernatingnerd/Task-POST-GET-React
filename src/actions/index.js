import { FETCH_TASK_DATA, ADD_TASK } from './types';
import axios from 'axios';

const apiUrl = 'https://private-944f9-taskmaster2.apiary-mock.com/tasks';

export const createTask = ({ title, description }) => {
  return (dispatch) => {
    return axios.post(apiUrl, {title,description})
      .then(response => {
        alert(response.data.message)
        dispatch(createTaskSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createTaskSuccess = (data) => {
  return {
    type: ADD_TASK,
    payload: {
      id: data.id,
      title: data.title,
      description: data.description
    }
  }
};

export const fetchData = (data) => {
  return {
    type: FETCH_TASK_DATA,
    data
  }
};

export const fetchTaskData = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
