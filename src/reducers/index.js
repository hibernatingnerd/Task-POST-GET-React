import { combineReducers } from 'redux';
import data from './fetchTaskReducer';
import tasks from './taskReducer'

export default combineReducers({
    data: data,
    tasks: tasks
});
