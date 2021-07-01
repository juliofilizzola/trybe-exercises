const INITIAL_STATE = {
  task: [],
  count: 0,
  selected: false,
}

function todoReducer(state = INITIAL_STATE, action) {
  if(action.type === 'ADD_TASK') {
    return {
      task: action.task,
      count: state.count,
    }
  }
  return state;
}

export default todoReducer;
