export default (state = [], action) => {
// Check if action dispatched (switch), if so act on it with CREATE_TASK
// I am used to create a POST to the api

  switch (action.type){
    case 'CREATE_TASK':
      return action.data;
    default:
          return state;
  }
};
