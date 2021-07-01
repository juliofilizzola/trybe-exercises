const INITIAL_STATE = {
  task: [],
  count: 0,
  selected: false,
}

function todoReducer(state = INITIAL_STATE, action) {
  if(action.type === 'ADD_TASK') {
    return {
      task: [...state.task, action.task],
      count: state.count + 1,
    }
  }
  if(action.type === 'REMOVE_TASK') {
    return {
      count: state.count - 1,
    }
  }
  return state;
}

export default todoReducer;
