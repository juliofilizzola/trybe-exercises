import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { removeTask } from '../redux/action/removeTask';


export class TodoList extends Component {
  render() {
    const { tasks } = this.props;
    console.log(tasks);
    return (
      <ul>
        {tasks.map((item, index) => (
        <div>
          <li key={index}> { item }</li>
          <button type="button">remove</button>
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
