import React, { Component } from 'react';
import { connect } from 'react-redux';

export class TodoList extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <ul>
        {tasks.map((item, index) => <li key={index}> { item }</li> )}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.todoReducers.task
})

export default connect(mapStateToProps)(TodoList)
