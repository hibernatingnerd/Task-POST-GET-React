import { FETCH_TASK_DATA } from '../actions/types';
// Check if action dispatched (switch), if so act on it with FETCH_TASK_DATA
// I get all the previous tasks!
export default function fetchtaskReducer(state = [], action) {
  switch (action.type) {
      case FETCH_TASK_DATA:
      return action.data;
    default:
      return state;
  }
}
