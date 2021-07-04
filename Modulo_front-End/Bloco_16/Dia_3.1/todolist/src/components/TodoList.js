import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { removeTask } from '../redux/action/removeTask';


export class TodoList extends Component {
  render() {
    const { tasks, removeTasks } = this.props;
    console.log(tasks);
    return (
      <ul>
        {tasks.map((item, index) => (
        <div key={index}>
          <li> { item }</li>
          <button type="button"onClick={() => removeTasks(index)}>remove</button>
        </div>
        ) )}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.todoReducers.task
})

const mapDispatchToProps = (dispatch)=> ({
  removeTasks: (index) => dispatch(removeTask(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
